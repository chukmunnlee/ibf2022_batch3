export interface WeatherQuery {
  city: string
  units: string
}

export interface WeatherData {
  main: string
  description: string
  icon: string
}
