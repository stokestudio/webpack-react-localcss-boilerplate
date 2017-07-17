import Loadable from 'react-loadable';

const Loading = () => null;

export default loader => Loadable({ loader, loading: Loading });
