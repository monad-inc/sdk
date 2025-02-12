import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActorsInfoSecretsConfig } from '../models/ActorsInfoSecretsConfig';
import { ActorsInfoSettingsConfig } from '../models/ActorsInfoSettingsConfig';
import { AddAdd } from '../models/AddAdd';
import { AdminActivitySecretsConfig } from '../models/AdminActivitySecretsConfig';
import { AdminActivitySettingsConfig } from '../models/AdminActivitySettingsConfig';
import { AdminLogsSecretsConfig } from '../models/AdminLogsSecretsConfig';
import { AdminLogsSettingsConfig } from '../models/AdminLogsSettingsConfig';
import { AuditLogsSecretsConfig } from '../models/AuditLogsSecretsConfig';
import { AuditLogsSettingsConfig } from '../models/AuditLogsSettingsConfig';
import { Auth0Auth0TokenResponse } from '../models/Auth0Auth0TokenResponse';
import { Auth0LoginRequest } from '../models/Auth0LoginRequest';
import { AuthLogsSecretsConfig } from '../models/AuthLogsSecretsConfig';
import { AuthLogsSettingsConfig } from '../models/AuthLogsSettingsConfig';
import { AwsS3SettingsConfig } from '../models/AwsS3SettingsConfig';
import { AzureActivityLogsSecretsConfig } from '../models/AzureActivityLogsSecretsConfig';
import { AzureActivityLogsSettingsConfig } from '../models/AzureActivityLogsSettingsConfig';
import { BatchConfigBatchConfig } from '../models/BatchConfigBatchConfig';
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
import { ConditionInfo } from '../models/ConditionInfo';
import { CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue } from '../models/CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue';
import { CriblHttpSecretsConfig } from '../models/CriblHttpSecretsConfig';
import { CriblHttpSettingsConfig } from '../models/CriblHttpSettingsConfig';
import { DelimitedDelimiterFormatter } from '../models/DelimitedDelimiterFormatter';
import { DemoCustomSettingsConfig } from '../models/DemoCustomSettingsConfig';
import { DemoSettingsConfig } from '../models/DemoSettingsConfig';
import { DetectSummariesSecretsConfig } from '../models/DetectSummariesSecretsConfig';
import { DetectSummariesSettingsConfig } from '../models/DetectSummariesSettingsConfig';
import { DeviceActivitySecretsConfig } from '../models/DeviceActivitySecretsConfig';
import { DeviceActivitySettingsConfig } from '../models/DeviceActivitySettingsConfig';
import { DeviceDetailsSecretsConfig } from '../models/DeviceDetailsSecretsConfig';
import { DeviceDetailsSettingsConfig } from '../models/DeviceDetailsSettingsConfig';
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
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { HttpSecretsConfig } from '../models/HttpSecretsConfig';
import { HttpSettingsConfig } from '../models/HttpSettingsConfig';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
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
import { ModelsPipelineStatus } from '../models/ModelsPipelineStatus';
import { ModelsQuota } from '../models/ModelsQuota';
import { ModelsQuotaList } from '../models/ModelsQuotaList';
import { ModelsRole } from '../models/ModelsRole';
import { ModelsRoleList } from '../models/ModelsRoleList';
import { ModelsSecret } from '../models/ModelsSecret';
import { ModelsSecretList } from '../models/ModelsSecretList';
import { ModelsTransform } from '../models/ModelsTransform';
import { ModelsTransformConfig } from '../models/ModelsTransformConfig';
import { ModelsTransformList } from '../models/ModelsTransformList';
import { ModelsTransformOperation } from '../models/ModelsTransformOperation';
import { ModelsUser } from '../models/ModelsUser';
import { ModelsUserList } from '../models/ModelsUserList';
import { MonadLogSettingsConfig } from '../models/MonadLogSettingsConfig';
import { MutateTypeMutateType } from '../models/MutateTypeMutateType';
import { MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq } from '../models/MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq';
import { MutateValueWhereKeyEqMutateValueWhereKeyEq } from '../models/MutateValueWhereKeyEqMutateValueWhereKeyEq';
import { OauthActivitySecretsConfig } from '../models/OauthActivitySecretsConfig';
import { OauthActivitySettingsConfig } from '../models/OauthActivitySettingsConfig';
import { OpensearchSecretsConfig } from '../models/OpensearchSecretsConfig';
import { OpensearchSettingsConfig } from '../models/OpensearchSettingsConfig';
import { OperationInformation } from '../models/OperationInformation';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
import { ParquetParquetFormatter } from '../models/ParquetParquetFormatter';
import { RenameKeyRenameKey } from '../models/RenameKeyRenameKey';
import { RenameKeyWhereValueEqRenameKeyWhereValueEq } from '../models/RenameKeyWhereValueEqRenameKeyWhereValueEq';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RolesInfoSecretsConfig } from '../models/RolesInfoSecretsConfig';
import { RolesInfoSettingsConfig } from '../models/RolesInfoSettingsConfig';
import { RoutesAddUserToOrganizationRequest } from '../models/RoutesAddUserToOrganizationRequest';
import { RoutesBulkCreateInputRequest } from '../models/RoutesBulkCreateInputRequest';
import { RoutesCreateInputRequest } from '../models/RoutesCreateInputRequest';
import { RoutesCreateOrganizationRequest } from '../models/RoutesCreateOrganizationRequest';
import { RoutesCreateOutputRequest } from '../models/RoutesCreateOutputRequest';
import { RoutesCreateRoleRequest } from '../models/RoutesCreateRoleRequest';
import { RoutesCreateTransformRequest } from '../models/RoutesCreateTransformRequest';
import { RoutesGetInputResponse } from '../models/RoutesGetInputResponse';
import { RoutesGetOutputResponse } from '../models/RoutesGetOutputResponse';
import { RoutesGetTransformResponse } from '../models/RoutesGetTransformResponse';
import { RoutesInviteUserToOrganizationRequest } from '../models/RoutesInviteUserToOrganizationRequest';
import { RoutesTransformConfig } from '../models/RoutesTransformConfig';
import { RoutesTransformOperation } from '../models/RoutesTransformOperation';
import { RoutesTransformOperationArguments } from '../models/RoutesTransformOperationArguments';
import { RoutesUpdateInputRequest } from '../models/RoutesUpdateInputRequest';
import { RoutesUpdateInputRequestConfig } from '../models/RoutesUpdateInputRequestConfig';
import { RoutesUpdateOrganizationRequest } from '../models/RoutesUpdateOrganizationRequest';
import { RoutesUpdateOutputRequest } from '../models/RoutesUpdateOutputRequest';
import { RoutesUpdateOutputRequestConfig } from '../models/RoutesUpdateOutputRequestConfig';
import { RoutesUpdatePipelineRequest } from '../models/RoutesUpdatePipelineRequest';
import { RoutesUpdateRoleRequest } from '../models/RoutesUpdateRoleRequest';
import { RoutesUpdateTransformRequest } from '../models/RoutesUpdateTransformRequest';
import { RoutesUpdateUserInOrganizationRequest } from '../models/RoutesUpdateUserInOrganizationRequest';
import { RoutesV2ApplyTransformationRequest } from '../models/RoutesV2ApplyTransformationRequest';
import { RoutesV2ApplyTransformationResponse } from '../models/RoutesV2ApplyTransformationResponse';
import { RoutesV2CreateAPIKeyRequest } from '../models/RoutesV2CreateAPIKeyRequest';
import { RoutesV2CreateInputRequest } from '../models/RoutesV2CreateInputRequest';
import { RoutesV2CreateOrUpdateSecretRequest } from '../models/RoutesV2CreateOrUpdateSecretRequest';
import { RoutesV2CreateOutputRequest } from '../models/RoutesV2CreateOutputRequest';
import { RoutesV2CreatePipelineRequest } from '../models/RoutesV2CreatePipelineRequest';
import { RoutesV2GenerateRecordRequest } from '../models/RoutesV2GenerateRecordRequest';
import { RoutesV2GenerateRecordResponse } from '../models/RoutesV2GenerateRecordResponse';
import { RoutesV2GetOrganizationSummaryResponse } from '../models/RoutesV2GetOrganizationSummaryResponse';
import { RoutesV2InputConfig } from '../models/RoutesV2InputConfig';
import { RoutesV2InputConfigSecrets } from '../models/RoutesV2InputConfigSecrets';
import { RoutesV2InputConfigSettings } from '../models/RoutesV2InputConfigSettings';
import { RoutesV2ListTemplatesResponse } from '../models/RoutesV2ListTemplatesResponse';
import { RoutesV2OrganizationOverview } from '../models/RoutesV2OrganizationOverview';
import { RoutesV2OutputConfig } from '../models/RoutesV2OutputConfig';
import { RoutesV2OutputConfigSecrets } from '../models/RoutesV2OutputConfigSecrets';
import { RoutesV2OutputConfigSettings } from '../models/RoutesV2OutputConfigSettings';
import { RoutesV2PipelineRequestEdge } from '../models/RoutesV2PipelineRequestEdge';
import { RoutesV2PipelineRequestNode } from '../models/RoutesV2PipelineRequestNode';
import { RoutesV2PipelineStatus } from '../models/RoutesV2PipelineStatus';
import { RoutesV2PipelineWithStatus } from '../models/RoutesV2PipelineWithStatus';
import { RoutesV2SecretResponse } from '../models/RoutesV2SecretResponse';
import { RoutesV2SuccessResponse } from '../models/RoutesV2SuccessResponse';
import { RoutesV2TestInputConnectionRequest } from '../models/RoutesV2TestInputConnectionRequest';
import { RoutesV2TestOutputConnectionRequest } from '../models/RoutesV2TestOutputConnectionRequest';
import { RoutesV2UpdateAPIKeyRequest } from '../models/RoutesV2UpdateAPIKeyRequest';
import { RoutesV2UpdateInputRequest } from '../models/RoutesV2UpdateInputRequest';
import { RoutesV2UpdateOutputRequest } from '../models/RoutesV2UpdateOutputRequest';
import { RoutesV2UpdatePipelineRequest } from '../models/RoutesV2UpdatePipelineRequest';
import { S3SettingsConfig } from '../models/S3SettingsConfig';
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
import { SnowflakeSecretsConfig } from '../models/SnowflakeSecretsConfig';
import { SnowflakeSettingsConfig } from '../models/SnowflakeSettingsConfig';
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
import { TenableAssetsSecretsConfig } from '../models/TenableAssetsSecretsConfig';
import { TenableVulnerabilitiesSecretsConfig } from '../models/TenableVulnerabilitiesSecretsConfig';
import { UsersInfoSecretsConfig } from '../models/UsersInfoSecretsConfig';
import { UsersInfoSettingsConfig } from '../models/UsersInfoSettingsConfig';
import { UsersSecretsConfig } from '../models/UsersSecretsConfig';
import { UsersSettingsConfig } from '../models/UsersSettingsConfig';
import { UtcTimestampTimestamp } from '../models/UtcTimestampTimestamp';
import { V1OrganizationIdInputsBulkPost400Response } from '../models/V1OrganizationIdInputsBulkPost400Response';
import { V1OrganizationIdInputsPost400Response } from '../models/V1OrganizationIdInputsPost400Response';
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
    public v1LoginCallbackGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1LoginCallbackGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public v1LoginCallbackGet(_options?: Configuration): Promise<string> {
        const result = this.api.v1LoginCallbackGet(_options);
        return result.toPromise();
    }

    /**
     * Redirects the user to Authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public v1LoginGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1LoginGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Redirects the user to Authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public v1LoginGet(_options?: Configuration): Promise<void> {
        const result = this.api.v1LoginGet(_options);
        return result.toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public v1LoginResendVerificationPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1LoginResendVerificationPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public v1LoginResendVerificationPost(_options?: Configuration): Promise<string> {
        const result = this.api.v1LoginResendVerificationPost(_options);
        return result.toPromise();
    }

    /**
     * Retrieve an authentication token from the Authentication service using username and password.
     * Get Authentication token
     * @param auth0LoginRequest Login request
     */
    public v1LoginTokenPostWithHttpInfo(auth0LoginRequest: Auth0LoginRequest, _options?: Configuration): Promise<HttpInfo<Auth0Auth0TokenResponse>> {
        const result = this.api.v1LoginTokenPostWithHttpInfo(auth0LoginRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an authentication token from the Authentication service using username and password.
     * Get Authentication token
     * @param auth0LoginRequest Login request
     */
    public v1LoginTokenPost(auth0LoginRequest: Auth0LoginRequest, _options?: Configuration): Promise<Auth0Auth0TokenResponse> {
        const result = this.api.v1LoginTokenPost(auth0LoginRequest, _options);
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
    public v2ConditionsGetWithHttpInfo(body?: any, _options?: Configuration): Promise<HttpInfo<Array<ConditionInfo>>> {
        const result = this.api.v2ConditionsGetWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List conditions
     * List conditions
     * @param [body]
     */
    public v2ConditionsGet(body?: any, _options?: Configuration): Promise<Array<ConditionInfo>> {
        const result = this.api.v2ConditionsGet(body, _options);
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
    public v1OrganizationIdDataNodeIdGetWithHttpInfo(organizationId: string, nodeId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdDataNodeIdGetWithHttpInfo(organizationId, nodeId, _options);
        return result.toPromise();
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public v1OrganizationIdDataNodeIdGet(organizationId: string, nodeId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdDataNodeIdGet(organizationId, nodeId, _options);
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
    public v1InputsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<InputsConnectorMeta>>> {
        const result = this.api.v1InputsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     */
    public v1InputsGet(_options?: Configuration): Promise<Array<InputsConnectorMeta>> {
        const result = this.api.v1InputsGet(_options);
        return result.toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public v1InputsInputTypeIdGetWithHttpInfo(inputTypeId: string, _options?: Configuration): Promise<HttpInfo<ModelsConnectorMeta>> {
        const result = this.api.v1InputsInputTypeIdGetWithHttpInfo(inputTypeId, _options);
        return result.toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public v1InputsInputTypeIdGet(inputTypeId: string, _options?: Configuration): Promise<ModelsConnectorMeta> {
        const result = this.api.v1InputsInputTypeIdGet(inputTypeId, _options);
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
    public v1OrganizationIdLogsApiGetWithHttpInfo(organizationId: string, since?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdLogsApiGetWithHttpInfo(organizationId, since, _options);
        return result.toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsApiGet(organizationId: string, since?: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdLogsApiGet(organizationId, since, _options);
        return result.toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsGetWithHttpInfo(organizationId: string, since?: string, last?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdLogsGetWithHttpInfo(organizationId, since, last, _options);
        return result.toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsGet(organizationId: string, since?: string, last?: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdLogsGet(organizationId, since, last, _options);
        return result.toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsPipelinesGetWithHttpInfo(organizationId: string, since?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdLogsPipelinesGetWithHttpInfo(organizationId, since, _options);
        return result.toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsPipelinesGet(organizationId: string, since?: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdLogsPipelinesGet(organizationId, since, _options);
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
    public v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, since, last, _options);
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
    public v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId, pipelineId, since, last, _options);
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
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, since, last, _options);
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
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId, pipelineId, nodeId, since, last, _options);
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
    public v1OauthTypeIdCallbackGetWithHttpInfo(typeId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OauthTypeIdCallbackGetWithHttpInfo(typeId, _options);
        return result.toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public v1OauthTypeIdCallbackGet(typeId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OauthTypeIdCallbackGet(typeId, _options);
        return result.toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId: string, organizationId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public v1OauthTypeIdOrganizationIdGet(typeId: string, organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OauthTypeIdOrganizationIdGet(typeId, organizationId, _options);
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
    public v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(organizationId: string, apiKeyId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(organizationId, apiKeyId, _options);
        return result.toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdDelete(organizationId: string, apiKeyId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdDelete(organizationId, apiKeyId, _options);
        return result.toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(organizationId: string, apiKeyId: string, _options?: Configuration): Promise<HttpInfo<ModelsAPIKey>> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(organizationId, apiKeyId, _options);
        return result.toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdGet(organizationId: string, apiKeyId: string, _options?: Configuration): Promise<ModelsAPIKey> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdGet(organizationId, apiKeyId, _options);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: Configuration): Promise<HttpInfo<ModelsAPIKey>> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public v2OrganizationIdApiKeysApiKeyIdPatch(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: Configuration): Promise<ModelsAPIKey> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdPatch(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(organizationId: string, apiKeyId: string, _options?: Configuration): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(organizationId, apiKeyId, _options);
        return result.toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId: string, apiKeyId: string, _options?: Configuration): Promise<ModelsAPIKeyWithToken> {
        const result = this.api.v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId, apiKeyId, _options);
        return result.toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdApiKeysGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsAPIKeyList>> {
        const result = this.api.v2OrganizationIdApiKeysGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdApiKeysGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsAPIKeyList> {
        const result = this.api.v2OrganizationIdApiKeysGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public v2OrganizationIdApiKeysPostWithHttpInfo(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: Configuration): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const result = this.api.v2OrganizationIdApiKeysPostWithHttpInfo(organizationId, routesV2CreateAPIKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public v2OrganizationIdApiKeysPost(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: Configuration): Promise<ModelsAPIKeyWithToken> {
        const result = this.api.v2OrganizationIdApiKeysPost(organizationId, routesV2CreateAPIKeyRequest, _options);
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
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesBulkCreateInputRequest Request body for creating multiple inputs
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsBulkPostWithHttpInfo(organizationId: string, routesBulkCreateInputRequest: RoutesBulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<Array<ModelsInput>>> {
        const result = this.api.v1OrganizationIdInputsBulkPostWithHttpInfo(organizationId, routesBulkCreateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesBulkCreateInputRequest Request body for creating multiple inputs
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsBulkPost(organizationId: string, routesBulkCreateInputRequest: RoutesBulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<Array<ModelsInput>> {
        const result = this.api.v1OrganizationIdInputsBulkPost(organizationId, routesBulkCreateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationIdInputsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsInputList>> {
        const result = this.api.v1OrganizationIdInputsGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationIdInputsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsInputList> {
        const result = this.api.v1OrganizationIdInputsGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdDeleteWithHttpInfo(organizationId: string, inputId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OrganizationIdInputsInputIdDeleteWithHttpInfo(organizationId, inputId, _options);
        return result.toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdDelete(organizationId: string, inputId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OrganizationIdInputsInputIdDelete(organizationId, inputId, _options);
        return result.toPromise();
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdGetWithHttpInfo(organizationId: string, inputId: string, _options?: Configuration): Promise<HttpInfo<RoutesGetInputResponse>> {
        const result = this.api.v1OrganizationIdInputsInputIdGetWithHttpInfo(organizationId, inputId, _options);
        return result.toPromise();
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdGet(organizationId: string, inputId: string, _options?: Configuration): Promise<RoutesGetInputResponse> {
        const result = this.api.v1OrganizationIdInputsInputIdGet(organizationId, inputId, _options);
        return result.toPromise();
    }

    /**
     * Update input
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesUpdateInputRequest Request body for updating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId: string, inputId: string, routesUpdateInputRequest: RoutesUpdateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<ModelsInput>> {
        const result = this.api.v1OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId, inputId, routesUpdateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Update input
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesUpdateInputRequest Request body for updating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesUpdateInputRequest: RoutesUpdateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<ModelsInput> {
        const result = this.api.v1OrganizationIdInputsInputIdPatch(organizationId, inputId, routesUpdateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create input
     * Create input
     * @param organizationId Organization ID
     * @param routesCreateInputRequest Request body for creating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsPostWithHttpInfo(organizationId: string, routesCreateInputRequest: RoutesCreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<ModelsInput>> {
        const result = this.api.v1OrganizationIdInputsPostWithHttpInfo(organizationId, routesCreateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create input
     * Create input
     * @param organizationId Organization ID
     * @param routesCreateInputRequest Request body for creating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsPost(organizationId: string, routesCreateInputRequest: RoutesCreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<ModelsInput> {
        const result = this.api.v1OrganizationIdInputsPost(organizationId, routesCreateInputRequest, testConnection, _options);
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
    public v2OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<ModelsInput>> {
        const result = this.api.v2OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId, inputId, routesV2UpdateInputRequest, testConnection, _options);
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
    public v2OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<ModelsInput> {
        const result = this.api.v2OrganizationIdInputsInputIdPatch(organizationId, inputId, routesV2UpdateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsPostWithHttpInfo(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<ModelsInput>> {
        const result = this.api.v2OrganizationIdInputsPostWithHttpInfo(organizationId, routesV2CreateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsPost(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: Configuration): Promise<ModelsInput> {
        const result = this.api.v2OrganizationIdInputsPost(organizationId, routesV2CreateInputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public v2OrganizationIdInputsTestConnectionPostWithHttpInfo(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: Configuration): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const result = this.api.v2OrganizationIdInputsTestConnectionPostWithHttpInfo(organizationId, routesV2TestInputConnectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public v2OrganizationIdInputsTestConnectionPost(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: Configuration): Promise<RoutesV2SuccessResponse> {
        const result = this.api.v2OrganizationIdInputsTestConnectionPost(organizationId, routesV2TestInputConnectionRequest, _options);
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
    public v1OrganizationIdInvitesPostWithHttpInfo(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdInvitesPostWithHttpInfo(organizationId, routesInviteUserToOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public v1OrganizationIdInvitesPost(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdInvitesPost(organizationId, routesInviteUserToOrganizationRequest, _options);
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
    public v1OrganizationIdOutputsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsOutputList>> {
        const result = this.api.v1OrganizationIdOutputsGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List outputs
     * List outputs
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdOutputsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsOutputList> {
        const result = this.api.v1OrganizationIdOutputsGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(organizationId: string, outputId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(organizationId, outputId, _options);
        return result.toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdDelete(organizationId: string, outputId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdOutputsOutputIdDelete(organizationId, outputId, _options);
        return result.toPromise();
    }

    /**
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdGetWithHttpInfo(organizationId: string, outputId: string, _options?: Configuration): Promise<HttpInfo<RoutesGetOutputResponse>> {
        const result = this.api.v1OrganizationIdOutputsOutputIdGetWithHttpInfo(organizationId, outputId, _options);
        return result.toPromise();
    }

    /**
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdGet(organizationId: string, outputId: string, _options?: Configuration): Promise<RoutesGetOutputResponse> {
        const result = this.api.v1OrganizationIdOutputsOutputIdGet(organizationId, outputId, _options);
        return result.toPromise();
    }

    /**
     * Update output
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesUpdateOutputRequest Request body for updating an output
     */
    public v1OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId: string, outputId: string, routesUpdateOutputRequest: RoutesUpdateOutputRequest, _options?: Configuration): Promise<HttpInfo<ModelsOutput>> {
        const result = this.api.v1OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId, outputId, routesUpdateOutputRequest, _options);
        return result.toPromise();
    }

    /**
     * Update output
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesUpdateOutputRequest Request body for updating an output
     */
    public v1OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesUpdateOutputRequest: RoutesUpdateOutputRequest, _options?: Configuration): Promise<ModelsOutput> {
        const result = this.api.v1OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesUpdateOutputRequest, _options);
        return result.toPromise();
    }

    /**
     * Create output
     * Create output
     * @param organizationId Organization ID
     * @param routesCreateOutputRequest Request body for creating an output
     */
    public v1OrganizationIdOutputsPostWithHttpInfo(organizationId: string, routesCreateOutputRequest: RoutesCreateOutputRequest, _options?: Configuration): Promise<HttpInfo<ModelsOutput>> {
        const result = this.api.v1OrganizationIdOutputsPostWithHttpInfo(organizationId, routesCreateOutputRequest, _options);
        return result.toPromise();
    }

    /**
     * Create output
     * Create output
     * @param organizationId Organization ID
     * @param routesCreateOutputRequest Request body for creating an output
     */
    public v1OrganizationIdOutputsPost(organizationId: string, routesCreateOutputRequest: RoutesCreateOutputRequest, _options?: Configuration): Promise<ModelsOutput> {
        const result = this.api.v1OrganizationIdOutputsPost(organizationId, routesCreateOutputRequest, _options);
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
    public v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<ModelsOutput>> {
        const result = this.api.v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, _options);
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
    public v2OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: Configuration): Promise<ModelsOutput> {
        const result = this.api.v2OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsPostWithHttpInfo(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: Configuration): Promise<HttpInfo<ModelsOutput>> {
        const result = this.api.v2OrganizationIdOutputsPostWithHttpInfo(organizationId, routesV2CreateOutputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsPost(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: Configuration): Promise<ModelsOutput> {
        const result = this.api.v2OrganizationIdOutputsPost(organizationId, routesV2CreateOutputRequest, testConnection, _options);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: Configuration): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const result = this.api.v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(organizationId, routesV2TestOutputConnectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public v2OrganizationIdOutputsTestConnectionPost(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: Configuration): Promise<RoutesV2SuccessResponse> {
        const result = this.api.v2OrganizationIdOutputsTestConnectionPost(organizationId, routesV2TestOutputConnectionRequest, _options);
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
    public v2OrganizationIdQuotasGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, body?: any, _options?: Configuration): Promise<HttpInfo<ModelsQuotaList>> {
        const result = this.api.v2OrganizationIdQuotasGetWithHttpInfo(organizationId, limit, offset, body, _options);
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
    public v2OrganizationIdQuotasGet(organizationId: string, limit?: number, offset?: number, body?: any, _options?: Configuration): Promise<ModelsQuotaList> {
        const result = this.api.v2OrganizationIdQuotasGet(organizationId, limit, offset, body, _options);
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
    public v1OrganizationIdTransformsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsTransformList>> {
        const result = this.api.v1OrganizationIdTransformsGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdTransformsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsTransformList> {
        const result = this.api.v1OrganizationIdTransformsGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public v1OrganizationIdTransformsPostWithHttpInfo(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: Configuration): Promise<HttpInfo<ModelsTransform>> {
        const result = this.api.v1OrganizationIdTransformsPostWithHttpInfo(organizationId, routesCreateTransformRequest, _options);
        return result.toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public v1OrganizationIdTransformsPost(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: Configuration): Promise<ModelsTransform> {
        const result = this.api.v1OrganizationIdTransformsPost(organizationId, routesCreateTransformRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(organizationId: string, transformId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(organizationId, transformId, _options);
        return result.toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public v1OrganizationIdTransformsTransformIdDelete(organizationId: string, transformId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OrganizationIdTransformsTransformIdDelete(organizationId, transformId, _options);
        return result.toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public v1OrganizationIdTransformsTransformIdGetWithHttpInfo(transformId: string, organizationId: string, _options?: Configuration): Promise<HttpInfo<RoutesGetTransformResponse>> {
        const result = this.api.v1OrganizationIdTransformsTransformIdGetWithHttpInfo(transformId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public v1OrganizationIdTransformsTransformIdGet(transformId: string, organizationId: string, _options?: Configuration): Promise<RoutesGetTransformResponse> {
        const result = this.api.v1OrganizationIdTransformsTransformIdGet(transformId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: Configuration): Promise<HttpInfo<ModelsTransform>> {
        const result = this.api.v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(organizationId, transformId, routesUpdateTransformRequest, _options);
        return result.toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public v1OrganizationIdTransformsTransformIdPatch(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: Configuration): Promise<ModelsTransform> {
        const result = this.api.v1OrganizationIdTransformsTransformIdPatch(organizationId, transformId, routesUpdateTransformRequest, _options);
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
    public v1OrganizationIdUsersGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsOrganizationUserList>> {
        const result = this.api.v1OrganizationIdUsersGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdUsersGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsOrganizationUserList> {
        const result = this.api.v1OrganizationIdUsersGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public v1OrganizationIdUsersPostWithHttpInfo(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: Configuration): Promise<HttpInfo<ModelsOrganizationUser>> {
        const result = this.api.v1OrganizationIdUsersPostWithHttpInfo(organizationId, routesAddUserToOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public v1OrganizationIdUsersPost(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: Configuration): Promise<ModelsOrganizationUser> {
        const result = this.api.v1OrganizationIdUsersPost(organizationId, routesAddUserToOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId: string, userId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId, userId, _options);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public v1OrganizationIdUsersUserIdDelete(organizationId: string, userId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OrganizationIdUsersUserIdDelete(organizationId, userId, _options);
        return result.toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public v1OrganizationIdUsersUserIdPatchWithHttpInfo(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: Configuration): Promise<HttpInfo<ModelsOrganizationUser>> {
        const result = this.api.v1OrganizationIdUsersUserIdPatchWithHttpInfo(organizationId, userId, routesUpdateUserInOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public v1OrganizationIdUsersUserIdPatch(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: Configuration): Promise<ModelsOrganizationUser> {
        const result = this.api.v1OrganizationIdUsersUserIdPatch(organizationId, userId, routesUpdateUserInOrganizationRequest, _options);
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
    public v1OrganizationsGetWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsOrganizationList>> {
        const result = this.api.v1OrganizationsGetWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationsGet(limit?: number, offset?: number, _options?: Configuration): Promise<ModelsOrganizationList> {
        const result = this.api.v1OrganizationsGet(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public v1OrganizationsOrganizationIdDeleteWithHttpInfo(organizationId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OrganizationsOrganizationIdDeleteWithHttpInfo(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public v1OrganizationsOrganizationIdDelete(organizationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OrganizationsOrganizationIdDelete(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: Configuration): Promise<HttpInfo<ModelsOrganization>> {
        const result = this.api.v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId, routesUpdateOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public v1OrganizationsOrganizationIdPatch(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: Configuration): Promise<ModelsOrganization> {
        const result = this.api.v1OrganizationsOrganizationIdPatch(organizationId, routesUpdateOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: Configuration): Promise<HttpInfo<ModelsOrganization>> {
        const result = this.api.v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPost(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: Configuration): Promise<ModelsOrganization> {
        const result = this.api.v1OrganizationsPost(routesCreateOrganizationRequest, _options);
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
    public v1OutputsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<OutputsConnectorMeta>>> {
        const result = this.api.v1OutputsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List outputs
     * List outputs
     */
    public v1OutputsGet(_options?: Configuration): Promise<Array<OutputsConnectorMeta>> {
        const result = this.api.v1OutputsGet(_options);
        return result.toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public v1OutputsOutputTypeIdGetWithHttpInfo(outputTypeId: string, _options?: Configuration): Promise<HttpInfo<ModelsConnectorMeta>> {
        const result = this.api.v1OutputsOutputTypeIdGetWithHttpInfo(outputTypeId, _options);
        return result.toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public v1OutputsOutputTypeIdGet(outputTypeId: string, _options?: Configuration): Promise<ModelsConnectorMeta> {
        const result = this.api.v1OutputsOutputTypeIdGet(outputTypeId, _options);
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
    public v1OrganizationIdPipelinesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsPipelineList>> {
        const result = this.api.v1OrganizationIdPipelinesGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsPipelineList> {
        const result = this.api.v1OrganizationIdPipelinesGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<ModelsPipeline>> {
        const result = this.api.v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: Configuration): Promise<ModelsPipeline> {
        const result = this.api.v1OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: Configuration): Promise<HttpInfo<ModelsPipeline>> {
        const result = this.api.v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId, pipelineId, routesUpdatePipelineRequest, _options);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public v1OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: Configuration): Promise<ModelsPipeline> {
        const result = this.api.v1OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesUpdatePipelineRequest, _options);
        return result.toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelineSummaryGetWithHttpInfo(organizationId: string, start?: string, end?: string, _options?: Configuration): Promise<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        const result = this.api.v2OrganizationIdPipelineSummaryGetWithHttpInfo(organizationId, start, end, _options);
        return result.toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelineSummaryGet(organizationId: string, start?: string, end?: string, _options?: Configuration): Promise<RoutesV2GetOrganizationSummaryResponse> {
        const result = this.api.v2OrganizationIdPipelineSummaryGet(organizationId, start, end, _options);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdPipelinesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsPipelineList>> {
        const result = this.api.v2OrganizationIdPipelinesGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsPipelineList> {
        const result = this.api.v2OrganizationIdPipelinesGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: Configuration): Promise<ModelsPipelineConfigV2> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId, _options);
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
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: Configuration): Promise<HttpInfo<ModelsPipelineNodeMetrics>> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, _options);
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
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: Configuration): Promise<ModelsPipelineNodeMetrics> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId, pipelineId, nodeId, metric, start, end, resolution, _options);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: Configuration): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId, pipelineId, routesV2UpdatePipelineRequest, _options);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public v2OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: Configuration): Promise<ModelsPipelineConfigV2> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesV2UpdatePipelineRequest, _options);
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
    public v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Promise<HttpInfo<ModelsPipelineStatus>> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(organizationId, pipelineId, metrics, start, end, _options);
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
    public v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Promise<ModelsPipelineStatus> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId, pipelineId, metrics, start, end, _options);
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
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Promise<HttpInfo<ModelsPipelineNodeStatus>> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, metrics, start, end, _options);
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
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Promise<ModelsPipelineNodeStatus> {
        const result = this.api.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId, pipelineId, nodeId, metrics, start, end, _options);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public v2OrganizationIdPipelinesPostWithHttpInfo(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: Configuration): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const result = this.api.v2OrganizationIdPipelinesPostWithHttpInfo(organizationId, routesV2CreatePipelineRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public v2OrganizationIdPipelinesPost(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: Configuration): Promise<ModelsPipelineConfigV2> {
        const result = this.api.v2OrganizationIdPipelinesPost(organizationId, routesV2CreatePipelineRequest, _options);
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
    public v2OrganizationIdPipelinesStatusesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: Configuration): Promise<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        const result = this.api.v2OrganizationIdPipelinesStatusesGetWithHttpInfo(organizationId, limit, offset, start, end, _options);
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
    public v2OrganizationIdPipelinesStatusesGet(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: Configuration): Promise<Array<RoutesV2PipelineWithStatus>> {
        const result = this.api.v2OrganizationIdPipelinesStatusesGet(organizationId, limit, offset, start, end, _options);
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
     * List roles
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public v1OrganizationIdRolesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsRoleList>> {
        const result = this.api.v1OrganizationIdRolesGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List roles
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public v1OrganizationIdRolesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsRoleList> {
        const result = this.api.v1OrganizationIdRolesGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Create role
     * Create role
     * @param organizationId Organization ID
     * @param routesCreateRoleRequest Request body for creating a role
     */
    public v1OrganizationIdRolesPostWithHttpInfo(organizationId: string, routesCreateRoleRequest: RoutesCreateRoleRequest, _options?: Configuration): Promise<HttpInfo<ModelsRole>> {
        const result = this.api.v1OrganizationIdRolesPostWithHttpInfo(organizationId, routesCreateRoleRequest, _options);
        return result.toPromise();
    }

    /**
     * Create role
     * Create role
     * @param organizationId Organization ID
     * @param routesCreateRoleRequest Request body for creating a role
     */
    public v1OrganizationIdRolesPost(organizationId: string, routesCreateRoleRequest: RoutesCreateRoleRequest, _options?: Configuration): Promise<ModelsRole> {
        const result = this.api.v1OrganizationIdRolesPost(organizationId, routesCreateRoleRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(organizationId: string, roleId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(organizationId, roleId, _options);
        return result.toPromise();
    }

    /**
     * Delete role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdDelete(organizationId: string, roleId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1OrganizationIdRolesRoleIdDelete(organizationId, roleId, _options);
        return result.toPromise();
    }

    /**
     * Get role
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdGetWithHttpInfo(organizationId: string, roleId: string, _options?: Configuration): Promise<HttpInfo<ModelsRole>> {
        const result = this.api.v1OrganizationIdRolesRoleIdGetWithHttpInfo(organizationId, roleId, _options);
        return result.toPromise();
    }

    /**
     * Get role
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdGet(organizationId: string, roleId: string, _options?: Configuration): Promise<ModelsRole> {
        const result = this.api.v1OrganizationIdRolesRoleIdGet(organizationId, roleId, _options);
        return result.toPromise();
    }

    /**
     * Update role
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesUpdateRoleRequest Request body for updating a role
     */
    public v1OrganizationIdRolesRoleIdPatchWithHttpInfo(organizationId: string, roleId: string, routesUpdateRoleRequest: RoutesUpdateRoleRequest, _options?: Configuration): Promise<HttpInfo<ModelsRole>> {
        const result = this.api.v1OrganizationIdRolesRoleIdPatchWithHttpInfo(organizationId, roleId, routesUpdateRoleRequest, _options);
        return result.toPromise();
    }

    /**
     * Update role
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesUpdateRoleRequest Request body for updating a role
     */
    public v1OrganizationIdRolesRoleIdPatch(organizationId: string, roleId: string, routesUpdateRoleRequest: RoutesUpdateRoleRequest, _options?: Configuration): Promise<ModelsRole> {
        const result = this.api.v1OrganizationIdRolesRoleIdPatch(organizationId, roleId, routesUpdateRoleRequest, _options);
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
    public v2SandboxTemplateGetWithHttpInfo(body?: any, _options?: Configuration): Promise<HttpInfo<RoutesV2ListTemplatesResponse>> {
        const result = this.api.v2SandboxTemplateGetWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public v2SandboxTemplateGet(body?: any, _options?: Configuration): Promise<RoutesV2ListTemplatesResponse> {
        const result = this.api.v2SandboxTemplateGet(body, _options);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public v2SandboxTemplatePostWithHttpInfo(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: Configuration): Promise<HttpInfo<RoutesV2GenerateRecordResponse>> {
        const result = this.api.v2SandboxTemplatePostWithHttpInfo(routesV2GenerateRecordRequest, _options);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public v2SandboxTemplatePost(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: Configuration): Promise<RoutesV2GenerateRecordResponse> {
        const result = this.api.v2SandboxTemplatePost(routesV2GenerateRecordRequest, _options);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public v2SandboxTransformPostWithHttpInfo(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: Configuration): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const result = this.api.v2SandboxTransformPostWithHttpInfo(routesV2ApplyTransformationRequest, _options);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public v2SandboxTransformPost(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: Configuration): Promise<RoutesV2ApplyTransformationResponse> {
        const result = this.api.v2SandboxTransformPost(routesV2ApplyTransformationRequest, _options);
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
     * Lists all secrets for the specified organization
     * List secrets
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public v2OrganizationIdSecretsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsSecretList>> {
        const result = this.api.v2OrganizationIdSecretsGetWithHttpInfo(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Lists all secrets for the specified organization
     * List secrets
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public v2OrganizationIdSecretsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ModelsSecretList> {
        const result = this.api.v2OrganizationIdSecretsGet(organizationId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public v2OrganizationIdSecretsPostWithHttpInfo(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const result = this.api.v2OrganizationIdSecretsPostWithHttpInfo(organizationId, routesV2CreateOrUpdateSecretRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public v2OrganizationIdSecretsPost(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Promise<RoutesV2SecretResponse> {
        const result = this.api.v2OrganizationIdSecretsPost(organizationId, routesV2CreateOrUpdateSecretRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(organizationId: string, secretId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(organizationId, secretId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdDelete(organizationId: string, secretId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v2OrganizationIdSecretsSecretIdDelete(organizationId, secretId, _options);
        return result.toPromise();
    }

    /**
     * Gets a specific secret by ID
     * Get secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdGetWithHttpInfo(organizationId: string, secretId: string, _options?: Configuration): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const result = this.api.v2OrganizationIdSecretsSecretIdGetWithHttpInfo(organizationId, secretId, _options);
        return result.toPromise();
    }

    /**
     * Gets a specific secret by ID
     * Get secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdGet(organizationId: string, secretId: string, _options?: Configuration): Promise<RoutesV2SecretResponse> {
        const result = this.api.v2OrganizationIdSecretsSecretIdGet(organizationId, secretId, _options);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const result = this.api.v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public v2OrganizationIdSecretsSecretIdPatch(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Promise<RoutesV2SecretResponse> {
        const result = this.api.v2OrganizationIdSecretsSecretIdPatch(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, _options);
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
    public v1TransformsGetWithHttpInfo(body?: any, _options?: Configuration): Promise<HttpInfo<OperationInformation>> {
        const result = this.api.v1TransformsGetWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public v1TransformsGet(body?: any, _options?: Configuration): Promise<OperationInformation> {
        const result = this.api.v1TransformsGet(body, _options);
        return result.toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId: string, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId, body, _options);
        return result.toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public v1TransformsTransformTypeIdGet(transformTypeId: string, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.v1TransformsTransformTypeIdGet(transformTypeId, body, _options);
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
     * List users
     * List users
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1UsersGetWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ModelsUserList>> {
        const result = this.api.v1UsersGetWithHttpInfo(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List users
     * List users
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1UsersGet(limit?: number, offset?: number, _options?: Configuration): Promise<ModelsUserList> {
        const result = this.api.v1UsersGet(limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPostWithHttpInfo(body?: any, _options?: Configuration): Promise<HttpInfo<ModelsUser>> {
        const result = this.api.v1UsersPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPost(body?: any, _options?: Configuration): Promise<ModelsUser> {
        const result = this.api.v1UsersPost(body, _options);
        return result.toPromise();
    }


}



