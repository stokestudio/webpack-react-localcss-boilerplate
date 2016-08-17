import { GA_TRACKING_ID } from '../../config/analytics.config';

const isClient = () => typeof document !== 'undefined';

const onClient = cb => {
  if (isClient()) cb(require('react-ga'));
}
onClient(ReactGA => ReactGA.initialize(GA_TRACKING_ID));

export const logEvent = event => {
  onClient(ReactGA => ReactGA.event(event));
};

export const logModalView = view => {
  onClient(ReactGA => ReactGA.modalview(view));
};

export const logPageView = () => {
  onClient(ReactGA => {
    const { pathname: page } = window.location;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  });
};
