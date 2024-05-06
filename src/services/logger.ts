import { EventListenerService, EventStreamService, EventStreamSystemMessageTypes, RegistryServiceType, SystemLogContext } from '../system/types/types';

export class LoggerService extends EventListenerService {
  serviceName = 'system.logger';
  serviceType = RegistryServiceType.Event;

  private _enabled: boolean;
  private _unsubscribe?: () => void;
  private _stream: EventStreamService;

  constructor(stream: EventStreamService) {
    super();
    this._stream = stream;
    this._enabled = true;
    this._unsubscribe = stream.subscribe(EventStreamSystemMessageTypes.systemLog);
  }

  set enabled(value: boolean) {
    this._enabled = value;
    if (value) {
      this._unsubscribe = this._stream.subscribe(EventStreamSystemMessageTypes.systemLog);
    } else {
      this._unsubscribe?.();
    }
  }

  onEvent(type: string, context: SystemLogContext): void {
    const publisher = context.publisher ?? 'unknown';
    const message = context.message ?? 'unknown';
    const timestamp = context.timestamp ?? new Date().toISOString();
    const level = context.level ?? 'info';

    let logger = console.log;

    switch (level) {
      case 'warn':
        logger = console.warn;
        break;
      case 'error':
        logger = console.error;
        break;
    }

    logger(`${timestamp} [${level}] ${publisher}: ${message}`);
  }

  onDisconnect(): void { 
    this._enabled = false;
    this._unsubscribe = undefined;
  }
}