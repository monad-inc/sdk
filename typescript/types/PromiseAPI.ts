import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { ActorsInfoSecretsConfig } from '../models/ActorsInfoSecretsConfig';
import { ActorsInfoSettingsConfig } from '../models/ActorsInfoSettingsConfig';
import { AddAdd } from '../models/AddAdd';
import { AdminActivitySecretsConfig } from '../models/AdminActivitySecretsConfig';
import { AdminActivitySettingsConfig } from '../models/AdminActivitySettingsConfig';
import { AdminLogsSecretsConfig } from '../models/AdminLogsSecretsConfig';
import { AdminLogsSettingsConfig } from '../models/AdminLogsSettingsConfig';
import { AuditLogsSecretsConfig } from '../models/AuditLogsSecretsConfig';
import { AuditLogsSettingsConfig } from '../models/AuditLogsSettingsConfig';
import { AuthLogsSecretsConfig } from '../models/AuthLogsSecretsConfig';
import { AuthLogsSettingsConfig } from '../models/AuthLogsSettingsConfig';
import { AuthenticationtypesTokenResponse } from '../models/AuthenticationtypesTokenResponse';
import { AwsS3SettingsConfig } from '../models/AwsS3SettingsConfig';
import { AzureActivityLogsSecretsConfig } from '../models/AzureActivityLogsSecretsConfig';
import { AzureActivityLogsSettingsConfig } from '../models/AzureActivityLogsSettingsConfig';
import { BatchConfigBatchConfig } from '../models/BatchConfigBatchConfig';
import { BigqueryInputSecretsConfig } from '../models/BigqueryInputSecretsConfig';
import { BigqueryInputSettingsConfig } from '../models/BigqueryInputSettingsConfig';
import { BigquerySecretsConfig } from '../models/BigquerySecretsConfig';
import { BigquerySettingsConfig } from '../models/BigquerySettingsConfig';
import { BoxEventsSecretsConfig } from '../models/BoxEventsSecretsConfig';
import { BoxEventsSettingsConfig } from '../models/BoxEventsSettingsConfig';
import { BoxUsersSecretsConfig } from '../models/BoxUsersSecretsConfig';
import { BoxUsersSettingsConfig } from '../models/BoxUsersSettingsConfig';
import { CloudAssetInventorySecretsConfig } from '../models/CloudAssetInventorySecretsConfig';
import { CloudAssetInventorySettingsConfig } from '../models/CloudAssetInventorySettingsConfig';
import { CloudConfigurationFindingsSecretsConfig } from '../models/CloudConfigurationFindingsSecretsConfig';
import { CloudConfigurationFindingsSettingsConfig } from '../models/CloudConfigurationFindingsSettingsConfig';
import { CloudLogsSecretsConfig } from '../models/CloudLogsSecretsConfig';
import { CloudLogsSettingsConfig } from '../models/CloudLogsSettingsConfig';
import { CloudResourceInventorySecretsConfig } from '../models/CloudResourceInventorySecretsConfig';
import { CloudResourceInventorySettingsConfig } from '../models/CloudResourceInventorySettingsConfig';
import { CloudtrailSettingsConfig } from '../models/CloudtrailSettingsConfig';
import { CommunityTransformsInternalTransformConfig } from '../models/CommunityTransformsInternalTransformConfig';
import { CommunityTransformsInternalTransformMetadata } from '../models/CommunityTransformsInternalTransformMetadata';
import { CommunityTransformsInternalTransformsIndex } from '../models/CommunityTransformsInternalTransformsIndex';
import { ConditionInfo } from '../models/ConditionInfo';
import { CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue } from '../models/CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue';
import { CriblHttpSecretsConfig } from '../models/CriblHttpSecretsConfig';
import { CriblHttpSettingsConfig } from '../models/CriblHttpSettingsConfig';
import { CrowdstrikeFdrSecretsConfig } from '../models/CrowdstrikeFdrSecretsConfig';
import { CrowdstrikeFdrSettingsConfig } from '../models/CrowdstrikeFdrSettingsConfig';
import { DefenderForEndpointAlertsSecretsConfig } from '../models/DefenderForEndpointAlertsSecretsConfig';
import { DefenderForEndpointAlertsSettingsConfig } from '../models/DefenderForEndpointAlertsSettingsConfig';
import { DelimitedDelimiterFormatter } from '../models/DelimitedDelimiterFormatter';
import { DemoCustomSettingsConfig } from '../models/DemoCustomSettingsConfig';
import { DemoSettingsConfig } from '../models/DemoSettingsConfig';
import { DetectSummariesSecretsConfig } from '../models/DetectSummariesSecretsConfig';
import { DetectSummariesSettingsConfig } from '../models/DetectSummariesSettingsConfig';
import { DeviceActivitySecretsConfig } from '../models/DeviceActivitySecretsConfig';
import { DeviceActivitySettingsConfig } from '../models/DeviceActivitySettingsConfig';
import { DeviceDetailsSecretsConfig } from '../models/DeviceDetailsSecretsConfig';
import { DeviceDetailsSettingsConfig } from '../models/DeviceDetailsSettingsConfig';
import { DevicesSecretsConfig } from '../models/DevicesSecretsConfig';
import { DevicesSettingsConfig } from '../models/DevicesSettingsConfig';
import { DriveActivitySecretsConfig } from '../models/DriveActivitySecretsConfig';
import { DriveActivitySettingsConfig } from '../models/DriveActivitySettingsConfig';
import { DropKeyDropKey } from '../models/DropKeyDropKey';
import { DropKeyWhereValueEqDropKeyWhereValueEq } from '../models/DropKeyWhereValueEqDropKeyWhereValueEq';
import { DropRecordWhereValueEqDropRecordWhereValueEq } from '../models/DropRecordWhereValueEqDropRecordWhereValueEq';
import { DuplicateKeyValueToKeyDuplicateKeyValueToKey } from '../models/DuplicateKeyValueToKeyDuplicateKeyValueToKey';
import { ElasticsearchSecretsConfig } from '../models/ElasticsearchSecretsConfig';
import { ElasticsearchSettingsConfig } from '../models/ElasticsearchSettingsConfig';
import { EntraIdSecretsConfig } from '../models/EntraIdSecretsConfig';
import { EntraIdSettingsConfig } from '../models/EntraIdSettingsConfig';
import { EventSecretsConfig } from '../models/EventSecretsConfig';
import { EventSettingsConfig } from '../models/EventSettingsConfig';
import { EventsLogsSecretsConfig } from '../models/EventsLogsSecretsConfig';
import { EventsLogsSettingsConfig } from '../models/EventsLogsSettingsConfig';
import { FlattenFlatten } from '../models/FlattenFlatten';
import { FlattenallFlattenAll } from '../models/FlattenallFlattenAll';
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { FullScansSecretsConfig } from '../models/FullScansSecretsConfig';
import { FullScansSettingsConfig } from '../models/FullScansSettingsConfig';
import { HttpSecretsConfig } from '../models/HttpSecretsConfig';
import { HttpSettingsConfig } from '../models/HttpSettingsConfig';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
import { IssuesSecretsConfig } from '../models/IssuesSecretsConfig';
import { IssuesSettingsConfig } from '../models/IssuesSettingsConfig';
import { JqJQ } from '../models/JqJQ';
import { JsonJsonFormatter } from '../models/JsonJsonFormatter';
import { LogAnalyticsQuerySecretsConfig } from '../models/LogAnalyticsQuerySecretsConfig';
import { LogAnalyticsQuerySettingsConfig } from '../models/LogAnalyticsQuerySettingsConfig';
import { LoginActivitySecretsConfig } from '../models/LoginActivitySecretsConfig';
import { LoginActivitySettingsConfig } from '../models/LoginActivitySettingsConfig';
import { LoginSessionsSecretsConfig } from '../models/LoginSessionsSecretsConfig';
import { LoginSessionsSettingsConfig } from '../models/LoginSessionsSettingsConfig';
import { MathMultiplyWithValueMathMultiplyWithValue } from '../models/MathMultiplyWithValueMathMultiplyWithValue';
import { ModelsAPIKey } from '../models/ModelsAPIKey';
import { ModelsAPIKeyList } from '../models/ModelsAPIKeyList';
import { ModelsAPIKeyWithToken } from '../models/ModelsAPIKeyWithToken';
import { ModelsBillingAccount } from '../models/ModelsBillingAccount';
import { ModelsBillingAccountList } from '../models/ModelsBillingAccountList';
import { ModelsBillingAccountPermission } from '../models/ModelsBillingAccountPermission';
import { ModelsBillingAccountRole } from '../models/ModelsBillingAccountRole';
import { ModelsBillingAccountRoleUser } from '../models/ModelsBillingAccountRoleUser';
import { ModelsBillingProduct } from '../models/ModelsBillingProduct';
import { ModelsBillingProductList } from '../models/ModelsBillingProductList';
import { ModelsComponentReference } from '../models/ModelsComponentReference';
import { ModelsConnectorMeta } from '../models/ModelsConnectorMeta';
import { ModelsDataUsage } from '../models/ModelsDataUsage';
import { ModelsInput } from '../models/ModelsInput';
import { ModelsInputConfig } from '../models/ModelsInputConfig';
import { ModelsInputList } from '../models/ModelsInputList';
import { ModelsNodeComponent } from '../models/ModelsNodeComponent';
import { ModelsOrganization } from '../models/ModelsOrganization';
import { ModelsOrganizationList } from '../models/ModelsOrganizationList';
import { ModelsOrganizationUser } from '../models/ModelsOrganizationUser';
import { ModelsOrganizationUserList } from '../models/ModelsOrganizationUserList';
import { ModelsOutput } from '../models/ModelsOutput';
import { ModelsOutputConfig } from '../models/ModelsOutputConfig';
import { ModelsOutputList } from '../models/ModelsOutputList';
import { ModelsPagination } from '../models/ModelsPagination';
import { ModelsPermission } from '../models/ModelsPermission';
import { ModelsPermissionList } from '../models/ModelsPermissionList';
import { ModelsPipeline } from '../models/ModelsPipeline';
import { ModelsPipelineConfigV2 } from '../models/ModelsPipelineConfigV2';
import { ModelsPipelineEdge } from '../models/ModelsPipelineEdge';
import { ModelsPipelineEdgeCondition } from '../models/ModelsPipelineEdgeCondition';
import { ModelsPipelineEdgeConditions } from '../models/ModelsPipelineEdgeConditions';
import { ModelsPipelineList } from '../models/ModelsPipelineList';
import { ModelsPipelineNode } from '../models/ModelsPipelineNode';
import { ModelsPipelineNodeMetrics } from '../models/ModelsPipelineNodeMetrics';
import { ModelsPipelineNodeMetricsValue } from '../models/ModelsPipelineNodeMetricsValue';
import { ModelsPipelineNodeStatus } from '../models/ModelsPipelineNodeStatus';
import { ModelsPipelineRetentionPolicy } from '../models/ModelsPipelineRetentionPolicy';
import { ModelsPipelineStatus } from '../models/ModelsPipelineStatus';
import { ModelsQuota } from '../models/ModelsQuota';
import { ModelsQuotaList } from '../models/ModelsQuotaList';
import { ModelsRoleWithPermissions } from '../models/ModelsRoleWithPermissions';
import { ModelsRoleWithPermissionsList } from '../models/ModelsRoleWithPermissionsList';
import { ModelsSecret } from '../models/ModelsSecret';
import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { ModelsSecretWithComponentsList } from '../models/ModelsSecretWithComponentsList';
import { ModelsTransform } from '../models/ModelsTransform';
import { ModelsTransformConfig } from '../models/ModelsTransformConfig';
import { ModelsTransformList } from '../models/ModelsTransformList';
import { ModelsTransformOperation } from '../models/ModelsTransformOperation';
import { ModelsTransformsRepositoryList } from '../models/ModelsTransformsRepositoryList';
import { ModelsTransformsRepositoryTransform } from '../models/ModelsTransformsRepositoryTransform';
import { ModelsUser } from '../models/ModelsUser';
import { ModelsUserRoleWithPermissions } from '../models/ModelsUserRoleWithPermissions';
import { MonadLogSettingsConfig } from '../models/MonadLogSettingsConfig';
import { MutateTypeMutateType } from '../models/MutateTypeMutateType';
import { MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq } from '../models/MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq';
import { MutateValueWhereKeyEqMutateValueWhereKeyEq } from '../models/MutateValueWhereKeyEqMutateValueWhereKeyEq';
import { NextGenSiemSecretsConfig } from '../models/NextGenSiemSecretsConfig';
import { NextGenSiemSettingsConfig } from '../models/NextGenSiemSettingsConfig';
import { OauthActivitySecretsConfig } from '../models/OauthActivitySecretsConfig';
import { OauthActivitySettingsConfig } from '../models/OauthActivitySettingsConfig';
import { OpensearchSecretsConfig } from '../models/OpensearchSecretsConfig';
import { OpensearchSettingsConfig } from '../models/OpensearchSettingsConfig';
import { OperationInformation } from '../models/OperationInformation';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
import { ParquetParquetFormatter } from '../models/ParquetParquetFormatter';
import { PostgresqlSecretsConfig } from '../models/PostgresqlSecretsConfig';
import { PostgresqlSettingsConfig } from '../models/PostgresqlSettingsConfig';
import { RenameKeyRenameKey } from '../models/RenameKeyRenameKey';
import { RenameKeyWhereValueEqRenameKeyWhereValueEq } from '../models/RenameKeyWhereValueEqRenameKeyWhereValueEq';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RolesInfoSecretsConfig } from '../models/RolesInfoSecretsConfig';
import { RolesInfoSettingsConfig } from '../models/RolesInfoSettingsConfig';
import { RoutesAddUserToOrganizationRequest } from '../models/RoutesAddUserToOrganizationRequest';
import { RoutesCreateOrganizationRequest } from '../models/RoutesCreateOrganizationRequest';
import { RoutesCreateTransformRequest } from '../models/RoutesCreateTransformRequest';
import { RoutesGetInputResponse } from '../models/RoutesGetInputResponse';
import { RoutesGetOutputResponse } from '../models/RoutesGetOutputResponse';
import { RoutesGetTransformResponse } from '../models/RoutesGetTransformResponse';
import { RoutesInviteUserToOrganizationRequest } from '../models/RoutesInviteUserToOrganizationRequest';
import { RoutesLoginRequest } from '../models/RoutesLoginRequest';
import { RoutesTransformConfig } from '../models/RoutesTransformConfig';
import { RoutesTransformOperation } from '../models/RoutesTransformOperation';
import { RoutesTransformOperationArguments } from '../models/RoutesTransformOperationArguments';
import { RoutesUpdateOrganizationRequest } from '../models/RoutesUpdateOrganizationRequest';
import { RoutesUpdatePipelineRequest } from '../models/RoutesUpdatePipelineRequest';
import { RoutesUpdateTransformRequest } from '../models/RoutesUpdateTransformRequest';
import { RoutesUpdateUserInOrganizationRequest } from '../models/RoutesUpdateUserInOrganizationRequest';
import { RoutesUserWithRoles } from '../models/RoutesUserWithRoles';
import { RoutesV2ApplyTransformationRequest } from '../models/RoutesV2ApplyTransformationRequest';
import { RoutesV2ApplyTransformationResponse } from '../models/RoutesV2ApplyTransformationResponse';
import { RoutesV2CreateAPIKeyRequest } from '../models/RoutesV2CreateAPIKeyRequest';
import { RoutesV2CreateBillingAccountRequest } from '../models/RoutesV2CreateBillingAccountRequest';
import { RoutesV2CreateBillingAccountRoleRequest } from '../models/RoutesV2CreateBillingAccountRoleRequest';
import { RoutesV2CreateBillingAccountSubscriptionRequest } from '../models/RoutesV2CreateBillingAccountSubscriptionRequest';
import { RoutesV2CreateBillingAccountSubscriptionResponse } from '../models/RoutesV2CreateBillingAccountSubscriptionResponse';
import { RoutesV2CreateInputRequest } from '../models/RoutesV2CreateInputRequest';
import { RoutesV2CreateOrUpdateSecretRequest } from '../models/RoutesV2CreateOrUpdateSecretRequest';
import { RoutesV2CreateOutputRequest } from '../models/RoutesV2CreateOutputRequest';
import { RoutesV2CreatePipelineRequest } from '../models/RoutesV2CreatePipelineRequest';
import { RoutesV2CreateRoleV2Request } from '../models/RoutesV2CreateRoleV2Request';
import { RoutesV2CreatebillingAccountUserRoleRequest } from '../models/RoutesV2CreatebillingAccountUserRoleRequest';
import { RoutesV2GenerateRecordRequest } from '../models/RoutesV2GenerateRecordRequest';
import { RoutesV2GenerateRecordResponse } from '../models/RoutesV2GenerateRecordResponse';
import { RoutesV2GetOrganizationSummaryResponse } from '../models/RoutesV2GetOrganizationSummaryResponse';
import { RoutesV2InputConfig } from '../models/RoutesV2InputConfig';
import { RoutesV2InputConfigSecrets } from '../models/RoutesV2InputConfigSecrets';
import { RoutesV2InputConfigSettings } from '../models/RoutesV2InputConfigSettings';
import { RoutesV2ListTemplatesResponse } from '../models/RoutesV2ListTemplatesResponse';
import { RoutesV2MetricsResponse } from '../models/RoutesV2MetricsResponse';
import { RoutesV2MetricsValue } from '../models/RoutesV2MetricsValue';
import { RoutesV2OrganizationOverview } from '../models/RoutesV2OrganizationOverview';
import { RoutesV2OutputConfig } from '../models/RoutesV2OutputConfig';
import { RoutesV2OutputConfigSecrets } from '../models/RoutesV2OutputConfigSecrets';
import { RoutesV2OutputConfigSettings } from '../models/RoutesV2OutputConfigSettings';
import { RoutesV2PipelineMetric } from '../models/RoutesV2PipelineMetric';
import { RoutesV2PipelineRequestEdge } from '../models/RoutesV2PipelineRequestEdge';
import { RoutesV2PipelineRequestNode } from '../models/RoutesV2PipelineRequestNode';
import { RoutesV2PipelineStatus } from '../models/RoutesV2PipelineStatus';
import { RoutesV2PipelineWithStatus } from '../models/RoutesV2PipelineWithStatus';
import { RoutesV2SecretResponse } from '../models/RoutesV2SecretResponse';
import { RoutesV2SuccessResponse } from '../models/RoutesV2SuccessResponse';
import { RoutesV2TestInputConnectionRequest } from '../models/RoutesV2TestInputConnectionRequest';
import { RoutesV2TestOutputConnectionRequest } from '../models/RoutesV2TestOutputConnectionRequest';
import { RoutesV2UpdateAPIKeyRequest } from '../models/RoutesV2UpdateAPIKeyRequest';
import { RoutesV2UpdateBillingAccountRequest } from '../models/RoutesV2UpdateBillingAccountRequest';
import { RoutesV2UpdateBillingAccountRoleRequest } from '../models/RoutesV2UpdateBillingAccountRoleRequest';
import { RoutesV2UpdateInputRequest } from '../models/RoutesV2UpdateInputRequest';
import { RoutesV2UpdateOutputRequest } from '../models/RoutesV2UpdateOutputRequest';
import { RoutesV2UpdatePipelineRequest } from '../models/RoutesV2UpdatePipelineRequest';
import { RoutesV2UpdateRoleV2Request } from '../models/RoutesV2UpdateRoleV2Request';
import { S3SettingsConfig } from '../models/S3SettingsConfig';
import { SecurityLakeSettingsConfig } from '../models/SecurityLakeSettingsConfig';
import { SecurityLakeSourceAccountDetails } from '../models/SecurityLakeSourceAccountDetails';
import { SemgrepCodeFindingsSecretsConfig } from '../models/SemgrepCodeFindingsSecretsConfig';
import { SemgrepDeploymentsSecretsConfig } from '../models/SemgrepDeploymentsSecretsConfig';
import { SemgrepDeploymentsSettingsConfig } from '../models/SemgrepDeploymentsSettingsConfig';
import { SemgrepProjectDetailsSecretsConfig } from '../models/SemgrepProjectDetailsSecretsConfig';
import { SemgrepProjectDetailsSettingsConfig } from '../models/SemgrepProjectDetailsSettingsConfig';
import { SemgrepProjectsSecretsConfig } from '../models/SemgrepProjectsSecretsConfig';
import { SemgrepProjectsSettingsConfig } from '../models/SemgrepProjectsSettingsConfig';
import { SemgrepSupplyChainFindingsSecretsConfig } from '../models/SemgrepSupplyChainFindingsSecretsConfig';
import { SentinelSecretsConfig } from '../models/SentinelSecretsConfig';
import { SentinelSettingsConfig } from '../models/SentinelSettingsConfig';
import { SlackUsersSecretsConfig } from '../models/SlackUsersSecretsConfig';
import { SlackUsersSettingsConfig } from '../models/SlackUsersSettingsConfig';
import { SlackgroupsSecretsConfig } from '../models/SlackgroupsSecretsConfig';
import { SlackgroupsSettingsConfig } from '../models/SlackgroupsSettingsConfig';
import { SnowflakeInputSecretsConfig } from '../models/SnowflakeInputSecretsConfig';
import { SnowflakeInputSettingsConfig } from '../models/SnowflakeInputSettingsConfig';
import { SnowflakeOutputSecretsConfig } from '../models/SnowflakeOutputSecretsConfig';
import { SnowflakeOutputSettingsConfig } from '../models/SnowflakeOutputSettingsConfig';
import { SnykIssuesSecretsConfig } from '../models/SnykIssuesSecretsConfig';
import { SnykOrganizationsSecretsConfig } from '../models/SnykOrganizationsSecretsConfig';
import { SnykOrganizationsSettingsConfig } from '../models/SnykOrganizationsSettingsConfig';
import { SnykProjectsSecretsConfig } from '../models/SnykProjectsSecretsConfig';
import { SnykProjectsSettingsConfig } from '../models/SnykProjectsSettingsConfig';
import { SnykTargetsSecretsConfig } from '../models/SnykTargetsSecretsConfig';
import { SplunkSecretsConfig } from '../models/SplunkSecretsConfig';
import { SplunkSettingsConfig } from '../models/SplunkSettingsConfig';
import { SumologicSecretsConfig } from '../models/SumologicSecretsConfig';
import { SumologicSettingsConfig } from '../models/SumologicSettingsConfig';
import { TailscaleUsersSecretsConfig } from '../models/TailscaleUsersSecretsConfig';
import { TailscaleUsersSettingsConfig } from '../models/TailscaleUsersSettingsConfig';
import { TenableAssetsSecretsConfig } from '../models/TenableAssetsSecretsConfig';
import { TenableAssetsSettingsConfig } from '../models/TenableAssetsSettingsConfig';
import { TenableVulnerabilitiesSecretsConfig } from '../models/TenableVulnerabilitiesSecretsConfig';
import { TenableVulnerabilitiesSettingsConfig } from '../models/TenableVulnerabilitiesSettingsConfig';
import { UsersInfoSecretsConfig } from '../models/UsersInfoSecretsConfig';
import { UsersInfoSettingsConfig } from '../models/UsersInfoSettingsConfig';
import { UsersSecretsConfig } from '../models/UsersSecretsConfig';
import { UsersSettingsConfig } from '../models/UsersSettingsConfig';
import { UtcTimestampTimestamp } from '../models/UtcTimestampTimestamp';
import { V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet500Response } from '../models/V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet500Response';
import { VulnerabilitiesSecretsConfig } from '../models/VulnerabilitiesSecretsConfig';
import { VulnerabilitiesSettingsConfig } from '../models/VulnerabilitiesSettingsConfig';
import { VulnerabilityFindingsSecretsConfig } from '../models/VulnerabilityFindingsSecretsConfig';
import { VulnerabilityFindingsSettingsConfig } from '../models/VulnerabilityFindingsSettingsConfig';
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public v1LoginCallbackGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginCallbackGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public v1LoginCallbackGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginCallbackGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public v1LoginGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public v1LoginGet(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public v1LoginResendVerificationPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginResendVerificationPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public v1LoginResendVerificationPost(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginResendVerificationPost(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param routesLoginRequest Login request
     */
    public v1LoginTokenPostWithHttpInfo(routesLoginRequest: RoutesLoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthenticationtypesTokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginTokenPostWithHttpInfo(routesLoginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param routesLoginRequest Login request
     */
    public v1LoginTokenPost(routesLoginRequest: RoutesLoginRequest, _options?: PromiseConfigurationOptions): Promise<AuthenticationtypesTokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1LoginTokenPost(routesLoginRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBillingAccountsApi } from './ObservableAPI';

import { BillingAccountsApiRequestFactory, BillingAccountsApiResponseProcessor} from "../apis/BillingAccountsApi";
export class PromiseBillingAccountsApi {
    private api: ObservableBillingAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingAccountsApiRequestFactory,
        responseProcessor?: BillingAccountsApiResponseProcessor
    ) {
        this.api = new ObservableBillingAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdDeleteWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdDeleteWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdDelete(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdDelete(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdGetWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdGetWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdGet(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdGet(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param routesV2UpdateBillingAccountRequest Request body for updating a billing account
     */
    public v2BillingAccountsBillingAccountIdPatchWithHttpInfo(billingAccountId: string, routesV2UpdateBillingAccountRequest: RoutesV2UpdateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdPatchWithHttpInfo(billingAccountId, routesV2UpdateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param routesV2UpdateBillingAccountRequest Request body for updating a billing account
     */
    public v2BillingAccountsBillingAccountIdPatch(billingAccountId: string, routesV2UpdateBillingAccountRequest: RoutesV2UpdateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdPatch(billingAccountId, routesV2UpdateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2BillingAccountsGetWithHttpInfo(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsGetWithHttpInfo(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2BillingAccountsGet(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsGet(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param routesV2CreateBillingAccountRequest Request body for creating a billing account
     */
    public v2BillingAccountsPostWithHttpInfo(routesV2CreateBillingAccountRequest: RoutesV2CreateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsPostWithHttpInfo(routesV2CreateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param routesV2CreateBillingAccountRequest Request body for creating a billing account
     */
    public v2BillingAccountsPost(routesV2CreateBillingAccountRequest: RoutesV2CreateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsPost(routesV2CreateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBillingAccountsRbacApi } from './ObservableAPI';

import { BillingAccountsRbacApiRequestFactory, BillingAccountsRbacApiResponseProcessor} from "../apis/BillingAccountsRbacApi";
export class PromiseBillingAccountsRbacApi {
    private api: ObservableBillingAccountsRbacApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingAccountsRbacApiRequestFactory,
        responseProcessor?: BillingAccountsRbacApiResponseProcessor
    ) {
        this.api = new ObservableBillingAccountsRbacApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdRolesGetWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountRole>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesGetWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdRolesGet(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<Array<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesGet(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountRoleRequest Create Billing Account Role Request
     */
    public v2BillingAccountsBillingAccountIdRolesPostWithHttpInfo(billingAccountId: string, routesV2CreateBillingAccountRoleRequest: RoutesV2CreateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesPostWithHttpInfo(billingAccountId, routesV2CreateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountRoleRequest Create Billing Account Role Request
     */
    public v2BillingAccountsBillingAccountIdRolesPost(billingAccountId: string, routesV2CreateBillingAccountRoleRequest: RoutesV2CreateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesPost(billingAccountId, routesV2CreateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdDeleteWithHttpInfo(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdDeleteWithHttpInfo(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdDelete(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdDelete(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdGetWithHttpInfo(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdGetWithHttpInfo(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdGet(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdGet(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2UpdateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdPatchWithHttpInfo(billingAccountId: string, roleId: string, routesV2UpdateBillingAccountRoleRequest: RoutesV2UpdateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdPatchWithHttpInfo(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2UpdateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdPatch(billingAccountId: string, roleId: string, routesV2UpdateBillingAccountRoleRequest: RoutesV2UpdateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdPatch(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2CreatebillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersPostWithHttpInfo(billingAccountId: string, roleId: string, routesV2CreatebillingAccountUserRoleRequest: RoutesV2CreatebillingAccountUserRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPostWithHttpInfo(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2CreatebillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(billingAccountId: string, roleId: string, routesV2CreatebillingAccountUserRoleRequest: RoutesV2CreatebillingAccountUserRoleRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteWithHttpInfo(billingAccountId: string, roleId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteWithHttpInfo(billingAccountId, roleId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(billingAccountId: string, roleId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(billingAccountId, roleId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public v2BillingPermissionsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountPermission>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingPermissionsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public v2BillingPermissionsGet(_options?: PromiseConfigurationOptions): Promise<Array<ModelsBillingAccountPermission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingPermissionsGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableBillingProductsApi } from './ObservableAPI';

import { BillingProductsApiRequestFactory, BillingProductsApiResponseProcessor} from "../apis/BillingProductsApi";
export class PromiseBillingProductsApi {
    private api: ObservableBillingProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingProductsApiRequestFactory,
        responseProcessor?: BillingProductsApiResponseProcessor
    ) {
        this.api = new ObservableBillingProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdSubscriptionDeleteWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdSubscriptionDeleteWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdSubscriptionDelete(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdSubscriptionDelete(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdSubscriptionGetWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingProduct>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdSubscriptionGetWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public v2BillingAccountsBillingAccountIdSubscriptionGet(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<ModelsBillingProduct> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdSubscriptionGet(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public v2BillingAccountsBillingAccountIdSubscriptionPostWithHttpInfo(billingAccountId: string, routesV2CreateBillingAccountSubscriptionRequest: RoutesV2CreateBillingAccountSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdSubscriptionPostWithHttpInfo(billingAccountId, routesV2CreateBillingAccountSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public v2BillingAccountsBillingAccountIdSubscriptionPost(billingAccountId: string, routesV2CreateBillingAccountSubscriptionRequest: RoutesV2CreateBillingAccountSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2CreateBillingAccountSubscriptionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingAccountsBillingAccountIdSubscriptionPost(billingAccountId, routesV2CreateBillingAccountSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param [showInactive] Show inactive products
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2BillingProductsGetWithHttpInfo(showInactive?: boolean, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingProductList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingProductsGetWithHttpInfo(showInactive, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param [showInactive] Show inactive products
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2BillingProductsGet(showInactive?: boolean, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsBillingProductList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2BillingProductsGet(showInactive, limit, offset, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConditionsApi } from './ObservableAPI';

import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";
export class PromiseConditionsApi {
    private api: ObservableConditionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConditionsApiRequestFactory,
        responseProcessor?: ConditionsApiResponseProcessor
    ) {
        this.api = new ObservableConditionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List conditions
     * List conditions
     * @param [body]
     */
    public v2ConditionsGetWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ConditionInfo>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2ConditionsGetWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * List conditions
     * List conditions
     * @param [body]
     */
    public v2ConditionsGet(body?: any, _options?: PromiseConfigurationOptions): Promise<Array<ConditionInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2ConditionsGet(body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDataApi } from './ObservableAPI';

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";
export class PromiseDataApi {
    private api: ObservableDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public v1OrganizationIdDataNodeIdGetWithHttpInfo(organizationId: string, nodeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdDataNodeIdGetWithHttpInfo(organizationId, nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public v1OrganizationIdDataNodeIdGet(organizationId: string, nodeId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdDataNodeIdGet(organizationId, nodeId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableInputsApi } from './ObservableAPI';

import { InputsApiRequestFactory, InputsApiResponseProcessor} from "../apis/InputsApi";
export class PromiseInputsApi {
    private api: ObservableInputsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InputsApiRequestFactory,
        responseProcessor?: InputsApiResponseProcessor
    ) {
        this.api = new ObservableInputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List inputs
     * List inputs
     */
    public v1InputsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<InputsConnectorMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1InputsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     */
    public v1InputsGet(_options?: PromiseConfigurationOptions): Promise<Array<InputsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1InputsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public v1InputsInputTypeIdGetWithHttpInfo(inputTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1InputsInputTypeIdGetWithHttpInfo(inputTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public v1InputsInputTypeIdGet(inputTypeId: string, _options?: PromiseConfigurationOptions): Promise<ModelsConnectorMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1InputsInputTypeIdGet(inputTypeId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLogsApi } from './ObservableAPI';

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class PromiseLogsApi {
    private api: ObservableLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsApiGetWithHttpInfo(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsApiGetWithHttpInfo(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsApiGet(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsApiGet(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsGetWithHttpInfo(organizationId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsGetWithHttpInfo(organizationId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsGet(organizationId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsGet(organizationId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsPipelinesGetWithHttpInfo(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsPipelinesGetWithHttpInfo(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsPipelinesGet(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsPipelinesGet(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId, pipelineId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for a specific node within a pipeline and organization
     * Stream node logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for a specific node within a pipeline and organization
     * Stream node logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId, pipelineId, nodeId, since, last, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOauthApi } from './ObservableAPI';

import { OauthApiRequestFactory, OauthApiResponseProcessor} from "../apis/OauthApi";
export class PromiseOauthApi {
    private api: ObservableOauthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OauthApiRequestFactory,
        responseProcessor?: OauthApiResponseProcessor
    ) {
        this.api = new ObservableOauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public v1OauthTypeIdCallbackGetWithHttpInfo(typeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OauthTypeIdCallbackGetWithHttpInfo(typeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public v1OauthTypeIdCallbackGet(typeId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OauthTypeIdCallbackGet(typeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public v1OauthTypeIdOrganizationIdGet(typeId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OauthTypeIdOrganizationIdGet(typeId, organizationId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationApiKeysApi } from './ObservableAPI';

import { OrganizationApiKeysApiRequestFactory, OrganizationApiKeysApiResponseProcessor} from "../apis/OrganizationApiKeysApi";
export class PromiseOrganizationApiKeysApi {
    private api: ObservableOrganizationApiKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationApiKeysApiRequestFactory,
        responseProcessor?: OrganizationApiKeysApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationApiKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdDelete(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdDelete(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdGet(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKey> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdGet(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public v2OrganizationIdApiKeysApiKeyIdPatch(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKey> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdPatch(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdApiKeysGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdApiKeysGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public v2OrganizationIdApiKeysPostWithHttpInfo(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysPostWithHttpInfo(organizationId, routesV2CreateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public v2OrganizationIdApiKeysPost(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdApiKeysPost(organizationId, routesV2CreateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationInputsApi } from './ObservableAPI';

import { OrganizationInputsApiRequestFactory, OrganizationInputsApiResponseProcessor} from "../apis/OrganizationInputsApi";
export class PromiseOrganizationInputsApi {
    private api: ObservableOrganizationInputsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationInputsApiRequestFactory,
        responseProcessor?: OrganizationInputsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationInputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationIdInputsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInputList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInputsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationIdInputsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsInputList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInputsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdDeleteWithHttpInfo(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInputsInputIdDeleteWithHttpInfo(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdDelete(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInputsInputIdDelete(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdGetWithHttpInfo(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesGetInputResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInputsInputIdGetWithHttpInfo(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdGet(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<RoutesGetInputResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInputsInputIdGet(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2UpdateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId, inputId, routesV2UpdateInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2UpdateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsInputIdPatch(organizationId, inputId, routesV2UpdateInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsPostWithHttpInfo(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsPostWithHttpInfo(organizationId, routesV2CreateInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsPost(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsPost(organizationId, routesV2CreateInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public v2OrganizationIdInputsTestConnectionPostWithHttpInfo(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsTestConnectionPostWithHttpInfo(organizationId, routesV2TestInputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public v2OrganizationIdInputsTestConnectionPost(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsTestConnectionPost(organizationId, routesV2TestInputConnectionRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationInvitesApi } from './ObservableAPI';

import { OrganizationInvitesApiRequestFactory, OrganizationInvitesApiResponseProcessor} from "../apis/OrganizationInvitesApi";
export class PromiseOrganizationInvitesApi {
    private api: ObservableOrganizationInvitesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationInvitesApiRequestFactory,
        responseProcessor?: OrganizationInvitesApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationInvitesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public v1OrganizationIdInvitesPostWithHttpInfo(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInvitesPostWithHttpInfo(organizationId, routesInviteUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public v1OrganizationIdInvitesPost(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdInvitesPost(organizationId, routesInviteUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationOutputsApi } from './ObservableAPI';

import { OrganizationOutputsApiRequestFactory, OrganizationOutputsApiResponseProcessor} from "../apis/OrganizationOutputsApi";
export class PromiseOrganizationOutputsApi {
    private api: ObservableOrganizationOutputsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationOutputsApiRequestFactory,
        responseProcessor?: OrganizationOutputsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationOutputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List outputs
     * List outputs
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdOutputsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutputList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdOutputsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List outputs
     * List outputs
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdOutputsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsOutputList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdOutputsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdDelete(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdOutputsOutputIdDelete(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdGetWithHttpInfo(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesGetOutputResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdOutputsOutputIdGetWithHttpInfo(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdGet(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<RoutesGetOutputResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdOutputsOutputIdGet(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2UpdateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2UpdateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsPostWithHttpInfo(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsPostWithHttpInfo(organizationId, routesV2CreateOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsPost(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsPost(organizationId, routesV2CreateOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(organizationId, routesV2TestOutputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public v2OrganizationIdOutputsTestConnectionPost(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsTestConnectionPost(organizationId, routesV2TestOutputConnectionRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationQuotasApi } from './ObservableAPI';

import { OrganizationQuotasApiRequestFactory, OrganizationQuotasApiResponseProcessor} from "../apis/OrganizationQuotasApi";
export class PromiseOrganizationQuotasApi {
    private api: ObservableOrganizationQuotasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationQuotasApiRequestFactory,
        responseProcessor?: OrganizationQuotasApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationQuotasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [body]
     */
    public v2OrganizationIdQuotasGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdQuotasGetWithHttpInfo(organizationId, limit, offset, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [body]
     */
    public v2OrganizationIdQuotasGet(organizationId: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<ModelsQuotaList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdQuotasGet(organizationId, limit, offset, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationTransformsApi } from './ObservableAPI';

import { OrganizationTransformsApiRequestFactory, OrganizationTransformsApiResponseProcessor} from "../apis/OrganizationTransformsApi";
export class PromiseOrganizationTransformsApi {
    private api: ObservableOrganizationTransformsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationTransformsApiRequestFactory,
        responseProcessor?: OrganizationTransformsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationTransformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List transforms
     * List transforms
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdTransformsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransformList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdTransformsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsTransformList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public v1OrganizationIdTransformsPostWithHttpInfo(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsPostWithHttpInfo(organizationId, routesCreateTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public v1OrganizationIdTransformsPost(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: PromiseConfigurationOptions): Promise<ModelsTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsPost(organizationId, routesCreateTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(organizationId: string, transformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(organizationId, transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public v1OrganizationIdTransformsTransformIdDelete(organizationId: string, transformId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsTransformIdDelete(organizationId, transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public v1OrganizationIdTransformsTransformIdGetWithHttpInfo(transformId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesGetTransformResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsTransformIdGetWithHttpInfo(transformId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public v1OrganizationIdTransformsTransformIdGet(transformId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<RoutesGetTransformResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsTransformIdGet(transformId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(organizationId, transformId, routesUpdateTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public v1OrganizationIdTransformsTransformIdPatch(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: PromiseConfigurationOptions): Promise<ModelsTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdTransformsTransformIdPatch(organizationId, transformId, routesUpdateTransformRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationUsersApi } from './ObservableAPI';

import { OrganizationUsersApiRequestFactory, OrganizationUsersApiResponseProcessor} from "../apis/OrganizationUsersApi";
export class PromiseOrganizationUsersApi {
    private api: ObservableOrganizationUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationUsersApiRequestFactory,
        responseProcessor?: OrganizationUsersApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdUsersGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUserList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdUsersGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationUserList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public v1OrganizationIdUsersPostWithHttpInfo(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersPostWithHttpInfo(organizationId, routesAddUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public v1OrganizationIdUsersPost(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersPost(organizationId, routesAddUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public v1OrganizationIdUsersUserIdDelete(organizationId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersUserIdDelete(organizationId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public v1OrganizationIdUsersUserIdPatchWithHttpInfo(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersUserIdPatchWithHttpInfo(organizationId, userId, routesUpdateUserInOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public v1OrganizationIdUsersUserIdPatch(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersUserIdPatch(organizationId, userId, routesUpdateUserInOrganizationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationsApi } from './ObservableAPI';

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class PromiseOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationsGetWithHttpInfo(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsGetWithHttpInfo(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationsGet(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsGet(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public v1OrganizationsOrganizationIdDeleteWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsOrganizationIdDeleteWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public v1OrganizationsOrganizationIdDelete(organizationId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsOrganizationIdDelete(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId, routesUpdateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public v1OrganizationsOrganizationIdPatch(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<ModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsOrganizationIdPatch(organizationId, routesUpdateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPost(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<ModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsPost(routesCreateOrganizationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOutputsApi } from './ObservableAPI';

import { OutputsApiRequestFactory, OutputsApiResponseProcessor} from "../apis/OutputsApi";
export class PromiseOutputsApi {
    private api: ObservableOutputsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OutputsApiRequestFactory,
        responseProcessor?: OutputsApiResponseProcessor
    ) {
        this.api = new ObservableOutputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List outputs
     * List outputs
     */
    public v1OutputsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<OutputsConnectorMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OutputsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List outputs
     * List outputs
     */
    public v1OutputsGet(_options?: PromiseConfigurationOptions): Promise<Array<OutputsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OutputsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public v1OutputsOutputTypeIdGetWithHttpInfo(outputTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OutputsOutputTypeIdGetWithHttpInfo(outputTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public v1OutputsOutputTypeIdGet(outputTypeId: string, _options?: PromiseConfigurationOptions): Promise<ModelsConnectorMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OutputsOutputTypeIdGet(outputTypeId, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePermissionsApi } from './ObservableAPI';

import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";
export class PromisePermissionsApi {
    private api: ObservablePermissionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionsApiRequestFactory,
        responseProcessor?: PermissionsApiResponseProcessor
    ) {
        this.api = new ObservablePermissionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param organizationId Organization ID
     * @param [limit] Limit the number of permissions returned (default: 10)
     * @param [offset] Offset the permissions returned (default: 0)
     */
    public v2OrganizationIdRolesPermissionsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPermissionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesPermissionsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param organizationId Organization ID
     * @param [limit] Limit the number of permissions returned (default: 10)
     * @param [offset] Offset the permissions returned (default: 0)
     */
    public v2OrganizationIdRolesPermissionsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsPermissionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesPermissionsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePipelinesApi } from './ObservableAPI';

import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";
export class PromisePipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelinesApiRequestFactory,
        responseProcessor?: PipelinesApiResponseProcessor
    ) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdPipelinesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId, pipelineId, routesUpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public v1OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesUpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelineSummaryGetWithHttpInfo(organizationId: string, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelineSummaryGetWithHttpInfo(organizationId, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelineSummaryGet(organizationId: string, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2GetOrganizationSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelineSummaryGet(organizationId, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdPipelinesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param [resolution] Resolution for metrics (default: 5m)
     */
    public v2OrganizationIdPipelinesMetricsGetWithHttpInfo(organizationId: string, pipelineIds: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2MetricsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesMetricsGetWithHttpInfo(organizationId, pipelineIds, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param [resolution] Resolution for metrics (default: 5m)
     */
    public v2OrganizationIdPipelinesMetricsGet(organizationId: string, pipelineIds: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2MetricsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesMetricsGet(organizationId, pipelineIds, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default 15m
     */
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineNodeMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default 15m
     */
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineNodeMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId, pipelineId, routesV2UpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public v2OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesV2UpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(organizationId, pipelineId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId, pipelineId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineNodeStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineNodeStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId, pipelineId, nodeId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public v2OrganizationIdPipelinesPostWithHttpInfo(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPostWithHttpInfo(organizationId, routesV2CreatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public v2OrganizationIdPipelinesPost(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPost(organizationId, routesV2CreatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param organizationId Organization ID
     * @param [limit] Maximum number of pipelines to return (default is 10)
     * @param [offset] Offset for pagination (default is 0)
     * @param [start] Start time (RFC3339 format) for status metrics (default: 24 hours ago)
     * @param [end] End time (RFC3339 format) for status metrics (default: now)
     */
    public v2OrganizationIdPipelinesStatusesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesStatusesGetWithHttpInfo(organizationId, limit, offset, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param organizationId Organization ID
     * @param [limit] Maximum number of pipelines to return (default is 10)
     * @param [offset] Offset for pagination (default is 0)
     * @param [start] Start time (RFC3339 format) for status metrics (default: 24 hours ago)
     * @param [end] End time (RFC3339 format) for status metrics (default: now)
     */
    public v2OrganizationIdPipelinesStatusesGet(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<Array<RoutesV2PipelineWithStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesStatusesGet(organizationId, limit, offset, start, end, observableOptions);
        return result.toPromise();
    }


}



import { ObservableQuotasApi } from './ObservableAPI';

import { QuotasApiRequestFactory, QuotasApiResponseProcessor} from "../apis/QuotasApi";
export class PromiseQuotasApi {
    private api: ObservableQuotasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QuotasApiRequestFactory,
        responseProcessor?: QuotasApiResponseProcessor
    ) {
        this.api = new ObservableQuotasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List quotas for a given billing account or organization id.
     * List quotas
     * @param [billingAccountId] Billing Account ID
     * @param [organizationId] Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [body]
     */
    public v2QuotasGetWithHttpInfo(billingAccountId?: string, organizationId?: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2QuotasGetWithHttpInfo(billingAccountId, organizationId, limit, offset, body, observableOptions);
        return result.toPromise();
    }

    /**
     * List quotas for a given billing account or organization id.
     * List quotas
     * @param [billingAccountId] Billing Account ID
     * @param [organizationId] Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [body]
     */
    public v2QuotasGet(billingAccountId?: string, organizationId?: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<ModelsQuotaList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2QuotasGet(billingAccountId, organizationId, limit, offset, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRolesApi } from './ObservableAPI';

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class PromiseRolesApi {
    private api: ObservableRolesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public v2OrganizationIdRolesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissionsList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public v2OrganizationIdRolesGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissionsList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param routesV2CreateRoleV2Request Request body for creating a role
     */
    public v2OrganizationIdRolesPostWithHttpInfo(organizationId: string, routesV2CreateRoleV2Request: RoutesV2CreateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesPostWithHttpInfo(organizationId, routesV2CreateRoleV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param routesV2CreateRoleV2Request Request body for creating a role
     */
    public v2OrganizationIdRolesPost(organizationId: string, routesV2CreateRoleV2Request: RoutesV2CreateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesPost(organizationId, routesV2CreateRoleV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v2OrganizationIdRolesRoleIdDeleteWithHttpInfo(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesRoleIdDeleteWithHttpInfo(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v2OrganizationIdRolesRoleIdDelete(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesRoleIdDelete(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v2OrganizationIdRolesRoleIdGetWithHttpInfo(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesRoleIdGetWithHttpInfo(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v2OrganizationIdRolesRoleIdGet(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesRoleIdGet(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesV2UpdateRoleV2Request Request body for updating a role
     */
    public v2OrganizationIdRolesRoleIdPatchWithHttpInfo(organizationId: string, roleId: string, routesV2UpdateRoleV2Request: RoutesV2UpdateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesRoleIdPatchWithHttpInfo(organizationId, roleId, routesV2UpdateRoleV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesV2UpdateRoleV2Request Request body for updating a role
     */
    public v2OrganizationIdRolesRoleIdPatch(organizationId: string, roleId: string, routesV2UpdateRoleV2Request: RoutesV2UpdateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdRolesRoleIdPatch(organizationId, roleId, routesV2UpdateRoleV2Request, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSandboxApi } from './ObservableAPI';

import { SandboxApiRequestFactory, SandboxApiResponseProcessor} from "../apis/SandboxApi";
export class PromiseSandboxApi {
    private api: ObservableSandboxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SandboxApiRequestFactory,
        responseProcessor?: SandboxApiResponseProcessor
    ) {
        this.api = new ObservableSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public v2SandboxTemplateGetWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ListTemplatesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2SandboxTemplateGetWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public v2SandboxTemplateGet(body?: any, _options?: PromiseConfigurationOptions): Promise<RoutesV2ListTemplatesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2SandboxTemplateGet(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public v2SandboxTemplatePostWithHttpInfo(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2GenerateRecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2SandboxTemplatePostWithHttpInfo(routesV2GenerateRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public v2SandboxTemplatePost(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2GenerateRecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2SandboxTemplatePost(routesV2GenerateRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public v2SandboxTransformPostWithHttpInfo(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2SandboxTransformPostWithHttpInfo(routesV2ApplyTransformationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public v2SandboxTransformPost(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2SandboxTransformPost(routesV2ApplyTransformationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSecretsApi } from './ObservableAPI';

import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi";
export class PromiseSecretsApi {
    private api: ObservableSecretsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsApiRequestFactory,
        responseProcessor?: SecretsApiResponseProcessor
    ) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public v2OrganizationIdSecretsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponentsList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public v2OrganizationIdSecretsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsSecretWithComponentsList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public v2OrganizationIdSecretsPostWithHttpInfo(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsPostWithHttpInfo(organizationId, routesV2CreateOrUpdateSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public v2OrganizationIdSecretsPost(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SecretResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsPost(organizationId, routesV2CreateOrUpdateSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdDelete(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsSecretIdDelete(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdGetWithHttpInfo(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponents>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsSecretIdGetWithHttpInfo(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdGet(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<ModelsSecretWithComponents> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsSecretIdGet(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public v2OrganizationIdSecretsSecretIdPatch(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SecretResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdSecretsSecretIdPatch(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTransformsApi } from './ObservableAPI';

import { TransformsApiRequestFactory, TransformsApiResponseProcessor} from "../apis/TransformsApi";
export class PromiseTransformsApi {
    private api: ObservableTransformsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformsApiRequestFactory,
        responseProcessor?: TransformsApiResponseProcessor
    ) {
        this.api = new ObservableTransformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public v1TransformsGetWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OperationInformation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1TransformsGetWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public v1TransformsGet(body?: any, _options?: PromiseConfigurationOptions): Promise<OperationInformation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1TransformsGet(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public v1TransformsTransformTypeIdGet(transformTypeId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1TransformsTransformTypeIdGet(transformTypeId, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTransformsRepositoryApi } from './ObservableAPI';

import { TransformsRepositoryApiRequestFactory, TransformsRepositoryApiResponseProcessor} from "../apis/TransformsRepositoryApi";
export class PromiseTransformsRepositoryApi {
    private api: ObservableTransformsRepositoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformsRepositoryApiRequestFactory,
        responseProcessor?: TransformsRepositoryApiResponseProcessor
    ) {
        this.api = new ObservableTransformsRepositoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param [limit] Number of items to return (default: 10)
     * @param [offset] Number of items to skip (default: 0)
     */
    public v2TransformsRepositoryGetWithHttpInfo(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2TransformsRepositoryGetWithHttpInfo(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param [limit] Number of items to return (default: 10)
     * @param [offset] Number of items to skip (default: 0)
     */
    public v2TransformsRepositoryGet(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsTransformsRepositoryList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2TransformsRepositoryGet(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public v2TransformsRepositoryTransformIdGetWithHttpInfo(transformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2TransformsRepositoryTransformIdGetWithHttpInfo(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public v2TransformsRepositoryTransformIdGet(transformId: string, _options?: PromiseConfigurationOptions): Promise<ModelsTransformsRepositoryTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2TransformsRepositoryTransformIdGet(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     */
    public v3TransformsRepositoryGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformsIndex>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     */
    public v3TransformsRepositoryGet(_options?: PromiseConfigurationOptions): Promise<CommunityTransformsInternalTransformsIndex> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public v3TransformsRepositoryTransformIdGetWithHttpInfo(transformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryTransformIdGetWithHttpInfo(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public v3TransformsRepositoryTransformIdGet(transformId: string, _options?: PromiseConfigurationOptions): Promise<CommunityTransformsInternalTransformConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryTransformIdGet(transformId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get your current user
     * Get your current user
     */
    public v1UsersGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesUserWithRoles>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1UsersGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     */
    public v1UsersGet(_options?: PromiseConfigurationOptions): Promise<RoutesUserWithRoles> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1UsersGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPostWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1UsersPostWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPost(body?: any, _options?: PromiseConfigurationOptions): Promise<ModelsUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1UsersPost(body, observableOptions);
        return result.toPromise();
    }


}



