import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

export default Reactotron
  .configure({ name: 'clintal-react-staff' })
  .use(reactotronRedux())
  .connect()
