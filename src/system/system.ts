import { Registry } from './core/registry';
import { Send } from './core/send';
import { EventStream } from './core/stream';

let registry: Registry;
let stream: EventStream;

export function init() {
  stream = new EventStream();
  Send.init(stream);
  Send.log('Init', 'System initializing');
  registry = new Registry([stream]);
  Send.log('Init', 'System initialized');
}

export function getRegistry() {
  if (!registry) {
    const error = new Error('Service registry not found');
    Send.error('RegistryAccess', error);
    throw error;
  }

  return registry;
}

export function getEventStream() {
  return stream;
}