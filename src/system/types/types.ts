
export enum RegistryServiceType {
	Config, Event, EventStream
}

export abstract class RegistryService {
	abstract serviceName: string;
	abstract serviceType: RegistryServiceType;
}

export abstract class ConfigService extends RegistryService { 
	abstract value(key: string): unknown;         
}

export abstract class EventListenerService extends RegistryService {
	abstract onEvent(type: string, context: unknown): void;
	abstract onDisconnect(): void;
}

// Event Stream

export abstract class EventStreamService extends RegistryService {
	abstract subscribe(type: string, test?: (context: unknown) => void): () => void;
	abstract publish(type: string, context: unknown): void;
}

export const EventStreamSystemMessageTypes = {
	systemLog: 'system.log',
	systemError: 'system.error'
};

// Event Stream context types

export interface EventStreamMessage {
	publisher: string;
}

export interface SystemLogContext extends EventStreamMessage {
	action: string;
	message: string;
	level: string;
	timestamp: string;
}

export interface SystemErrorContext extends SystemLogContext {
	error: Error
}