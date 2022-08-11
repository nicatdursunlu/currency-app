import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import ExchangeRatesService from 'services/exchange-rates.service'

const Home: React.FC = () => {
  const [converterText, setConverterText] = useState<string | null>(null)
  const [params, setParams] = useState<object>({
    amount: 0,
    from: null,
    to: null,
  })
  const [result, setResult] = useState<number | string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleGetResult = async () => {
    setLoading(true)
    try {
      if (converterText) {
        const { result, query } = await ExchangeRatesService.getConvert(params)
        setResult(result + ' ' + query.to)
      }
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Card className="card" variant="outlined" style={{ display: 'block' }}>
        <CardContent>
          <Grid
            className="grid"
            container
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={9}>
              <TextField
                fullWidth={true}
                label="Converter"
                variant="filled"
                autoComplete="off"
                onChange={(e) => {
                  setConverterText(e.target.value)
                  setParams((state) => ({
                    ...state,
                    amount: e.target.value?.split(' ')[0],
                    from: e.target.value?.split(' ')[1],
                    to: e.target.value?.split(' ')[3],
                  }))
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={handleGetResult}
                disableElevation
                variant="contained"
                color="primary"
              >
                Get result
                {loading && (
                  <CircularProgress size={20} className="progressBtn" />
                )}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Result: {result ?? ''}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Home as React.FC
