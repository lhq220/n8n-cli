import { InviteUsersRequestDto } from '@n8n/api-types';
import type { AuthenticatedRequest } from '@n8n/db';
import type express from 'express';
import type { Response } from 'express';
type Create = AuthenticatedRequest<{}, {}, InviteUsersRequestDto>;
declare const _default: {
    getUser: (((_: express.Request, res: express.Response, next: express.NextFunction) => express.Response | void) | ((req: express.Request, res: Response, next: express.NextFunction) => Promise<void>) | ((req: AuthenticatedRequest<{
        id?: string;
    }>, res: express.Response, next: express.NextFunction) => Promise<express.Response | void>))[];
    getUsers: (((_: express.Request, res: express.Response, next: express.NextFunction) => express.Response | void) | ((req: express.Request, res: Response, next: express.NextFunction) => Promise<void>) | ((req: AuthenticatedRequest<{
        id?: string;
    }>, res: express.Response, next: express.NextFunction) => Promise<express.Response | void>) | ((req: import("../../../types").PaginatedRequest, res: express.Response, next: express.NextFunction) => express.Response | void))[];
    createUser: (((req: express.Request, res: Response, next: express.NextFunction) => Promise<void>) | ((req: AuthenticatedRequest<{
        id?: string;
    }>, res: express.Response, next: express.NextFunction) => Promise<express.Response | void>) | ((req: Create, res: Response) => Promise<express.Response<any, Record<string, any>>>))[];
    deleteUser: (((req: express.Request, res: Response, next: express.NextFunction) => Promise<void>) | ((req: AuthenticatedRequest<{
        id?: string;
    }>, res: express.Response, next: express.NextFunction) => Promise<express.Response | void>))[];
    changeRole: (((req: express.Request, res: Response, next: express.NextFunction) => Promise<void>) | ((req: AuthenticatedRequest<{
        id?: string;
    }>, res: express.Response, next: express.NextFunction) => Promise<express.Response | void>))[];
};
export = _default;
