export declare class SystemRegistryService {
    private systems;
    list(): {
        name: string;
        status: string;
    }[];
    register(name: string): {
        name: string;
        status: string;
    };
    health(): {
        total: number;
        systems: {
            name: string;
            status: string;
        }[];
    };
}
