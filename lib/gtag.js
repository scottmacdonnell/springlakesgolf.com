export const {
  GOOGLE_ANALYTICS_ID: MEASUREMENT_ID
} = process.env

export const pageview = (url) => {
  window.gtag('config', MEASUREMENT_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}