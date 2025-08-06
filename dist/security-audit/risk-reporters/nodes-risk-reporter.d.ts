import type { IWorkflowBase } from 'n8n-workflow';
import { LoadNodesAndCredentials } from '../../load-nodes-and-credentials';
import type { Risk, RiskReporter } from '../../security-audit/types';
import { CommunityPackagesService } from '../../community-packages/community-packages.service';
export declare class NodesRiskReporter implements RiskReporter {
    private readonly loadNodesAndCredentials;
    private readonly communityPackagesService;
    constructor(loadNodesAndCredentials: LoadNodesAndCredentials, communityPackagesService: CommunityPackagesService);
    report(workflows: IWorkflowBase[]): Promise<Risk.StandardReport | null>;
    private getCommunityNodeDetails;
    private getCustomNodeDetails;
}
