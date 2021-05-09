import { Logger } from '@kondah/core'

import { Application } from './application'
import { WelcomePlugin } from './plugins/welcome.plugin'

new Application({
  logger: new Logger('border'),
  plugins: [WelcomePlugin],
  config: {},
})

/*** Kondah is currently in pre-alpha! ***/

//  available plugins: https://github.com/donnyroufs/kondah/tree/master/packages
//  official website: https://kondah.dev