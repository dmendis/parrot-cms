import { EventStreamService, RegistryServiceType } from '../types/types';

export class EventStream extends EventStreamService {
    serviceName = 'system.stream';
    serviceType = RegistryServiceType.EventStream;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    subscribe(type: string, test?: ((context: unknown) => void) | undefined): () => void {
        throw new Error('Method not implemented.');
    }
    
    publish(type: string, context: unknown): void {
        console.log('stream.publish', `type: ${type}, context: ${JSON.stringify(context, null, 2)}`);
    }
}