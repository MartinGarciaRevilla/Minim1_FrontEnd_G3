export interface ChangeLog {
    _id: string;
    entity: string;
    entityId: string;
    userId: string;
    changes: Record<string, any>;
    createdAt: Date;
}