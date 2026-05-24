# TestMu AI SDET-2 Assessment

## Objective

Build a scalable automation framework supporting:

- UI Testing
- API Testing
- Integration Testing
- CI/CD Quality Gates
- Reporting & Failure Diagnostics

---

## Tech Stack

- Playwright
- TypeScript
- Allure Reporting
- GitHub Actions

---

## Framework Design Goals

- Maintainability
- Scalability
- Reusability
- Cross-browser support
- Data-driven execution
- Reliable reporting

---

## Planned Coverage

### UI
- Login
- Dashboard
- Form validation

### API
- CRUD
- Auth
- Schema validation
- Error handling

### Integration
- API + UI E2E flow

---

## Folder Structure

Folder PATH listing for volume Win 11
Volume serial number is 4604-6474
C:.
│   .env
│   .gitignore
│   ai-usage-log.md
│   package-lock.json
│   package.json
│   playwright.config.ts
│   README.md
│   test-strategy.md
│   tsconfig.json
│   
├───.github
│   └───workflows
│           playwright.yml
│           
├───api
│   ├───clients
│   │       UserApiClient.ts
│   │       
│   ├───schemas
│   │       user.schema.json
│   │       
│   └───utils
│           apiHelper.ts
│           
├───config
│       env.ts
│       testConfig.ts
│       users.json
│       
├───fixtures
│       testData.json
│       
├───node_modules
│   │   .package-lock.json
│   │   
│   ├───.bin
│   │       playwright
│   │       playwright-core
│   │       playwright-core.cmd
│   │       playwright-core.ps1
│   │       playwright.cmd
│   │       playwright.ps1
│   │       
│   ├───@playwright
│   │   └───test
│   │           cli.js
│   │           index.d.ts
│   │           index.js
│   │           index.mjs
│   │           LICENSE
│   │           NOTICE
│   │           package.json
│   │           README.md
│   │           reporter.d.ts
│   │           reporter.js
│   │           reporter.mjs
│   │           
│   ├───@types
│   │   └───node
│   │       │   assert.d.ts
│   │       │   async_hooks.d.ts
│   │       │   buffer.buffer.d.ts
│   │       │   buffer.d.ts
│   │       │   child_process.d.ts
│   │       │   cluster.d.ts
│   │       │   console.d.ts
│   │       │   constants.d.ts
│   │       │   crypto.d.ts
│   │       │   dgram.d.ts
│   │       │   diagnostics_channel.d.ts
│   │       │   dns.d.ts
│   │       │   domain.d.ts
│   │       │   events.d.ts
│   │       │   fs.d.ts
│   │       │   globals.d.ts
│   │       │   globals.typedarray.d.ts
│   │       │   http.d.ts
│   │       │   http2.d.ts
│   │       │   https.d.ts
│   │       │   index.d.ts
│   │       │   inspector.d.ts
│   │       │   inspector.generated.d.ts
│   │       │   LICENSE
│   │       │   module.d.ts
│   │       │   net.d.ts
│   │       │   os.d.ts
│   │       │   package.json
│   │       │   path.d.ts
│   │       │   perf_hooks.d.ts
│   │       │   process.d.ts
│   │       │   punycode.d.ts
│   │       │   querystring.d.ts
│   │       │   quic.d.ts
│   │       │   readline.d.ts
│   │       │   README.md
│   │       │   repl.d.ts
│   │       │   sea.d.ts
│   │       │   sqlite.d.ts
│   │       │   stream.d.ts
│   │       │   string_decoder.d.ts
│   │       │   test.d.ts
│   │       │   timers.d.ts
│   │       │   tls.d.ts
│   │       │   trace_events.d.ts
│   │       │   tty.d.ts
│   │       │   url.d.ts
│   │       │   util.d.ts
│   │       │   v8.d.ts
│   │       │   vm.d.ts
│   │       │   wasi.d.ts
│   │       │   worker_threads.d.ts
│   │       │   zlib.d.ts
│   │       │   
│   │       ├───assert
│   │       │       strict.d.ts
│   │       │       
│   │       ├───compatibility
│   │       │       iterators.d.ts
│   │       │       
│   │       ├───dns
│   │       │       promises.d.ts
│   │       │       
│   │       ├───fs
│   │       │       promises.d.ts
│   │       │       
│   │       ├───inspector
│   │       │       promises.d.ts
│   │       │       
│   │       ├───path
│   │       │       posix.d.ts
│   │       │       win32.d.ts
│   │       │       
│   │       ├───readline
│   │       │       promises.d.ts
│   │       │       
│   │       ├───stream
│   │       │       consumers.d.ts
│   │       │       iter.d.ts
│   │       │       promises.d.ts
│   │       │       web.d.ts
│   │       │       
│   │       ├───test
│   │       │       reporters.d.ts
│   │       │       
│   │       ├───timers
│   │       │       promises.d.ts
│   │       │       
│   │       ├───ts5.6
│   │       │   │   buffer.buffer.d.ts
│   │       │   │   globals.typedarray.d.ts
│   │       │   │   index.d.ts
│   │       │   │   
│   │       │   └───compatibility
│   │       │           float16array.d.ts
│   │       │           
│   │       ├───ts5.7
│   │       │   │   index.d.ts
│   │       │   │   
│   │       │   └───compatibility
│   │       │           float16array.d.ts
│   │       │           
│   │       ├───util
│   │       │       types.d.ts
│   │       │       
│   │       ├───web-globals
│   │       │       abortcontroller.d.ts
│   │       │       blob.d.ts
│   │       │       console.d.ts
│   │       │       crypto.d.ts
│   │       │       domexception.d.ts
│   │       │       encoding.d.ts
│   │       │       events.d.ts
│   │       │       fetch.d.ts
│   │       │       importmeta.d.ts
│   │       │       messaging.d.ts
│   │       │       navigator.d.ts
│   │       │       performance.d.ts
│   │       │       storage.d.ts
│   │       │       streams.d.ts
│   │       │       timers.d.ts
│   │       │       url.d.ts
│   │       │       
│   │       └───zlib
│   │               iter.d.ts
│   │               
│   ├───playwright
│   │   │   cli.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   index.mjs
│   │   │   jsx-runtime.js
│   │   │   jsx-runtime.mjs
│   │   │   LICENSE
│   │   │   NOTICE
│   │   │   package.json
│   │   │   README.md
│   │   │   test.d.ts
│   │   │   test.js
│   │   │   test.mjs
│   │   │   ThirdPartyNotices.txt
│   │   │   
│   │   ├───lib
│   │   │   │   errorContext.js
│   │   │   │   globals.js
│   │   │   │   index.js
│   │   │   │   isomorphic.js
│   │   │   │   isomorphic.js.txt
│   │   │   │   package.js
│   │   │   │   program.js
│   │   │   │   util.js
│   │   │   │   
│   │   │   ├───agents
│   │   │   │       agentParser.js
│   │   │   │       copilot-setup-steps.yml
│   │   │   │       generateAgents.js
│   │   │   │       playwright-test-coverage.prompt.md
│   │   │   │       playwright-test-generate.prompt.md
│   │   │   │       playwright-test-generator.agent.md
│   │   │   │       playwright-test-heal.prompt.md
│   │   │   │       playwright-test-healer.agent.md
│   │   │   │       playwright-test-plan.prompt.md
│   │   │   │       playwright-test-planner.agent.md
│   │   │   │       
│   │   │   ├───cli
│   │   │   │       reportActions.js
│   │   │   │       testActions.js
│   │   │   │       
│   │   │   ├───common
│   │   │   │       index.js
│   │   │   │       index.js.txt
│   │   │   │       
│   │   │   ├───loader
│   │   │   │       loaderProcessEntry.js
│   │   │   │       loaderProcessEntry.js.txt
│   │   │   │       
│   │   │   ├───matchers
│   │   │   │       expect.js
│   │   │   │       expect.js.LICENSE
│   │   │   │       expect.js.txt
│   │   │   │       
│   │   │   ├───mcp
│   │   │   │   └───test
│   │   │   │           browserBackend.js
│   │   │   │           generatorTools.js
│   │   │   │           plannerTools.js
│   │   │   │           seed.js
│   │   │   │           streams.js
│   │   │   │           testBackend.js
│   │   │   │           testContext.js
│   │   │   │           testTool.js
│   │   │   │           testTools.js
│   │   │   │           
│   │   │   ├───runner
│   │   │   │       index.js
│   │   │   │       index.js.txt
│   │   │   │       
│   │   │   ├───transform
│   │   │   │       babelBundle.js
│   │   │   │       babelBundle.js.LICENSE
│   │   │   │       babelBundle.js.txt
│   │   │   │       esmLoader.js
│   │   │   │       esmLoader.js.LICENSE
│   │   │   │       esmLoader.js.txt
│   │   │   │       
│   │   │   └───worker
│   │   │           workerProcessEntry.js
│   │   │           workerProcessEntry.js.txt
│   │   │           
│   │   └───types
│   │           test.d.ts
│   │           testReporter.d.ts
│   │           
│   ├───playwright-core
│   │   │   browsers.json
│   │   │   cli.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   index.mjs
│   │   │   LICENSE
│   │   │   NOTICE
│   │   │   package.json
│   │   │   README.md
│   │   │   ThirdPartyNotices.txt
│   │   │   
│   │   ├───bin
│   │   │       install_media_pack.ps1
│   │   │       install_webkit_wsl.ps1
│   │   │       reinstall_chrome_beta_linux.sh
│   │   │       reinstall_chrome_beta_mac.sh
│   │   │       reinstall_chrome_beta_win.ps1
│   │   │       reinstall_chrome_stable_linux.sh
│   │   │       reinstall_chrome_stable_mac.sh
│   │   │       reinstall_chrome_stable_win.ps1
│   │   │       reinstall_msedge_beta_linux.sh
│   │   │       reinstall_msedge_beta_mac.sh
│   │   │       reinstall_msedge_beta_win.ps1
│   │   │       reinstall_msedge_dev_linux.sh
│   │   │       reinstall_msedge_dev_mac.sh
│   │   │       reinstall_msedge_dev_win.ps1
│   │   │       reinstall_msedge_stable_linux.sh
│   │   │       reinstall_msedge_stable_mac.sh
│   │   │       reinstall_msedge_stable_win.ps1
│   │   │       
│   │   ├───lib
│   │   │   │   bootstrap.js
│   │   │   │   coreBundle.js
│   │   │   │   package.js
│   │   │   │   serverRegistry.js
│   │   │   │   serverRegistry.js.LICENSE
│   │   │   │   utilsBundle.js
│   │   │   │   utilsBundle.js.LICENSE
│   │   │   │   xdg-open
│   │   │   │   
│   │   │   ├───entry
│   │   │   │       cliDaemon.js
│   │   │   │       dashboardApp.js
│   │   │   │       mcp.js
│   │   │   │       oopBrowserDownload.js
│   │   │   │       
│   │   │   ├───server
│   │   │   │   │   deviceDescriptorsSource.json
│   │   │   │   │   
│   │   │   │   ├───chromium
│   │   │   │   │       appIcon.png
│   │   │   │   │       
│   │   │   │   └───electron
│   │   │   │           loader.js
│   │   │   │           
│   │   │   ├───tools
│   │   │   │   ├───cli-client
│   │   │   │   │   │   channelSessions.js
│   │   │   │   │   │   cli.js
│   │   │   │   │   │   help.json
│   │   │   │   │   │   minimist.js
│   │   │   │   │   │   output.js
│   │   │   │   │   │   program.js
│   │   │   │   │   │   registry.js
│   │   │   │   │   │   session.js
│   │   │   │   │   │   
│   │   │   │   │   └───skill
│   │   │   │   │       │   SKILL.md
│   │   │   │   │       │   
│   │   │   │   │       └───references
│   │   │   │   │               element-attributes.md
│   │   │   │   │               playwright-tests.md
│   │   │   │   │               request-mocking.md
│   │   │   │   │               running-code.md
│   │   │   │   │               session-management.md
│   │   │   │   │               spec-driven-testing.md
│   │   │   │   │               storage-state.md
│   │   │   │   │               test-generation.md
│   │   │   │   │               tracing.md
│   │   │   │   │               video-recording.md
│   │   │   │   │               
│   │   │   │   ├───dashboard
│   │   │   │   │       appIcon.png
│   │   │   │   │       
│   │   │   │   ├───trace
│   │   │   │   │       SKILL.md
│   │   │   │   │       
│   │   │   │   └───utils
│   │   │   │           extension.js
│   │   │   │           socketConnection.js
│   │   │   │           
│   │   │   └───vite
│   │   │       ├───dashboard
│   │   │       │   │   index.html
│   │   │       │   │   playwright-logo.svg
│   │   │       │   │   
│   │   │       │   └───assets
│   │   │       │           codicon-DCmgc-ay.ttf
│   │   │       │           firefox-1bWoP6pv.svg
│   │   │       │           firefox-beta-k3eOH_eK.svg
│   │   │       │           firefox-nightly-Cp5nfeDT.svg
│   │   │       │           index-BY2S1tHT.css
│   │   │       │           index-DpEq2p62.js
│   │   │       │           safari-na3_-uQk.svg
│   │   │       │           
│   │   │       ├───htmlReport
│   │   │       │       index.html
│   │   │       │       report.css
│   │   │       │       report.js
│   │   │       │       
│   │   │       ├───recorder
│   │   │       │   │   index.html
│   │   │       │   │   playwright-logo.svg
│   │   │       │   │   
│   │   │       │   └───assets
│   │   │       │           codeMirrorModule-BHYmBp6h.js
│   │   │       │           codeMirrorModule-DYBRYzYX.css
│   │   │       │           codicon-DCmgc-ay.ttf
│   │   │       │           index-4ZiSSCmn.css
│   │   │       │           index-DA10QRaq.js
│   │   │       │           
│   │   │       └───traceViewer
│   │   │           │   codeMirrorModule.DYBRYzYX.css
│   │   │           │   codicon.DCmgc-ay.ttf
│   │   │           │   defaultSettingsView.BDKsFU3c.css
│   │   │           │   index.BCnMPevh.js
│   │   │           │   index.CzXZzn5A.css
│   │   │           │   index.html
│   │   │           │   manifest.webmanifest
│   │   │           │   playwright-logo.svg
│   │   │           │   snapshot.html
│   │   │           │   snapshot.v8KI4P3m.js
│   │   │           │   sw.bundle.js
│   │   │           │   uiMode.Btcz36p_.css
│   │   │           │   uiMode.C2Efnu2P.js
│   │   │           │   uiMode.html
│   │   │           │   xtermModule.DYP7pi_n.css
│   │   │           │   
│   │   │           └───assets
│   │   │                   codeMirrorModule-Ds_H_9Yq.js
│   │   │                   defaultSettingsView-D31xz8zv.js
│   │   │                   urlMatch-BYQrIQwR.js
│   │   │                   xtermModule-CsJ4vdCR.js
│   │   │                   
│   │   └───types
│   │           protocol.d.ts
│   │           structs.d.ts
│   │           types.d.ts
│   │           
│   └───undici-types
│           agent.d.ts
│           api.d.ts
│           balanced-pool.d.ts
│           cache-interceptor.d.ts
│           cache.d.ts
│           client-stats.d.ts
│           client.d.ts
│           connector.d.ts
│           content-type.d.ts
│           cookies.d.ts
│           diagnostics-channel.d.ts
│           dispatcher.d.ts
│           env-http-proxy-agent.d.ts
│           errors.d.ts
│           eventsource.d.ts
│           fetch.d.ts
│           formdata.d.ts
│           global-dispatcher.d.ts
│           global-origin.d.ts
│           h2c-client.d.ts
│           handlers.d.ts
│           header.d.ts
│           index.d.ts
│           interceptors.d.ts
│           LICENSE
│           mock-agent.d.ts
│           mock-call-history.d.ts
│           mock-client.d.ts
│           mock-errors.d.ts
│           mock-interceptor.d.ts
│           mock-pool.d.ts
│           package.json
│           patch.d.ts
│           pool-stats.d.ts
│           pool.d.ts
│           proxy-agent.d.ts
│           readable.d.ts
│           README.md
│           retry-agent.d.ts
│           retry-handler.d.ts
│           round-robin-pool.d.ts
│           snapshot-agent.d.ts
│           socks5-proxy-agent.d.ts
│           util.d.ts
│           utility.d.ts
│           webidl.d.ts
│           websocket.d.ts
│           
├───pages
│       BasePage.ts
│       DashboardPage.ts
│       FormsPage.ts
│       LoginPage.ts
│       
├───reports
├───test-results
├───tests
│   │   example.spec.ts
│   │   
│   ├───api
│   │       auth.spec.ts
│   │       errorHandling.spec.ts
│   │       userCrud.spec.ts
│   │       
│   ├───integration
│   │       apiUiFlow.spec.ts
│   │       
│   └───ui
│           dashboard.spec.ts
│           formValidation.spec.ts
│           login.spec.ts
│           
└───utils
        customAssertions.ts
        logger.ts
        retryHelper.ts
        screenshotHelper.ts
        waitHelper.ts
        
PS C:\Users\Shalvi\testmu-sdet2-mayank> tree /f
Folder PATH listing for volume Win 11
Volume serial number is 4604-6474
C:.
│   .env
│   .gitignore
│   ai-usage-log.md
│   package-lock.json
│   package.json
│   playwright.config.ts
│   README.md
│   test-strategy.md
│   tsconfig.json
│   
├───.github
│   └───workflows
│           playwright.yml
│           
├───api
│   ├───clients
│   │       UserApiClient.ts
│   │       
│   ├───schemas
│   │       user.schema.json
│   │       
│   └───utils
│           apiHelper.ts
│           
├───config
│       env.ts
│       testConfig.ts
│       users.json
│       
├───fixtures
│       testData.json
│       
├───node_modules
│   │   .package-lock.json
│   │   
│   ├───.bin
│   │       playwright
│   │       playwright-core
│   │       playwright-core.cmd
│   │       playwright-core.ps1
│   │       playwright.cmd
│   │       playwright.ps1
│   │       
│   ├───@playwright
│   │   └───test
│   │           cli.js
│   │           index.d.ts
│   │           index.js
│   │           index.mjs
│   │           LICENSE
│   │           NOTICE
│   │           package.json
│   │           README.md
│   │           reporter.d.ts
│   │           reporter.js
│   │           reporter.mjs
│   │           
│   ├───@types
│   │   └───node
│   │       │   assert.d.ts
│   │       │   async_hooks.d.ts
│   │       │   buffer.buffer.d.ts
│   │       │   buffer.d.ts
│   │       │   child_process.d.ts
│   │       │   cluster.d.ts
│   │       │   console.d.ts
│   │       │   constants.d.ts
│   │       │   crypto.d.ts
│   │       │   dgram.d.ts
│   │       │   diagnostics_channel.d.ts
│   │       │   dns.d.ts
│   │       │   domain.d.ts
│   │       │   events.d.ts
│   │       │   fs.d.ts
│   │       │   globals.d.ts
│   │       │   globals.typedarray.d.ts
│   │       │   http.d.ts
│   │       │   http2.d.ts
│   │       │   https.d.ts
│   │       │   index.d.ts
│   │       │   inspector.d.ts
│   │       │   inspector.generated.d.ts
│   │       │   LICENSE
│   │       │   module.d.ts
│   │       │   net.d.ts
│   │       │   os.d.ts
│   │       │   package.json
│   │       │   path.d.ts
│   │       │   perf_hooks.d.ts
│   │       │   process.d.ts
│   │       │   punycode.d.ts
│   │       │   querystring.d.ts
│   │       │   quic.d.ts
│   │       │   readline.d.ts
│   │       │   README.md
│   │       │   repl.d.ts
│   │       │   sea.d.ts
│   │       │   sqlite.d.ts
│   │       │   stream.d.ts
│   │       │   string_decoder.d.ts
│   │       │   test.d.ts
│   │       │   timers.d.ts
│   │       │   tls.d.ts
│   │       │   trace_events.d.ts
│   │       │   tty.d.ts
│   │       │   url.d.ts
│   │       │   util.d.ts
│   │       │   v8.d.ts
│   │       │   vm.d.ts
│   │       │   wasi.d.ts
│   │       │   worker_threads.d.ts
│   │       │   zlib.d.ts
│   │       │   
│   │       ├───assert
│   │       │       strict.d.ts
│   │       │       
│   │       ├───compatibility
│   │       │       iterators.d.ts
│   │       │       
│   │       ├───dns
│   │       │       promises.d.ts
│   │       │       
│   │       ├───fs
│   │       │       promises.d.ts
│   │       │       
│   │       ├───inspector
│   │       │       promises.d.ts
│   │       │       
│   │       ├───path
│   │       │       posix.d.ts
│   │       │       win32.d.ts
│   │       │       
│   │       ├───readline
│   │       │       promises.d.ts
│   │       │       
│   │       ├───stream
│   │       │       consumers.d.ts
│   │       │       iter.d.ts
│   │       │       promises.d.ts
│   │       │       web.d.ts
│   │       │       
│   │       ├───test
│   │       │       reporters.d.ts
│   │       │       
│   │       ├───timers
│   │       │       promises.d.ts
│   │       │       
│   │       ├───ts5.6
│   │       │   │   buffer.buffer.d.ts
│   │       │   │   globals.typedarray.d.ts
│   │       │   │   index.d.ts
│   │       │   │   
│   │       │   └───compatibility
│   │       │           float16array.d.ts
│   │       │           
│   │       ├───ts5.7
│   │       │   │   index.d.ts
│   │       │   │   
│   │       │   └───compatibility
│   │       │           float16array.d.ts
│   │       │           
│   │       ├───util
│   │       │       types.d.ts
│   │       │       
│   │       ├───web-globals
│   │       │       abortcontroller.d.ts
│   │       │       blob.d.ts
│   │       │       console.d.ts
│   │       │       crypto.d.ts
│   │       │       domexception.d.ts
│   │       │       encoding.d.ts
│   │       │       events.d.ts
│   │       │       fetch.d.ts
│   │       │       importmeta.d.ts
│   │       │       messaging.d.ts
│   │       │       navigator.d.ts
│   │       │       performance.d.ts
│   │       │       storage.d.ts
│   │       │       streams.d.ts
│   │       │       timers.d.ts
│   │       │       url.d.ts
│   │       │       
│   │       └───zlib
│   │               iter.d.ts
│   │               
│   ├───playwright
│   │   │   cli.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   index.mjs
│   │   │   jsx-runtime.js
│   │   │   jsx-runtime.mjs
│   │   │   LICENSE
│   │   │   NOTICE
│   │   │   package.json
│   │   │   README.md
│   │   │   test.d.ts
│   │   │   test.js
│   │   │   test.mjs
│   │   │   ThirdPartyNotices.txt
│   │   │   
│   │   ├───lib
│   │   │   │   errorContext.js
│   │   │   │   globals.js
│   │   │   │   index.js
│   │   │   │   isomorphic.js
│   │   │   │   isomorphic.js.txt
│   │   │   │   package.js
│   │   │   │   program.js
│   │   │   │   util.js
│   │   │   │   
│   │   │   ├───agents
│   │   │   │       agentParser.js
│   │   │   │       copilot-setup-steps.yml
│   │   │   │       generateAgents.js
│   │   │   │       playwright-test-coverage.prompt.md
│   │   │   │       playwright-test-generate.prompt.md
│   │   │   │       playwright-test-generator.agent.md
│   │   │   │       playwright-test-heal.prompt.md
│   │   │   │       playwright-test-healer.agent.md
│   │   │   │       playwright-test-plan.prompt.md
│   │   │   │       playwright-test-planner.agent.md
│   │   │   │       
│   │   │   ├───cli
│   │   │   │       reportActions.js
│   │   │   │       testActions.js
│   │   │   │       
│   │   │   ├───common
│   │   │   │       index.js
│   │   │   │       index.js.txt
│   │   │   │       
│   │   │   ├───loader
│   │   │   │       loaderProcessEntry.js
│   │   │   │       loaderProcessEntry.js.txt
│   │   │   │       
│   │   │   ├───matchers
│   │   │   │       expect.js
│   │   │   │       expect.js.LICENSE
│   │   │   │       expect.js.txt
│   │   │   │       
│   │   │   ├───mcp
│   │   │   │   └───test
│   │   │   │           browserBackend.js
│   │   │   │           generatorTools.js
│   │   │   │           plannerTools.js
│   │   │   │           seed.js
│   │   │   │           streams.js
│   │   │   │           testBackend.js
│   │   │   │           testContext.js
│   │   │   │           testTool.js
│   │   │   │           testTools.js
│   │   │   │           
│   │   │   ├───runner
│   │   │   │       index.js
│   │   │   │       index.js.txt
│   │   │   │       
│   │   │   ├───transform
│   │   │   │       babelBundle.js
│   │   │   │       babelBundle.js.LICENSE
│   │   │   │       babelBundle.js.txt
│   │   │   │       esmLoader.js
│   │   │   │       esmLoader.js.LICENSE
│   │   │   │       esmLoader.js.txt
│   │   │   │       
│   │   │   └───worker
│   │   │           workerProcessEntry.js
│   │   │           workerProcessEntry.js.txt
│   │   │           
│   │   └───types
│   │           test.d.ts
│   │           testReporter.d.ts
│   │           
│   ├───playwright-core
│   │   │   browsers.json
│   │   │   cli.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   index.mjs
│   │   │   LICENSE
│   │   │   NOTICE
│   │   │   package.json
│   │   │   README.md
│   │   │   ThirdPartyNotices.txt
│   │   │   
│   │   ├───bin
│   │   │       install_media_pack.ps1
│   │   │       install_webkit_wsl.ps1
│   │   │       reinstall_chrome_beta_linux.sh
│   │   │       reinstall_chrome_beta_mac.sh
│   │   │       reinstall_chrome_beta_win.ps1
│   │   │       reinstall_chrome_stable_linux.sh
│   │   │       reinstall_chrome_stable_mac.sh
│   │   │       reinstall_chrome_stable_win.ps1
│   │   │       reinstall_msedge_beta_linux.sh
│   │   │       reinstall_msedge_beta_mac.sh
│   │   │       reinstall_msedge_beta_win.ps1
│   │   │       reinstall_msedge_dev_linux.sh
│   │   │       reinstall_msedge_dev_mac.sh
│   │   │       reinstall_msedge_dev_win.ps1
│   │   │       reinstall_msedge_stable_linux.sh
│   │   │       reinstall_msedge_stable_mac.sh
│   │   │       reinstall_msedge_stable_win.ps1
│   │   │       
│   │   ├───lib
│   │   │   │   bootstrap.js
│   │   │   │   coreBundle.js
│   │   │   │   package.js
│   │   │   │   serverRegistry.js
│   │   │   │   serverRegistry.js.LICENSE
│   │   │   │   utilsBundle.js
│   │   │   │   utilsBundle.js.LICENSE
│   │   │   │   xdg-open
│   │   │   │   
│   │   │   ├───entry
│   │   │   │       cliDaemon.js
│   │   │   │       dashboardApp.js
│   │   │   │       mcp.js
│   │   │   │       oopBrowserDownload.js
│   │   │   │       
│   │   │   ├───server
│   │   │   │   │   deviceDescriptorsSource.json
│   │   │   │   │   
│   │   │   │   ├───chromium
│   │   │   │   │       appIcon.png
│   │   │   │   │       
│   │   │   │   └───electron
│   │   │   │           loader.js
│   │   │   │           
│   │   │   ├───tools
│   │   │   │   ├───cli-client
│   │   │   │   │   │   channelSessions.js
│   │   │   │   │   │   cli.js
│   │   │   │   │   │   help.json
│   │   │   │   │   │   minimist.js
│   │   │   │   │   │   output.js
│   │   │   │   │   │   program.js
│   │   │   │   │   │   registry.js
│   │   │   │   │   │   session.js
│   │   │   │   │   │   
│   │   │   │   │   └───skill
│   │   │   │   │       │   SKILL.md
│   │   │   │   │       │   
│   │   │   │   │       └───references
│   │   │   │   │               element-attributes.md
│   │   │   │   │               playwright-tests.md
│   │   │   │   │               request-mocking.md
│   │   │   │   │               running-code.md
│   │   │   │   │               session-management.md
│   │   │   │   │               spec-driven-testing.md
│   │   │   │   │               storage-state.md
│   │   │   │   │               test-generation.md
│   │   │   │   │               tracing.md
│   │   │   │   │               video-recording.md
│   │   │   │   │               
│   │   │   │   ├───dashboard
│   │   │   │   │       appIcon.png
│   │   │   │   │       
│   │   │   │   ├───trace
│   │   │   │   │       SKILL.md
│   │   │   │   │       
│   │   │   │   └───utils
│   │   │   │           extension.js
│   │   │   │           socketConnection.js
│   │   │   │           
│   │   │   └───vite
│   │   │       ├───dashboard
│   │   │       │   │   index.html
│   │   │       │   │   playwright-logo.svg
│   │   │       │   │   
│   │   │       │   └───assets
│   │   │       │           codicon-DCmgc-ay.ttf
│   │   │       │           firefox-1bWoP6pv.svg
│   │   │       │           firefox-beta-k3eOH_eK.svg
│   │   │       │           firefox-nightly-Cp5nfeDT.svg
│   │   │       │           index-BY2S1tHT.css
│   │   │       │           index-DpEq2p62.js
│   │   │       │           safari-na3_-uQk.svg
│   │   │       │           
│   │   │       ├───htmlReport
│   │   │       │       index.html
│   │   │       │       report.css
│   │   │       │       report.js
│   │   │       │       
│   │   │       ├───recorder
│   │   │       │   │   index.html
│   │   │       │   │   playwright-logo.svg
│   │   │       │   │   
│   │   │       │   └───assets
│   │   │       │           codeMirrorModule-BHYmBp6h.js
│   │   │       │           codeMirrorModule-DYBRYzYX.css
│   │   │       │           codicon-DCmgc-ay.ttf
│   │   │       │           index-4ZiSSCmn.css
│   │   │       │           index-DA10QRaq.js
│   │   │       │           
│   │   │       └───traceViewer
│   │   │           │   codeMirrorModule.DYBRYzYX.css
│   │   │           │   codicon.DCmgc-ay.ttf
│   │   │           │   defaultSettingsView.BDKsFU3c.css
│   │   │           │   index.BCnMPevh.js
│   │   │           │   index.CzXZzn5A.css
│   │   │           │   index.html
│   │   │           │   manifest.webmanifest
│   │   │           │   playwright-logo.svg
│   │   │           │   snapshot.html
│   │   │           │   snapshot.v8KI4P3m.js
│   │   │           │   sw.bundle.js
│   │   │           │   uiMode.Btcz36p_.css
│   │   │           │   uiMode.C2Efnu2P.js
│   │   │           │   uiMode.html
│   │   │           │   xtermModule.DYP7pi_n.css
│   │   │           │   
│   │   │           └───assets
│   │   │                   codeMirrorModule-Ds_H_9Yq.js
│   │   │                   defaultSettingsView-D31xz8zv.js
│   │   │                   urlMatch-BYQrIQwR.js
│   │   │                   xtermModule-CsJ4vdCR.js
│   │   │                   
│   │   └───types
│   │           protocol.d.ts
│   │           structs.d.ts
│   │           types.d.ts
│   │           
│   └───undici-types
│           agent.d.ts
│           api.d.ts
│           balanced-pool.d.ts
│           cache-interceptor.d.ts
│           cache.d.ts
│           client-stats.d.ts
│           client.d.ts
│           connector.d.ts
│           content-type.d.ts
│           cookies.d.ts
│           diagnostics-channel.d.ts
│           dispatcher.d.ts
│           env-http-proxy-agent.d.ts
│           errors.d.ts
│           eventsource.d.ts
│           fetch.d.ts
│           formdata.d.ts
│           global-dispatcher.d.ts
│           global-origin.d.ts
│           h2c-client.d.ts
│           handlers.d.ts
│           header.d.ts
│           index.d.ts
│           interceptors.d.ts
│           LICENSE
│           mock-agent.d.ts
│           mock-call-history.d.ts
│           mock-client.d.ts
│           mock-errors.d.ts
│           mock-interceptor.d.ts
│           mock-pool.d.ts
│           package.json
│           patch.d.ts
│           pool-stats.d.ts
│           pool.d.ts
│           proxy-agent.d.ts
│           readable.d.ts
│           README.md
│           retry-agent.d.ts
│           retry-handler.d.ts
│           round-robin-pool.d.ts
│           snapshot-agent.d.ts
│           socks5-proxy-agent.d.ts
│           util.d.ts
│           utility.d.ts
│           webidl.d.ts
│           websocket.d.ts
│           
├───pages
│       BasePage.ts
│       DashboardPage.ts
│       FormsPage.ts
│       LoginPage.ts
│       
├───reports
├───test-results
├───tests
│   │   example.spec.ts
│   │   
│   ├───api
│   │       auth.spec.ts
│   │       errorHandling.spec.ts
│   │       userCrud.spec.ts
│   │       
│   ├───integration
│   │       apiUiFlow.spec.ts
│   │       
│   └───ui
│           dashboard.spec.ts
│           formValidation.spec.ts
│           login.spec.ts
│           
└───utils
        customAssertions.ts
        logger.ts
        retryHelper.ts
        screenshotHelper.ts
        waitHelper.ts

---

## Future Enhancements

- Docker support
- Slack notifications
- Parallel cloud execution
- Flaky test analytics