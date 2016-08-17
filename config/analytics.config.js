export const GA_TRACKING_ID = process.env.NODE_ENV === 'production'
  ? undefined   // Replace with production Tracking ID
  : undefined;  // Replace with testing Tracking ID
