# Parrot Architecture

Parrot is a CMS built around these core ideas:
- It is a CMS built for a future web where there can be many interfaces into content: websites, chat interfaces, APIs and more.
- It is built with diverse hosting environments in mind. It can be run simply on a file system or on cloud infrastructure, distributed and scaled.
- It can be extended to alter core functionality, making it extremely versatile.
- It is fault tolerent, secure and performant.

## Introduction

Parrot runtime is broken into a few parts:
- `runtime`: serves content to the web through APIs and other interfaces.
- `author`: manages content schema, security policies, processing and content read/write APIs.
- `system`: manages configuration, resiliency and recovery modules. System also kicks off runtime process.
- `services`: event stream and plugin interfaces that allow parrot to be extended.
- `manager`: management interface that is completely disconnected with the runtime to help users manage content. This module can be cloned and developed separately to offer custom interfaces by hosts.

### Runtime

Runtime will be a simple web service, backed by Express (perhaps configurable in the future).

### Author

Author will be a simple web service API, pipeline of processing events + processers.

### 