import { getEventStream } from '../system';
import { EventStreamService, EventStreamSystemMessageTypes, SystemErrorContext, SystemLogContext } from '../types/types';

export enum LogLevel {
    info = 'info',
    warn = 'warn',
    error = 'error'
}

export class Send {
    private static _eventStream: EventStreamService;

    static init(eventStream: EventStreamService) {
        this._eventStream = eventStream;
    }

    static log(action: string, message: string, level: LogLevel = LogLevel.info): SystemLogContext {
        const context: SystemLogContext = {
            action,
            message,
            level,
            timestamp: new Date().toISOString(),
            publisher: 'system'
        };
        getEventStream().publish(EventStreamSystemMessageTypes.systemLog, context);
        return context;
    }

    static error(action: string, error: Error): SystemErrorContext {
        const context: SystemErrorContext = {
            action,
            message: error.message,
            level: LogLevel.error,
            timestamp: new Date().toISOString(),
            publisher: 'system',
            error
        };
        getEventStream().publish(EventStreamSystemMessageTypes.systemError, context);
        return context;
    }
}