import React, { useEffect, useState } from 'react'
import {
  TextField,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Typography,
  Box,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import clsx from 'clsx'

import ExchangeRatesService from 'services/exchange-rates.service'

export interface ISymbol {
  key: string
  value: string
}

const ExchangeRates: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [rates, setRates] = useState<any>({})

  const [symbolsList, setSymbolsList] = useState<ISymbol[]>([])
  const [symbol, setSymbol] = useState<string | null>(null)

  const getSymbols = async () => {
    setLoading(true)
    try {
      let { symbols } = await ExchangeRatesService.getSymbols()
      Object.keys(symbols).map((key) =>
        setSymbolsList((state) => [...state, { key, value: symbols[key] }])
      )
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const getLatestCurrency = async (base: string | null) => {
    try {
      if (base) {
        let { rates } = await ExchangeRatesService.getLatestCurrency({ base })
        setRates(rates)
      }
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getSymbols()
  }, [])

  useEffect(() => {
    getLatestCurrency(symbol)
  }, [symbol])

  return (
    <>
      <Card
        className="card"
        variant="outlined"
        style={{ display: 'block', marginBottom: 20 }}
      >
        <CardContent>
          <Grid
            className="grid"
            container
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item xs={6}>
              <Autocomplete
                className={clsx('autocomplete')}
                options={symbolsList}
                defaultValue={null}
                onChange={(e, option: any) => {
                  setSymbol(option.key)
                }}
                loading={loading}
                getOptionLabel={(option: any) => option.key}
                getOptionSelected={(option, value) =>
                  option.value === value.value
                }
                renderOption={(option: any) => (
                  <React.Fragment>
                    <Typography>
                      {option.key} - {option.value}
                    </Typography>
                  </React.Fragment>
                )}
                autoHighlight
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Base currency"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading && (
                            <CircularProgress color="inherit" size={20} />
                          )}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {symbol &&
        Object.keys(rates).map((key) => (
          <Box
            key={key}
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ marginBottom: 10 }}
          >
            <Box>
              <Typography variant="body1">1 {symbol}=</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                {rates[key]} {key}
              </Typography>
            </Box>
          </Box>
        ))}
    </>
  )
}

export default ExchangeRates as React.FC
