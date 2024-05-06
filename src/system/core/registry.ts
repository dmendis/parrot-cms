import { loadConfig } from '../core/config';
import { RegistryService } from '../types/types';

export class Registry {
  private _services: RegistryService[];

  constructor(services: RegistryService[]) {
    this._services = [loadConfig(), ...services];
  }

  public get services() : RegistryService[] {
    return this._services;
  }
}