import { RegistryService, RegistryServiceType } from '../types/types';

export class DynamicConfig implements RegistryService {
	readonly serviceName = 'DynamicConfig';
	readonly serviceType = RegistryServiceType.Config;

	private _configStore: Record<string, unknown> = {};

	public value(key: string): unknown {
		return this._configStore[key];
	}
}

export function loadConfig(): DynamicConfig {
	const config = new DynamicConfig();
	return config;
}