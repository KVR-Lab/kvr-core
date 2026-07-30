import { StorageService } from './storage.service';
export declare class SnapshotService {
    private readonly storage;
    constructor(storage: StorageService);
    create(): {
        snapshot: any[];
        createdAt: Date;
    };
}
