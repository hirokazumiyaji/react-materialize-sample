import { useRouterHistory } from 'react-router'
import createHistory from 'history/lib/createHashHistory'

export default useRouterHistory(createHashHistory)({ queryKey: false });
