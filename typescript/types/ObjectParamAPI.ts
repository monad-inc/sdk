import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { ActorsInfoSettingsConfig } from '../models/ActorsInfoSettingsConfig';
import { AddAdd } from '../models/AddAdd';
import { AdminActivitySettingsConfig } from '../models/AdminActivitySettingsConfig';
import { AdminLogsSettingsConfig } from '../models/AdminLogsSettingsConfig';
import { AuditLogsSettingsConfig } from '../models/AuditLogsSettingsConfig';
import { Auth0Auth0TokenResponse } from '../models/Auth0Auth0TokenResponse';
import { Auth0LoginRequest } from '../models/Auth0LoginRequest';
import { AuthLogsSettingsConfig } from '../models/AuthLogsSettingsConfig';
import { AwsS3SettingsConfig } from '../models/AwsS3SettingsConfig';
import { AzureActivityLogsSettingsConfig } from '../models/AzureActivityLogsSettingsConfig';
import { ConditionInfo } from '../models/ConditionInfo';
import { CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue } from '../models/CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue';
import { DropKeyDropKey } from '../models/DropKeyDropKey';
import { DropKeyWhereValueEqDropKeyWhereValueEq } from '../models/DropKeyWhereValueEqDropKeyWhereValueEq';
import { DropRecordWhereValueEqDropRecordWhereValueEq } from '../models/DropRecordWhereValueEqDropRecordWhereValueEq';
import { DuplicateKeyValueToKeyDuplicateKeyValueToKey } from '../models/DuplicateKeyValueToKeyDuplicateKeyValueToKey';
import { FlattenFlatten } from '../models/FlattenFlatten';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
import { JqJQ } from '../models/JqJQ';
import { MathMultiplyWithValueMathMultiplyWithValue } from '../models/MathMultiplyWithValueMathMultiplyWithValue';
import { ModelsAPIKey } from '../models/ModelsAPIKey';
import { ModelsAPIKeyList } from '../models/ModelsAPIKeyList';
import { ModelsAPIKeyWithToken } from '../models/ModelsAPIKeyWithToken';
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
import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { ModelsSecretWithComponentsList } from '../models/ModelsSecretWithComponentsList';
import { ModelsTransform } from '../models/ModelsTransform';
import { ModelsTransformConfig } from '../models/ModelsTransformConfig';
import { ModelsTransformList } from '../models/ModelsTransformList';
import { ModelsTransformOperation } from '../models/ModelsTransformOperation';
import { ModelsUser } from '../models/ModelsUser';
import { ModelsUserList } from '../models/ModelsUserList';
import { MutateTypeMutateType } from '../models/MutateTypeMutateType';
import { MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq } from '../models/MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq';
import { MutateValueWhereKeyEqMutateValueWhereKeyEq } from '../models/MutateValueWhereKeyEqMutateValueWhereKeyEq';
import { OperationInformation } from '../models/OperationInformation';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
import { RenameKeyRenameKey } from '../models/RenameKeyRenameKey';
import { RenameKeyWhereValueEqRenameKeyWhereValueEq } from '../models/RenameKeyWhereValueEqRenameKeyWhereValueEq';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RoutesAddUserToOrganizationRequest } from '../models/RoutesAddUserToOrganizationRequest';
import { RoutesCreateOrganizationRequest } from '../models/RoutesCreateOrganizationRequest';
import { RoutesCreateRoleRequest } from '../models/RoutesCreateRoleRequest';
import { RoutesCreateTransformRequest } from '../models/RoutesCreateTransformRequest';
import { RoutesGetInputResponse } from '../models/RoutesGetInputResponse';
import { RoutesGetOutputResponse } from '../models/RoutesGetOutputResponse';
import { RoutesGetTransformResponse } from '../models/RoutesGetTransformResponse';
import { RoutesInviteUserToOrganizationRequest } from '../models/RoutesInviteUserToOrganizationRequest';
import { RoutesTransformConfig } from '../models/RoutesTransformConfig';
import { RoutesTransformOperation } from '../models/RoutesTransformOperation';
import { RoutesTransformOperationArguments } from '../models/RoutesTransformOperationArguments';
import { RoutesUpdateOrganizationRequest } from '../models/RoutesUpdateOrganizationRequest';
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
import { RoutesV2ListTemplatesResponse } from '../models/RoutesV2ListTemplatesResponse';
import { RoutesV2OrganizationOverview } from '../models/RoutesV2OrganizationOverview';
import { RoutesV2PipelineRequestEdge } from '../models/RoutesV2PipelineRequestEdge';
import { RoutesV2PipelineRequestNode } from '../models/RoutesV2PipelineRequestNode';
import { RoutesV2PipelineStatus } from '../models/RoutesV2PipelineStatus';
import { RoutesV2PipelineWithStatus } from '../models/RoutesV2PipelineWithStatus';
import { RoutesV2SecretResponse } from '../models/RoutesV2SecretResponse';
import { RoutesV2SuccessResponse } from '../models/RoutesV2SuccessResponse';
import { RoutesV2UpdateAPIKeyRequest } from '../models/RoutesV2UpdateAPIKeyRequest';
import { RoutesV2UpdateInputRequest } from '../models/RoutesV2UpdateInputRequest';
import { RoutesV2UpdateOutputRequest } from '../models/RoutesV2UpdateOutputRequest';
import { RoutesV2UpdatePipelineRequest } from '../models/RoutesV2UpdatePipelineRequest';
import { UtcTimestampTimestamp } from '../models/UtcTimestampTimestamp';
import { V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet500Response } from '../models/V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet500Response';

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiV1LoginCallbackGetRequest {
}

export interface AuthenticationApiV1LoginGetRequest {
}

export interface AuthenticationApiV1LoginResendVerificationPostRequest {
}

export interface AuthenticationApiV1LoginTokenPostRequest {
    /**
     * Login request
     * @type Auth0LoginRequest
     * @memberof AuthenticationApiv1LoginTokenPost
     */
    auth0LoginRequest: Auth0LoginRequest
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     * @param param the request object
     */
    public v1LoginCallbackGetWithHttpInfo(param: AuthenticationApiV1LoginCallbackGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1LoginCallbackGetWithHttpInfo( options).toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     * @param param the request object
     */
    public v1LoginCallbackGet(param: AuthenticationApiV1LoginCallbackGetRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1LoginCallbackGet( options).toPromise();
    }

    /**
     * Redirects the user to Authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     * @param param the request object
     */
    public v1LoginGetWithHttpInfo(param: AuthenticationApiV1LoginGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v1LoginGetWithHttpInfo( options).toPromise();
    }

    /**
     * Redirects the user to Authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     * @param param the request object
     */
    public v1LoginGet(param: AuthenticationApiV1LoginGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.v1LoginGet( options).toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     * @param param the request object
     */
    public v1LoginResendVerificationPostWithHttpInfo(param: AuthenticationApiV1LoginResendVerificationPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1LoginResendVerificationPostWithHttpInfo( options).toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     * @param param the request object
     */
    public v1LoginResendVerificationPost(param: AuthenticationApiV1LoginResendVerificationPostRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1LoginResendVerificationPost( options).toPromise();
    }

    /**
     * Retrieve an authentication token from the Authentication service using username and password.
     * Get Authentication token
     * @param param the request object
     */
    public v1LoginTokenPostWithHttpInfo(param: AuthenticationApiV1LoginTokenPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<Auth0Auth0TokenResponse>> {
        return this.api.v1LoginTokenPostWithHttpInfo(param.auth0LoginRequest,  options).toPromise();
    }

    /**
     * Retrieve an authentication token from the Authentication service using username and password.
     * Get Authentication token
     * @param param the request object
     */
    public v1LoginTokenPost(param: AuthenticationApiV1LoginTokenPostRequest, options?: ConfigurationOptions): Promise<Auth0Auth0TokenResponse> {
        return this.api.v1LoginTokenPost(param.auth0LoginRequest,  options).toPromise();
    }

}

import { ObservableConditionsApi } from "./ObservableAPI";
import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";

export interface ConditionsApiV2ConditionsGetRequest {
    /**
     * 
     * @type any
     * @memberof ConditionsApiv2ConditionsGet
     */
    body?: any
}

export class ObjectConditionsApi {
    private api: ObservableConditionsApi

    public constructor(configuration: Configuration, requestFactory?: ConditionsApiRequestFactory, responseProcessor?: ConditionsApiResponseProcessor) {
        this.api = new ObservableConditionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List conditions
     * List conditions
     * @param param the request object
     */
    public v2ConditionsGetWithHttpInfo(param: ConditionsApiV2ConditionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ConditionInfo>>> {
        return this.api.v2ConditionsGetWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List conditions
     * List conditions
     * @param param the request object
     */
    public v2ConditionsGet(param: ConditionsApiV2ConditionsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ConditionInfo>> {
        return this.api.v2ConditionsGet(param.body,  options).toPromise();
    }

}

import { ObservableDataApi } from "./ObservableAPI";
import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";

export interface DataApiV1OrganizationIdDataNodeIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof DataApiv1OrganizationIdDataNodeIdGet
     */
    organizationId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof DataApiv1OrganizationIdDataNodeIdGet
     */
    nodeId: string
}

export class ObjectDataApi {
    private api: ObservableDataApi

    public constructor(configuration: Configuration, requestFactory?: DataApiRequestFactory, responseProcessor?: DataApiResponseProcessor) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param param the request object
     */
    public v1OrganizationIdDataNodeIdGetWithHttpInfo(param: DataApiV1OrganizationIdDataNodeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdDataNodeIdGetWithHttpInfo(param.organizationId, param.nodeId,  options).toPromise();
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param param the request object
     */
    public v1OrganizationIdDataNodeIdGet(param: DataApiV1OrganizationIdDataNodeIdGetRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdDataNodeIdGet(param.organizationId, param.nodeId,  options).toPromise();
    }

}

import { ObservableInputsApi } from "./ObservableAPI";
import { InputsApiRequestFactory, InputsApiResponseProcessor} from "../apis/InputsApi";

export interface InputsApiV1InputsGetRequest {
}

export interface InputsApiV1InputsInputTypeIdGetRequest {
    /**
     * Input type ID
     * Defaults to: undefined
     * @type string
     * @memberof InputsApiv1InputsInputTypeIdGet
     */
    inputTypeId: string
}

export class ObjectInputsApi {
    private api: ObservableInputsApi

    public constructor(configuration: Configuration, requestFactory?: InputsApiRequestFactory, responseProcessor?: InputsApiResponseProcessor) {
        this.api = new ObservableInputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List inputs
     * List inputs
     * @param param the request object
     */
    public v1InputsGetWithHttpInfo(param: InputsApiV1InputsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<InputsConnectorMeta>>> {
        return this.api.v1InputsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param param the request object
     */
    public v1InputsGet(param: InputsApiV1InputsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<InputsConnectorMeta>> {
        return this.api.v1InputsGet( options).toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param param the request object
     */
    public v1InputsInputTypeIdGetWithHttpInfo(param: InputsApiV1InputsInputTypeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        return this.api.v1InputsInputTypeIdGetWithHttpInfo(param.inputTypeId,  options).toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param param the request object
     */
    public v1InputsInputTypeIdGet(param: InputsApiV1InputsInputTypeIdGetRequest, options?: ConfigurationOptions): Promise<ModelsConnectorMeta> {
        return this.api.v1InputsInputTypeIdGet(param.inputTypeId,  options).toPromise();
    }

}

import { ObservableLogsApi } from "./ObservableAPI";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";

export interface LogsApiV1OrganizationIdLogsApiGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsApiGet
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsApiGet
     */
    since?: string
}

export interface LogsApiV1OrganizationIdLogsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsGet
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsGet
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsGet
     */
    last?: string
}

export interface LogsApiV1OrganizationIdLogsPipelinesGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesGet
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesGet
     */
    since?: string
}

export interface LogsApiV1OrganizationIdLogsPipelinesPipelineIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdGet
     */
    pipelineId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdGet
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdGet
     */
    last?: string
}

export interface LogsApiV1OrganizationIdLogsPipelinesPipelineIdNodeIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdNodeIdGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdNodeIdGet
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdNodeIdGet
     */
    nodeId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdNodeIdGet
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof LogsApiv1OrganizationIdLogsPipelinesPipelineIdNodeIdGet
     */
    last?: string
}

export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param param the request object
     */
    public v1OrganizationIdLogsApiGetWithHttpInfo(param: LogsApiV1OrganizationIdLogsApiGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdLogsApiGetWithHttpInfo(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param param the request object
     */
    public v1OrganizationIdLogsApiGet(param: LogsApiV1OrganizationIdLogsApiGetRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdLogsApiGet(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param param the request object
     */
    public v1OrganizationIdLogsGetWithHttpInfo(param: LogsApiV1OrganizationIdLogsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdLogsGetWithHttpInfo(param.organizationId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param param the request object
     */
    public v1OrganizationIdLogsGet(param: LogsApiV1OrganizationIdLogsGetRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdLogsGet(param.organizationId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param param the request object
     */
    public v1OrganizationIdLogsPipelinesGetWithHttpInfo(param: LogsApiV1OrganizationIdLogsPipelinesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdLogsPipelinesGetWithHttpInfo(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param param the request object
     */
    public v1OrganizationIdLogsPipelinesGet(param: LogsApiV1OrganizationIdLogsPipelinesGetRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdLogsPipelinesGet(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param param the request object
     */
    public v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(param: LogsApiV1OrganizationIdLogsPipelinesPipelineIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(param.organizationId, param.pipelineId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param param the request object
     */
    public v1OrganizationIdLogsPipelinesPipelineIdGet(param: LogsApiV1OrganizationIdLogsPipelinesPipelineIdGetRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdLogsPipelinesPipelineIdGet(param.organizationId, param.pipelineId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for a specific node within a pipeline and organization
     * Stream node logs
     * @param param the request object
     */
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(param: LogsApiV1OrganizationIdLogsPipelinesPipelineIdNodeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for a specific node within a pipeline and organization
     * Stream node logs
     * @param param the request object
     */
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(param: LogsApiV1OrganizationIdLogsPipelinesPipelineIdNodeIdGetRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(param.organizationId, param.pipelineId, param.nodeId, param.since, param.last,  options).toPromise();
    }

}

import { ObservableOauthApi } from "./ObservableAPI";
import { OauthApiRequestFactory, OauthApiResponseProcessor} from "../apis/OauthApi";

export interface OauthApiV1OauthTypeIdCallbackGetRequest {
    /**
     * component type ID
     * Defaults to: undefined
     * @type string
     * @memberof OauthApiv1OauthTypeIdCallbackGet
     */
    typeId: string
}

export interface OauthApiV1OauthTypeIdOrganizationIdGetRequest {
    /**
     * component type ID
     * Defaults to: undefined
     * @type string
     * @memberof OauthApiv1OauthTypeIdOrganizationIdGet
     */
    typeId: string
    /**
     * organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OauthApiv1OauthTypeIdOrganizationIdGet
     */
    organizationId: string
}

export class ObjectOauthApi {
    private api: ObservableOauthApi

    public constructor(configuration: Configuration, requestFactory?: OauthApiRequestFactory, responseProcessor?: OauthApiResponseProcessor) {
        this.api = new ObservableOauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param param the request object
     */
    public v1OauthTypeIdCallbackGetWithHttpInfo(param: OauthApiV1OauthTypeIdCallbackGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OauthTypeIdCallbackGetWithHttpInfo(param.typeId,  options).toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param param the request object
     */
    public v1OauthTypeIdCallbackGet(param: OauthApiV1OauthTypeIdCallbackGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OauthTypeIdCallbackGet(param.typeId,  options).toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param param the request object
     */
    public v1OauthTypeIdOrganizationIdGetWithHttpInfo(param: OauthApiV1OauthTypeIdOrganizationIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OauthTypeIdOrganizationIdGetWithHttpInfo(param.typeId, param.organizationId,  options).toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param param the request object
     */
    public v1OauthTypeIdOrganizationIdGet(param: OauthApiV1OauthTypeIdOrganizationIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OauthTypeIdOrganizationIdGet(param.typeId, param.organizationId,  options).toPromise();
    }

}

import { ObservableOrganizationApiKeysApi } from "./ObservableAPI";
import { OrganizationApiKeysApiRequestFactory, OrganizationApiKeysApiResponseProcessor} from "../apis/OrganizationApiKeysApi";

export interface OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdDelete
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdDelete
     */
    apiKeyId: string
}

export interface OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdGet
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdGet
     */
    apiKeyId: string
}

export interface OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdPatch
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdPatch
     */
    apiKeyId: string
    /**
     * Request body for updating an API key
     * @type RoutesV2UpdateAPIKeyRequest
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdPatch
     */
    routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest
}

export interface OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdRegeneratePostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdRegeneratePost
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysApiKeyIdRegeneratePost
     */
    apiKeyId: string
}

export interface OrganizationApiKeysApiV2OrganizationIdApiKeysGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysGet
     */
    offset?: number
}

export interface OrganizationApiKeysApiV2OrganizationIdApiKeysPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysPost
     */
    organizationId: string
    /**
     * Request body for creating an API key
     * @type RoutesV2CreateAPIKeyRequest
     * @memberof OrganizationApiKeysApiv2OrganizationIdApiKeysPost
     */
    routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest
}

export class ObjectOrganizationApiKeysApi {
    private api: ObservableOrganizationApiKeysApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationApiKeysApiRequestFactory, responseProcessor?: OrganizationApiKeysApiResponseProcessor) {
        this.api = new ObservableOrganizationApiKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete API key
     * Delete API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdDelete(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdDeleteRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdDelete(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdGet(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdGetRequest, options?: ConfigurationOptions): Promise<ModelsAPIKey> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdGet(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(param.organizationId, param.apiKeyId, param.routesV2UpdateAPIKeyRequest,  options).toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdPatch(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsAPIKey> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdPatch(param.organizationId, param.apiKeyId, param.routesV2UpdateAPIKeyRequest,  options).toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdRegeneratePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePost(param: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdRegeneratePostRequest, options?: ConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        return this.api.v2OrganizationIdApiKeysApiKeyIdRegeneratePost(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param param the request object
     */
    public v2OrganizationIdApiKeysGetWithHttpInfo(param: OrganizationApiKeysApiV2OrganizationIdApiKeysGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyList>> {
        return this.api.v2OrganizationIdApiKeysGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param param the request object
     */
    public v2OrganizationIdApiKeysGet(param: OrganizationApiKeysApiV2OrganizationIdApiKeysGetRequest, options?: ConfigurationOptions): Promise<ModelsAPIKeyList> {
        return this.api.v2OrganizationIdApiKeysGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysPostWithHttpInfo(param: OrganizationApiKeysApiV2OrganizationIdApiKeysPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        return this.api.v2OrganizationIdApiKeysPostWithHttpInfo(param.organizationId, param.routesV2CreateAPIKeyRequest,  options).toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param param the request object
     */
    public v2OrganizationIdApiKeysPost(param: OrganizationApiKeysApiV2OrganizationIdApiKeysPostRequest, options?: ConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        return this.api.v2OrganizationIdApiKeysPost(param.organizationId, param.routesV2CreateAPIKeyRequest,  options).toPromise();
    }

}

import { ObservableOrganizationInputsApi } from "./ObservableAPI";
import { OrganizationInputsApiRequestFactory, OrganizationInputsApiResponseProcessor} from "../apis/OrganizationInputsApi";

export interface OrganizationInputsApiV1OrganizationIdInputsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv1OrganizationIdInputsGet
     */
    organizationId: string
    /**
     * Limit the number of organizations returned (default: DefaultLimit)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationInputsApiv1OrganizationIdInputsGet
     */
    limit?: number
    /**
     * Offset the organizations returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationInputsApiv1OrganizationIdInputsGet
     */
    offset?: number
}

export interface OrganizationInputsApiV1OrganizationIdInputsInputIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv1OrganizationIdInputsInputIdDelete
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv1OrganizationIdInputsInputIdDelete
     */
    inputId: string
}

export interface OrganizationInputsApiV1OrganizationIdInputsInputIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv1OrganizationIdInputsInputIdGet
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv1OrganizationIdInputsInputIdGet
     */
    inputId: string
}

export interface OrganizationInputsApiV2OrganizationIdInputsInputIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPatch
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPatch
     */
    inputId: string
    /**
     * Input configuration update
     * @type RoutesV2UpdateInputRequest
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPatch
     */
    routesV2UpdateInputRequest: RoutesV2UpdateInputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPatch
     */
    testConnection?: boolean
}

export interface OrganizationInputsApiV2OrganizationIdInputsPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv2OrganizationIdInputsPost
     */
    organizationId: string
    /**
     * Input configuration
     * @type RoutesV2CreateInputRequest
     * @memberof OrganizationInputsApiv2OrganizationIdInputsPost
     */
    routesV2CreateInputRequest: RoutesV2CreateInputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationInputsApiv2OrganizationIdInputsPost
     */
    testConnection?: boolean
}

export interface OrganizationInputsApiV2OrganizationIdInputsTestConnectionPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv2OrganizationIdInputsTestConnectionPost
     */
    organizationId: string
    /**
     * Input configuration to test
     * @type any
     * @memberof OrganizationInputsApiv2OrganizationIdInputsTestConnectionPost
     */
    body: any
}

export class ObjectOrganizationInputsApi {
    private api: ObservableOrganizationInputsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationInputsApiRequestFactory, responseProcessor?: OrganizationInputsApiResponseProcessor) {
        this.api = new ObservableOrganizationInputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List inputs
     * List inputs
     * @param param the request object
     */
    public v1OrganizationIdInputsGetWithHttpInfo(param: OrganizationInputsApiV1OrganizationIdInputsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInputList>> {
        return this.api.v1OrganizationIdInputsGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param param the request object
     */
    public v1OrganizationIdInputsGet(param: OrganizationInputsApiV1OrganizationIdInputsGetRequest, options?: ConfigurationOptions): Promise<ModelsInputList> {
        return this.api.v1OrganizationIdInputsGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param param the request object
     */
    public v1OrganizationIdInputsInputIdDeleteWithHttpInfo(param: OrganizationInputsApiV1OrganizationIdInputsInputIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OrganizationIdInputsInputIdDeleteWithHttpInfo(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param param the request object
     */
    public v1OrganizationIdInputsInputIdDelete(param: OrganizationInputsApiV1OrganizationIdInputsInputIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OrganizationIdInputsInputIdDelete(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Get input
     * Get input
     * @param param the request object
     */
    public v1OrganizationIdInputsInputIdGetWithHttpInfo(param: OrganizationInputsApiV1OrganizationIdInputsInputIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesGetInputResponse>> {
        return this.api.v1OrganizationIdInputsInputIdGetWithHttpInfo(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Get input
     * Get input
     * @param param the request object
     */
    public v1OrganizationIdInputsInputIdGet(param: OrganizationInputsApiV1OrganizationIdInputsInputIdGetRequest, options?: ConfigurationOptions): Promise<RoutesGetInputResponse> {
        return this.api.v1OrganizationIdInputsInputIdGet(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param param the request object
     */
    public v2OrganizationIdInputsInputIdPatchWithHttpInfo(param: OrganizationInputsApiV2OrganizationIdInputsInputIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        return this.api.v2OrganizationIdInputsInputIdPatchWithHttpInfo(param.organizationId, param.inputId, param.routesV2UpdateInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param param the request object
     */
    public v2OrganizationIdInputsInputIdPatch(param: OrganizationInputsApiV2OrganizationIdInputsInputIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsInput> {
        return this.api.v2OrganizationIdInputsInputIdPatch(param.organizationId, param.inputId, param.routesV2UpdateInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param param the request object
     */
    public v2OrganizationIdInputsPostWithHttpInfo(param: OrganizationInputsApiV2OrganizationIdInputsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        return this.api.v2OrganizationIdInputsPostWithHttpInfo(param.organizationId, param.routesV2CreateInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param param the request object
     */
    public v2OrganizationIdInputsPost(param: OrganizationInputsApiV2OrganizationIdInputsPostRequest, options?: ConfigurationOptions): Promise<ModelsInput> {
        return this.api.v2OrganizationIdInputsPost(param.organizationId, param.routesV2CreateInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param param the request object
     */
    public v2OrganizationIdInputsTestConnectionPostWithHttpInfo(param: OrganizationInputsApiV2OrganizationIdInputsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        return this.api.v2OrganizationIdInputsTestConnectionPostWithHttpInfo(param.organizationId, param.body,  options).toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param param the request object
     */
    public v2OrganizationIdInputsTestConnectionPost(param: OrganizationInputsApiV2OrganizationIdInputsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        return this.api.v2OrganizationIdInputsTestConnectionPost(param.organizationId, param.body,  options).toPromise();
    }

}

import { ObservableOrganizationInvitesApi } from "./ObservableAPI";
import { OrganizationInvitesApiRequestFactory, OrganizationInvitesApiResponseProcessor} from "../apis/OrganizationInvitesApi";

export interface OrganizationInvitesApiV1OrganizationIdInvitesPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInvitesApiv1OrganizationIdInvitesPost
     */
    organizationId: string
    /**
     * Request body for inviting a user to an organization
     * @type RoutesInviteUserToOrganizationRequest
     * @memberof OrganizationInvitesApiv1OrganizationIdInvitesPost
     */
    routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest
}

export class ObjectOrganizationInvitesApi {
    private api: ObservableOrganizationInvitesApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationInvitesApiRequestFactory, responseProcessor?: OrganizationInvitesApiResponseProcessor) {
        this.api = new ObservableOrganizationInvitesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param param the request object
     */
    public v1OrganizationIdInvitesPostWithHttpInfo(param: OrganizationInvitesApiV1OrganizationIdInvitesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdInvitesPostWithHttpInfo(param.organizationId, param.routesInviteUserToOrganizationRequest,  options).toPromise();
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param param the request object
     */
    public v1OrganizationIdInvitesPost(param: OrganizationInvitesApiV1OrganizationIdInvitesPostRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdInvitesPost(param.organizationId, param.routesInviteUserToOrganizationRequest,  options).toPromise();
    }

}

import { ObservableOrganizationOutputsApi } from "./ObservableAPI";
import { OrganizationOutputsApiRequestFactory, OrganizationOutputsApiResponseProcessor} from "../apis/OrganizationOutputsApi";

export interface OrganizationOutputsApiV1OrganizationIdOutputsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsGet
     */
    offset?: number
}

export interface OrganizationOutputsApiV1OrganizationIdOutputsOutputIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsOutputIdDelete
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsOutputIdDelete
     */
    outputId: string
}

export interface OrganizationOutputsApiV1OrganizationIdOutputsOutputIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsOutputIdGet
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv1OrganizationIdOutputsOutputIdGet
     */
    outputId: string
}

export interface OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPatch
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPatch
     */
    outputId: string
    /**
     * Output configuration update
     * @type RoutesV2UpdateOutputRequest
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPatch
     */
    routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPatch
     */
    testConnection?: boolean
}

export interface OrganizationOutputsApiV2OrganizationIdOutputsPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsPost
     */
    organizationId: string
    /**
     * Output configuration
     * @type RoutesV2CreateOutputRequest
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsPost
     */
    routesV2CreateOutputRequest: RoutesV2CreateOutputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsPost
     */
    testConnection?: boolean
}

export interface OrganizationOutputsApiV2OrganizationIdOutputsTestConnectionPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsTestConnectionPost
     */
    organizationId: string
    /**
     * Output configuration to test
     * @type any
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsTestConnectionPost
     */
    body: any
}

export class ObjectOrganizationOutputsApi {
    private api: ObservableOrganizationOutputsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationOutputsApiRequestFactory, responseProcessor?: OrganizationOutputsApiResponseProcessor) {
        this.api = new ObservableOrganizationOutputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List outputs
     * List outputs
     * @param param the request object
     */
    public v1OrganizationIdOutputsGetWithHttpInfo(param: OrganizationOutputsApiV1OrganizationIdOutputsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutputList>> {
        return this.api.v1OrganizationIdOutputsGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List outputs
     * List outputs
     * @param param the request object
     */
    public v1OrganizationIdOutputsGet(param: OrganizationOutputsApiV1OrganizationIdOutputsGetRequest, options?: ConfigurationOptions): Promise<ModelsOutputList> {
        return this.api.v1OrganizationIdOutputsGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param param the request object
     */
    public v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(param: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param param the request object
     */
    public v1OrganizationIdOutputsOutputIdDelete(param: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdDeleteRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdOutputsOutputIdDelete(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Get output
     * Get output
     * @param param the request object
     */
    public v1OrganizationIdOutputsOutputIdGetWithHttpInfo(param: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesGetOutputResponse>> {
        return this.api.v1OrganizationIdOutputsOutputIdGetWithHttpInfo(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Get output
     * Get output
     * @param param the request object
     */
    public v1OrganizationIdOutputsOutputIdGet(param: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdGetRequest, options?: ConfigurationOptions): Promise<RoutesGetOutputResponse> {
        return this.api.v1OrganizationIdOutputsOutputIdGet(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param param the request object
     */
    public v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(param: OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        return this.api.v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(param.organizationId, param.outputId, param.routesV2UpdateOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param param the request object
     */
    public v2OrganizationIdOutputsOutputIdPatch(param: OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsOutput> {
        return this.api.v2OrganizationIdOutputsOutputIdPatch(param.organizationId, param.outputId, param.routesV2UpdateOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param param the request object
     */
    public v2OrganizationIdOutputsPostWithHttpInfo(param: OrganizationOutputsApiV2OrganizationIdOutputsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        return this.api.v2OrganizationIdOutputsPostWithHttpInfo(param.organizationId, param.routesV2CreateOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param param the request object
     */
    public v2OrganizationIdOutputsPost(param: OrganizationOutputsApiV2OrganizationIdOutputsPostRequest, options?: ConfigurationOptions): Promise<ModelsOutput> {
        return this.api.v2OrganizationIdOutputsPost(param.organizationId, param.routesV2CreateOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param param the request object
     */
    public v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(param: OrganizationOutputsApiV2OrganizationIdOutputsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        return this.api.v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(param.organizationId, param.body,  options).toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param param the request object
     */
    public v2OrganizationIdOutputsTestConnectionPost(param: OrganizationOutputsApiV2OrganizationIdOutputsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        return this.api.v2OrganizationIdOutputsTestConnectionPost(param.organizationId, param.body,  options).toPromise();
    }

}

import { ObservableOrganizationQuotasApi } from "./ObservableAPI";
import { OrganizationQuotasApiRequestFactory, OrganizationQuotasApiResponseProcessor} from "../apis/OrganizationQuotasApi";

export interface OrganizationQuotasApiV2OrganizationIdQuotasGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationQuotasApiv2OrganizationIdQuotasGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationQuotasApiv2OrganizationIdQuotasGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationQuotasApiv2OrganizationIdQuotasGet
     */
    offset?: number
    /**
     * 
     * @type any
     * @memberof OrganizationQuotasApiv2OrganizationIdQuotasGet
     */
    body?: any
}

export class ObjectOrganizationQuotasApi {
    private api: ObservableOrganizationQuotasApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationQuotasApiRequestFactory, responseProcessor?: OrganizationQuotasApiResponseProcessor) {
        this.api = new ObservableOrganizationQuotasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param param the request object
     */
    public v2OrganizationIdQuotasGetWithHttpInfo(param: OrganizationQuotasApiV2OrganizationIdQuotasGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        return this.api.v2OrganizationIdQuotasGetWithHttpInfo(param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param param the request object
     */
    public v2OrganizationIdQuotasGet(param: OrganizationQuotasApiV2OrganizationIdQuotasGetRequest, options?: ConfigurationOptions): Promise<ModelsQuotaList> {
        return this.api.v2OrganizationIdQuotasGet(param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

}

import { ObservableOrganizationTransformsApi } from "./ObservableAPI";
import { OrganizationTransformsApiRequestFactory, OrganizationTransformsApiResponseProcessor} from "../apis/OrganizationTransformsApi";

export interface OrganizationTransformsApiV1OrganizationIdTransformsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsGet
     */
    offset?: number
}

export interface OrganizationTransformsApiV1OrganizationIdTransformsPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsPost
     */
    organizationId: string
    /**
     * Request body for creating a transform
     * @type RoutesCreateTransformRequest
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsPost
     */
    routesCreateTransformRequest: RoutesCreateTransformRequest
}

export interface OrganizationTransformsApiV1OrganizationIdTransformsTransformIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdDelete
     */
    organizationId: string
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdDelete
     */
    transformId: string
}

export interface OrganizationTransformsApiV1OrganizationIdTransformsTransformIdGetRequest {
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdGet
     */
    transformId: string
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdGet
     */
    organizationId: string
}

export interface OrganizationTransformsApiV1OrganizationIdTransformsTransformIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdPatch
     */
    organizationId: string
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdPatch
     */
    transformId: string
    /**
     * Request body for updating a transform
     * @type RoutesUpdateTransformRequest
     * @memberof OrganizationTransformsApiv1OrganizationIdTransformsTransformIdPatch
     */
    routesUpdateTransformRequest: RoutesUpdateTransformRequest
}

export class ObjectOrganizationTransformsApi {
    private api: ObservableOrganizationTransformsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationTransformsApiRequestFactory, responseProcessor?: OrganizationTransformsApiResponseProcessor) {
        this.api = new ObservableOrganizationTransformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List transforms
     * List transforms
     * @param param the request object
     */
    public v1OrganizationIdTransformsGetWithHttpInfo(param: OrganizationTransformsApiV1OrganizationIdTransformsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransformList>> {
        return this.api.v1OrganizationIdTransformsGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param param the request object
     */
    public v1OrganizationIdTransformsGet(param: OrganizationTransformsApiV1OrganizationIdTransformsGetRequest, options?: ConfigurationOptions): Promise<ModelsTransformList> {
        return this.api.v1OrganizationIdTransformsGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsPostWithHttpInfo(param: OrganizationTransformsApiV1OrganizationIdTransformsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        return this.api.v1OrganizationIdTransformsPostWithHttpInfo(param.organizationId, param.routesCreateTransformRequest,  options).toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsPost(param: OrganizationTransformsApiV1OrganizationIdTransformsPostRequest, options?: ConfigurationOptions): Promise<ModelsTransform> {
        return this.api.v1OrganizationIdTransformsPost(param.organizationId, param.routesCreateTransformRequest,  options).toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(param: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(param.organizationId, param.transformId,  options).toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsTransformIdDelete(param: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OrganizationIdTransformsTransformIdDelete(param.organizationId, param.transformId,  options).toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsTransformIdGetWithHttpInfo(param: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesGetTransformResponse>> {
        return this.api.v1OrganizationIdTransformsTransformIdGetWithHttpInfo(param.transformId, param.organizationId,  options).toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsTransformIdGet(param: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdGetRequest, options?: ConfigurationOptions): Promise<RoutesGetTransformResponse> {
        return this.api.v1OrganizationIdTransformsTransformIdGet(param.transformId, param.organizationId,  options).toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(param: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        return this.api.v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(param.organizationId, param.transformId, param.routesUpdateTransformRequest,  options).toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param param the request object
     */
    public v1OrganizationIdTransformsTransformIdPatch(param: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsTransform> {
        return this.api.v1OrganizationIdTransformsTransformIdPatch(param.organizationId, param.transformId, param.routesUpdateTransformRequest,  options).toPromise();
    }

}

import { ObservableOrganizationUsersApi } from "./ObservableAPI";
import { OrganizationUsersApiRequestFactory, OrganizationUsersApiResponseProcessor} from "../apis/OrganizationUsersApi";

export interface OrganizationUsersApiV1OrganizationIdUsersGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationUsersApiv1OrganizationIdUsersGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationUsersApiv1OrganizationIdUsersGet
     */
    offset?: number
}

export interface OrganizationUsersApiV1OrganizationIdUsersPostRequest {
    /**
     * organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersPost
     */
    organizationId: string
    /**
     * Request body for adding a user to an organization
     * @type RoutesAddUserToOrganizationRequest
     * @memberof OrganizationUsersApiv1OrganizationIdUsersPost
     */
    routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest
}

export interface OrganizationUsersApiV1OrganizationIdUsersUserIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersUserIdDelete
     */
    organizationId: string
    /**
     * User ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersUserIdDelete
     */
    userId: string
}

export interface OrganizationUsersApiV1OrganizationIdUsersUserIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersUserIdPatch
     */
    organizationId: string
    /**
     * User ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersUserIdPatch
     */
    userId: string
    /**
     * Request body for updating a user in an organization
     * @type RoutesUpdateUserInOrganizationRequest
     * @memberof OrganizationUsersApiv1OrganizationIdUsersUserIdPatch
     */
    routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest
}

export class ObjectOrganizationUsersApi {
    private api: ObservableOrganizationUsersApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationUsersApiRequestFactory, responseProcessor?: OrganizationUsersApiResponseProcessor) {
        this.api = new ObservableOrganizationUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List organization users
     * List organization users
     * @param param the request object
     */
    public v1OrganizationIdUsersGetWithHttpInfo(param: OrganizationUsersApiV1OrganizationIdUsersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUserList>> {
        return this.api.v1OrganizationIdUsersGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param param the request object
     */
    public v1OrganizationIdUsersGet(param: OrganizationUsersApiV1OrganizationIdUsersGetRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationUserList> {
        return this.api.v1OrganizationIdUsersGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param param the request object
     */
    public v1OrganizationIdUsersPostWithHttpInfo(param: OrganizationUsersApiV1OrganizationIdUsersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        return this.api.v1OrganizationIdUsersPostWithHttpInfo(param.organizationId, param.routesAddUserToOrganizationRequest,  options).toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param param the request object
     */
    public v1OrganizationIdUsersPost(param: OrganizationUsersApiV1OrganizationIdUsersPostRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationUser> {
        return this.api.v1OrganizationIdUsersPost(param.organizationId, param.routesAddUserToOrganizationRequest,  options).toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param param the request object
     */
    public v1OrganizationIdUsersUserIdDeleteWithHttpInfo(param: OrganizationUsersApiV1OrganizationIdUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OrganizationIdUsersUserIdDeleteWithHttpInfo(param.organizationId, param.userId,  options).toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param param the request object
     */
    public v1OrganizationIdUsersUserIdDelete(param: OrganizationUsersApiV1OrganizationIdUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OrganizationIdUsersUserIdDelete(param.organizationId, param.userId,  options).toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param param the request object
     */
    public v1OrganizationIdUsersUserIdPatchWithHttpInfo(param: OrganizationUsersApiV1OrganizationIdUsersUserIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        return this.api.v1OrganizationIdUsersUserIdPatchWithHttpInfo(param.organizationId, param.userId, param.routesUpdateUserInOrganizationRequest,  options).toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param param the request object
     */
    public v1OrganizationIdUsersUserIdPatch(param: OrganizationUsersApiV1OrganizationIdUsersUserIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationUser> {
        return this.api.v1OrganizationIdUsersUserIdPatch(param.organizationId, param.userId, param.routesUpdateUserInOrganizationRequest,  options).toPromise();
    }

}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";

export interface OrganizationsApiV1OrganizationsGetRequest {
    /**
     * Limit the number of organizations returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationsApiv1OrganizationsGet
     */
    limit?: number
    /**
     * Offset the organizations returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationsApiv1OrganizationsGet
     */
    offset?: number
}

export interface OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApiv1OrganizationsOrganizationIdDelete
     */
    organizationId: string
}

export interface OrganizationsApiV1OrganizationsOrganizationIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApiv1OrganizationsOrganizationIdPatch
     */
    organizationId: string
    /**
     * Request body for updating an organization
     * @type RoutesUpdateOrganizationRequest
     * @memberof OrganizationsApiv1OrganizationsOrganizationIdPatch
     */
    routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest
}

export interface OrganizationsApiV1OrganizationsPostRequest {
    /**
     * Request body for creating an organization
     * @type RoutesCreateOrganizationRequest
     * @memberof OrganizationsApiv1OrganizationsPost
     */
    routesCreateOrganizationRequest: RoutesCreateOrganizationRequest
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param param the request object
     */
    public v1OrganizationsGetWithHttpInfo(param: OrganizationsApiV1OrganizationsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationList>> {
        return this.api.v1OrganizationsGetWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param param the request object
     */
    public v1OrganizationsGet(param: OrganizationsApiV1OrganizationsGetRequest = {}, options?: ConfigurationOptions): Promise<ModelsOrganizationList> {
        return this.api.v1OrganizationsGet(param.limit, param.offset,  options).toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param param the request object
     */
    public v1OrganizationsOrganizationIdDeleteWithHttpInfo(param: OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OrganizationsOrganizationIdDeleteWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param param the request object
     */
    public v1OrganizationsOrganizationIdDelete(param: OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OrganizationsOrganizationIdDelete(param.organizationId,  options).toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param param the request object
     */
    public v1OrganizationsOrganizationIdPatchWithHttpInfo(param: OrganizationsApiV1OrganizationsOrganizationIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganization>> {
        return this.api.v1OrganizationsOrganizationIdPatchWithHttpInfo(param.organizationId, param.routesUpdateOrganizationRequest,  options).toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param param the request object
     */
    public v1OrganizationsOrganizationIdPatch(param: OrganizationsApiV1OrganizationsOrganizationIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsOrganization> {
        return this.api.v1OrganizationsOrganizationIdPatch(param.organizationId, param.routesUpdateOrganizationRequest,  options).toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param param the request object
     */
    public v1OrganizationsPostWithHttpInfo(param: OrganizationsApiV1OrganizationsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganization>> {
        return this.api.v1OrganizationsPostWithHttpInfo(param.routesCreateOrganizationRequest,  options).toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param param the request object
     */
    public v1OrganizationsPost(param: OrganizationsApiV1OrganizationsPostRequest, options?: ConfigurationOptions): Promise<ModelsOrganization> {
        return this.api.v1OrganizationsPost(param.routesCreateOrganizationRequest,  options).toPromise();
    }

}

import { ObservableOutputsApi } from "./ObservableAPI";
import { OutputsApiRequestFactory, OutputsApiResponseProcessor} from "../apis/OutputsApi";

export interface OutputsApiV1OutputsGetRequest {
}

export interface OutputsApiV1OutputsOutputTypeIdGetRequest {
    /**
     * Output type ID
     * Defaults to: undefined
     * @type string
     * @memberof OutputsApiv1OutputsOutputTypeIdGet
     */
    outputTypeId: string
}

export class ObjectOutputsApi {
    private api: ObservableOutputsApi

    public constructor(configuration: Configuration, requestFactory?: OutputsApiRequestFactory, responseProcessor?: OutputsApiResponseProcessor) {
        this.api = new ObservableOutputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List outputs
     * List outputs
     * @param param the request object
     */
    public v1OutputsGetWithHttpInfo(param: OutputsApiV1OutputsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<OutputsConnectorMeta>>> {
        return this.api.v1OutputsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List outputs
     * List outputs
     * @param param the request object
     */
    public v1OutputsGet(param: OutputsApiV1OutputsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<OutputsConnectorMeta>> {
        return this.api.v1OutputsGet( options).toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param param the request object
     */
    public v1OutputsOutputTypeIdGetWithHttpInfo(param: OutputsApiV1OutputsOutputTypeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        return this.api.v1OutputsOutputTypeIdGetWithHttpInfo(param.outputTypeId,  options).toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param param the request object
     */
    public v1OutputsOutputTypeIdGet(param: OutputsApiV1OutputsOutputTypeIdGetRequest, options?: ConfigurationOptions): Promise<ModelsConnectorMeta> {
        return this.api.v1OutputsOutputTypeIdGet(param.outputTypeId,  options).toPromise();
    }

}

import { ObservablePipelinesApi } from "./ObservableAPI";
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";

export interface PipelinesApiV1OrganizationIdPipelinesGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApiv1OrganizationIdPipelinesGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApiv1OrganizationIdPipelinesGet
     */
    offset?: number
}

export interface PipelinesApiV1OrganizationIdPipelinesPipelineIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdDelete
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdDelete
     */
    pipelineId: string
}

export interface PipelinesApiV1OrganizationIdPipelinesPipelineIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdGet
     */
    pipelineId: string
}

export interface PipelinesApiV1OrganizationIdPipelinesPipelineIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdPatch
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdPatch
     */
    pipelineId: string
    /**
     * Request body for updating a pipeline
     * @type RoutesUpdatePipelineRequest
     * @memberof PipelinesApiv1OrganizationIdPipelinesPipelineIdPatch
     */
    routesUpdatePipelineRequest: RoutesUpdatePipelineRequest
}

export interface PipelinesApiV2OrganizationIdPipelineSummaryGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelineSummaryGet
     */
    organizationId: string
    /**
     * ISO3339 start time, default 24 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelineSummaryGet
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelineSummaryGet
     */
    end?: string
}

export interface PipelinesApiV2OrganizationIdPipelinesGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesGet
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApiv2OrganizationIdPipelinesGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApiv2OrganizationIdPipelinesGet
     */
    offset?: number
}

export interface PipelinesApiV2OrganizationIdPipelinesPipelineIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdDelete
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdDelete
     */
    pipelineId: string
}

export interface PipelinesApiV2OrganizationIdPipelinesPipelineIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdGet
     */
    pipelineId: string
}

export interface PipelinesApiV2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    nodeId: string
    /**
     * Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    metric: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    end?: string
    /**
     * Resolution of the data, default 15m
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet
     */
    resolution?: string
}

export interface PipelinesApiV2OrganizationIdPipelinesPipelineIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdPatch
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdPatch
     */
    pipelineId: string
    /**
     * Request body for updating a pipeline
     * @type RoutesV2UpdatePipelineRequest
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdPatch
     */
    routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest
}

export interface PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusGet
     */
    pipelineId: string
    /**
     * Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusGet
     */
    metrics?: Array<string>
    /**
     * ISO3339 start time, default 24 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusGet
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusGet
     */
    end?: string
}

export interface PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusNodeIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     */
    nodeId: string
    /**
     * Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     */
    metrics?: Array<string>
    /**
     * ISO3339 start time, default 24 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPipelineIdStatusNodeIdGet
     */
    end?: string
}

export interface PipelinesApiV2OrganizationIdPipelinesPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesPost
     */
    organizationId: string
    /**
     * Request body for creating a pipeline
     * @type RoutesV2CreatePipelineRequest
     * @memberof PipelinesApiv2OrganizationIdPipelinesPost
     */
    routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest
}

export interface PipelinesApiV2OrganizationIdPipelinesStatusesGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesStatusesGet
     */
    organizationId: string
    /**
     * Maximum number of pipelines to return (default is 10)
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApiv2OrganizationIdPipelinesStatusesGet
     */
    limit?: number
    /**
     * Offset for pagination (default is 0)
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApiv2OrganizationIdPipelinesStatusesGet
     */
    offset?: number
    /**
     * Start time (RFC3339 format) for status metrics (default: 24 hours ago)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesStatusesGet
     */
    start?: string
    /**
     * End time (RFC3339 format) for status metrics (default: now)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesStatusesGet
     */
    end?: string
}

export class ObjectPipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public v1OrganizationIdPipelinesGetWithHttpInfo(param: PipelinesApiV1OrganizationIdPipelinesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        return this.api.v1OrganizationIdPipelinesGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public v1OrganizationIdPipelinesGet(param: PipelinesApiV1OrganizationIdPipelinesGetRequest, options?: ConfigurationOptions): Promise<ModelsPipelineList> {
        return this.api.v1OrganizationIdPipelinesGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(param: PipelinesApiV1OrganizationIdPipelinesPipelineIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public v1OrganizationIdPipelinesPipelineIdDelete(param: PipelinesApiV1OrganizationIdPipelinesPipelineIdDeleteRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v1OrganizationIdPipelinesPipelineIdDelete(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param param the request object
     */
    public v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(param: PipelinesApiV1OrganizationIdPipelinesPipelineIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        return this.api.v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param param the request object
     */
    public v1OrganizationIdPipelinesPipelineIdGet(param: PipelinesApiV1OrganizationIdPipelinesPipelineIdGetRequest, options?: ConfigurationOptions): Promise<ModelsPipeline> {
        return this.api.v1OrganizationIdPipelinesPipelineIdGet(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param param the request object
     */
    public v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(param: PipelinesApiV1OrganizationIdPipelinesPipelineIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        return this.api.v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(param.organizationId, param.pipelineId, param.routesUpdatePipelineRequest,  options).toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param param the request object
     */
    public v1OrganizationIdPipelinesPipelineIdPatch(param: PipelinesApiV1OrganizationIdPipelinesPipelineIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsPipeline> {
        return this.api.v1OrganizationIdPipelinesPipelineIdPatch(param.organizationId, param.pipelineId, param.routesUpdatePipelineRequest,  options).toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param param the request object
     */
    public v2OrganizationIdPipelineSummaryGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelineSummaryGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        return this.api.v2OrganizationIdPipelineSummaryGetWithHttpInfo(param.organizationId, param.start, param.end,  options).toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param param the request object
     */
    public v2OrganizationIdPipelineSummaryGet(param: PipelinesApiV2OrganizationIdPipelineSummaryGetRequest, options?: ConfigurationOptions): Promise<RoutesV2GetOrganizationSummaryResponse> {
        return this.api.v2OrganizationIdPipelineSummaryGet(param.organizationId, param.start, param.end,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public v2OrganizationIdPipelinesGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        return this.api.v2OrganizationIdPipelinesGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public v2OrganizationIdPipelinesGet(param: PipelinesApiV2OrganizationIdPipelinesGetRequest, options?: ConfigurationOptions): Promise<ModelsPipelineList> {
        return this.api.v2OrganizationIdPipelinesGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdDelete(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdDeleteRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v2OrganizationIdPipelinesPipelineIdDelete(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        return this.api.v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdGet(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdGetRequest, options?: ConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        return this.api.v2OrganizationIdPipelinesPipelineIdGet(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineNodeMetrics>> {
        return this.api.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetRequest, options?: ConfigurationOptions): Promise<ModelsPipelineNodeMetrics> {
        return this.api.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(param.organizationId, param.pipelineId, param.nodeId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        return this.api.v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(param.organizationId, param.pipelineId, param.routesV2UpdatePipelineRequest,  options).toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdPatch(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        return this.api.v2OrganizationIdPipelinesPipelineIdPatch(param.organizationId, param.pipelineId, param.routesV2UpdatePipelineRequest,  options).toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineStatus>> {
        return this.api.v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(param.organizationId, param.pipelineId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdStatusGet(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusGetRequest, options?: ConfigurationOptions): Promise<ModelsPipelineStatus> {
        return this.api.v2OrganizationIdPipelinesPipelineIdStatusGet(param.organizationId, param.pipelineId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusNodeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineNodeStatus>> {
        return this.api.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(param: PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusNodeIdGetRequest, options?: ConfigurationOptions): Promise<ModelsPipelineNodeStatus> {
        return this.api.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(param.organizationId, param.pipelineId, param.nodeId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPostWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        return this.api.v2OrganizationIdPipelinesPostWithHttpInfo(param.organizationId, param.routesV2CreatePipelineRequest,  options).toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param param the request object
     */
    public v2OrganizationIdPipelinesPost(param: PipelinesApiV2OrganizationIdPipelinesPostRequest, options?: ConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        return this.api.v2OrganizationIdPipelinesPost(param.organizationId, param.routesV2CreatePipelineRequest,  options).toPromise();
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param param the request object
     */
    public v2OrganizationIdPipelinesStatusesGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesStatusesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        return this.api.v2OrganizationIdPipelinesStatusesGetWithHttpInfo(param.organizationId, param.limit, param.offset, param.start, param.end,  options).toPromise();
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param param the request object
     */
    public v2OrganizationIdPipelinesStatusesGet(param: PipelinesApiV2OrganizationIdPipelinesStatusesGetRequest, options?: ConfigurationOptions): Promise<Array<RoutesV2PipelineWithStatus>> {
        return this.api.v2OrganizationIdPipelinesStatusesGet(param.organizationId, param.limit, param.offset, param.start, param.end,  options).toPromise();
    }

}

import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiV1OrganizationIdRolesGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesGet
     */
    organizationId: string
    /**
     * Limit the number of roles returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof RolesApiv1OrganizationIdRolesGet
     */
    limit?: number
    /**
     * Offset the roles returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof RolesApiv1OrganizationIdRolesGet
     */
    offset?: number
}

export interface RolesApiV1OrganizationIdRolesPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesPost
     */
    organizationId: string
    /**
     * Request body for creating a role
     * @type RoutesCreateRoleRequest
     * @memberof RolesApiv1OrganizationIdRolesPost
     */
    routesCreateRoleRequest: RoutesCreateRoleRequest
}

export interface RolesApiV1OrganizationIdRolesRoleIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesRoleIdDelete
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesRoleIdDelete
     */
    roleId: string
}

export interface RolesApiV1OrganizationIdRolesRoleIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesRoleIdGet
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesRoleIdGet
     */
    roleId: string
}

export interface RolesApiV1OrganizationIdRolesRoleIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesRoleIdPatch
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv1OrganizationIdRolesRoleIdPatch
     */
    roleId: string
    /**
     * Request body for updating a role
     * @type RoutesUpdateRoleRequest
     * @memberof RolesApiv1OrganizationIdRolesRoleIdPatch
     */
    routesUpdateRoleRequest: RoutesUpdateRoleRequest
}

export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List roles
     * List roles
     * @param param the request object
     */
    public v1OrganizationIdRolesGetWithHttpInfo(param: RolesApiV1OrganizationIdRolesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleList>> {
        return this.api.v1OrganizationIdRolesGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List roles
     * List roles
     * @param param the request object
     */
    public v1OrganizationIdRolesGet(param: RolesApiV1OrganizationIdRolesGetRequest, options?: ConfigurationOptions): Promise<ModelsRoleList> {
        return this.api.v1OrganizationIdRolesGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create role
     * Create role
     * @param param the request object
     */
    public v1OrganizationIdRolesPostWithHttpInfo(param: RolesApiV1OrganizationIdRolesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRole>> {
        return this.api.v1OrganizationIdRolesPostWithHttpInfo(param.organizationId, param.routesCreateRoleRequest,  options).toPromise();
    }

    /**
     * Create role
     * Create role
     * @param param the request object
     */
    public v1OrganizationIdRolesPost(param: RolesApiV1OrganizationIdRolesPostRequest, options?: ConfigurationOptions): Promise<ModelsRole> {
        return this.api.v1OrganizationIdRolesPost(param.organizationId, param.routesCreateRoleRequest,  options).toPromise();
    }

    /**
     * Delete role
     * Delete role
     * @param param the request object
     */
    public v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(param: RolesApiV1OrganizationIdRolesRoleIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Delete role
     * Delete role
     * @param param the request object
     */
    public v1OrganizationIdRolesRoleIdDelete(param: RolesApiV1OrganizationIdRolesRoleIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OrganizationIdRolesRoleIdDelete(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Get role
     * Get role
     * @param param the request object
     */
    public v1OrganizationIdRolesRoleIdGetWithHttpInfo(param: RolesApiV1OrganizationIdRolesRoleIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRole>> {
        return this.api.v1OrganizationIdRolesRoleIdGetWithHttpInfo(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Get role
     * Get role
     * @param param the request object
     */
    public v1OrganizationIdRolesRoleIdGet(param: RolesApiV1OrganizationIdRolesRoleIdGetRequest, options?: ConfigurationOptions): Promise<ModelsRole> {
        return this.api.v1OrganizationIdRolesRoleIdGet(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Update role
     * Update role
     * @param param the request object
     */
    public v1OrganizationIdRolesRoleIdPatchWithHttpInfo(param: RolesApiV1OrganizationIdRolesRoleIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRole>> {
        return this.api.v1OrganizationIdRolesRoleIdPatchWithHttpInfo(param.organizationId, param.roleId, param.routesUpdateRoleRequest,  options).toPromise();
    }

    /**
     * Update role
     * Update role
     * @param param the request object
     */
    public v1OrganizationIdRolesRoleIdPatch(param: RolesApiV1OrganizationIdRolesRoleIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsRole> {
        return this.api.v1OrganizationIdRolesRoleIdPatch(param.organizationId, param.roleId, param.routesUpdateRoleRequest,  options).toPromise();
    }

}

import { ObservableSandboxApi } from "./ObservableAPI";
import { SandboxApiRequestFactory, SandboxApiResponseProcessor} from "../apis/SandboxApi";

export interface SandboxApiV2SandboxTemplateGetRequest {
    /**
     * 
     * @type any
     * @memberof SandboxApiv2SandboxTemplateGet
     */
    body?: any
}

export interface SandboxApiV2SandboxTemplatePostRequest {
    /**
     * Record generation parameters
     * @type RoutesV2GenerateRecordRequest
     * @memberof SandboxApiv2SandboxTemplatePost
     */
    routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest
}

export interface SandboxApiV2SandboxTransformPostRequest {
    /**
     * Transform configuration and record
     * @type RoutesV2ApplyTransformationRequest
     * @memberof SandboxApiv2SandboxTransformPost
     */
    routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest
}

export class ObjectSandboxApi {
    private api: ObservableSandboxApi

    public constructor(configuration: Configuration, requestFactory?: SandboxApiRequestFactory, responseProcessor?: SandboxApiResponseProcessor) {
        this.api = new ObservableSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param param the request object
     */
    public v2SandboxTemplateGetWithHttpInfo(param: SandboxApiV2SandboxTemplateGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2ListTemplatesResponse>> {
        return this.api.v2SandboxTemplateGetWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param param the request object
     */
    public v2SandboxTemplateGet(param: SandboxApiV2SandboxTemplateGetRequest = {}, options?: ConfigurationOptions): Promise<RoutesV2ListTemplatesResponse> {
        return this.api.v2SandboxTemplateGet(param.body,  options).toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param param the request object
     */
    public v2SandboxTemplatePostWithHttpInfo(param: SandboxApiV2SandboxTemplatePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2GenerateRecordResponse>> {
        return this.api.v2SandboxTemplatePostWithHttpInfo(param.routesV2GenerateRecordRequest,  options).toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param param the request object
     */
    public v2SandboxTemplatePost(param: SandboxApiV2SandboxTemplatePostRequest, options?: ConfigurationOptions): Promise<RoutesV2GenerateRecordResponse> {
        return this.api.v2SandboxTemplatePost(param.routesV2GenerateRecordRequest,  options).toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param param the request object
     */
    public v2SandboxTransformPostWithHttpInfo(param: SandboxApiV2SandboxTransformPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        return this.api.v2SandboxTransformPostWithHttpInfo(param.routesV2ApplyTransformationRequest,  options).toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param param the request object
     */
    public v2SandboxTransformPost(param: SandboxApiV2SandboxTransformPostRequest, options?: ConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        return this.api.v2SandboxTransformPost(param.routesV2ApplyTransformationRequest,  options).toPromise();
    }

}

import { ObservableSecretsApi } from "./ObservableAPI";
import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi";

export interface SecretsApiV2OrganizationIdSecretsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsGet
     */
    organizationId: string
    /**
     * Limit number of results
     * Defaults to: undefined
     * @type number
     * @memberof SecretsApiv2OrganizationIdSecretsGet
     */
    limit?: number
    /**
     * Offset results
     * Defaults to: undefined
     * @type number
     * @memberof SecretsApiv2OrganizationIdSecretsGet
     */
    offset?: number
}

export interface SecretsApiV2OrganizationIdSecretsPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsPost
     */
    organizationId: string
    /**
     * Secret to create
     * @type RoutesV2CreateOrUpdateSecretRequest
     * @memberof SecretsApiv2OrganizationIdSecretsPost
     */
    routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest
}

export interface SecretsApiV2OrganizationIdSecretsSecretIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdDelete
     */
    organizationId: string
    /**
     * Secret ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdDelete
     */
    secretId: string
}

export interface SecretsApiV2OrganizationIdSecretsSecretIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdGet
     */
    organizationId: string
    /**
     * Secret ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdGet
     */
    secretId: string
}

export interface SecretsApiV2OrganizationIdSecretsSecretIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdPatch
     */
    organizationId: string
    /**
     * Secret ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdPatch
     */
    secretId: string
    /**
     * Secret updates
     * @type RoutesV2CreateOrUpdateSecretRequest
     * @memberof SecretsApiv2OrganizationIdSecretsSecretIdPatch
     */
    routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest
}

export class ObjectSecretsApi {
    private api: ObservableSecretsApi

    public constructor(configuration: Configuration, requestFactory?: SecretsApiRequestFactory, responseProcessor?: SecretsApiResponseProcessor) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param param the request object
     */
    public v2OrganizationIdSecretsGetWithHttpInfo(param: SecretsApiV2OrganizationIdSecretsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponentsList>> {
        return this.api.v2OrganizationIdSecretsGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param param the request object
     */
    public v2OrganizationIdSecretsGet(param: SecretsApiV2OrganizationIdSecretsGetRequest, options?: ConfigurationOptions): Promise<ModelsSecretWithComponentsList> {
        return this.api.v2OrganizationIdSecretsGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param param the request object
     */
    public v2OrganizationIdSecretsPostWithHttpInfo(param: SecretsApiV2OrganizationIdSecretsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        return this.api.v2OrganizationIdSecretsPostWithHttpInfo(param.organizationId, param.routesV2CreateOrUpdateSecretRequest,  options).toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param param the request object
     */
    public v2OrganizationIdSecretsPost(param: SecretsApiV2OrganizationIdSecretsPostRequest, options?: ConfigurationOptions): Promise<RoutesV2SecretResponse> {
        return this.api.v2OrganizationIdSecretsPost(param.organizationId, param.routesV2CreateOrUpdateSecretRequest,  options).toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param param the request object
     */
    public v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(param: SecretsApiV2OrganizationIdSecretsSecretIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param param the request object
     */
    public v2OrganizationIdSecretsSecretIdDelete(param: SecretsApiV2OrganizationIdSecretsSecretIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v2OrganizationIdSecretsSecretIdDelete(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param param the request object
     */
    public v2OrganizationIdSecretsSecretIdGetWithHttpInfo(param: SecretsApiV2OrganizationIdSecretsSecretIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponents>> {
        return this.api.v2OrganizationIdSecretsSecretIdGetWithHttpInfo(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param param the request object
     */
    public v2OrganizationIdSecretsSecretIdGet(param: SecretsApiV2OrganizationIdSecretsSecretIdGetRequest, options?: ConfigurationOptions): Promise<ModelsSecretWithComponents> {
        return this.api.v2OrganizationIdSecretsSecretIdGet(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param param the request object
     */
    public v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(param: SecretsApiV2OrganizationIdSecretsSecretIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        return this.api.v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(param.organizationId, param.secretId, param.routesV2CreateOrUpdateSecretRequest,  options).toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param param the request object
     */
    public v2OrganizationIdSecretsSecretIdPatch(param: SecretsApiV2OrganizationIdSecretsSecretIdPatchRequest, options?: ConfigurationOptions): Promise<RoutesV2SecretResponse> {
        return this.api.v2OrganizationIdSecretsSecretIdPatch(param.organizationId, param.secretId, param.routesV2CreateOrUpdateSecretRequest,  options).toPromise();
    }

}

import { ObservableTransformsApi } from "./ObservableAPI";
import { TransformsApiRequestFactory, TransformsApiResponseProcessor} from "../apis/TransformsApi";

export interface TransformsApiV1TransformsGetRequest {
    /**
     * 
     * @type any
     * @memberof TransformsApiv1TransformsGet
     */
    body?: any
}

export interface TransformsApiV1TransformsTransformTypeIdGetRequest {
    /**
     * Transform type ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsApiv1TransformsTransformTypeIdGet
     */
    transformTypeId: string
    /**
     * 
     * @type any
     * @memberof TransformsApiv1TransformsTransformTypeIdGet
     */
    body?: any
}

export class ObjectTransformsApi {
    private api: ObservableTransformsApi

    public constructor(configuration: Configuration, requestFactory?: TransformsApiRequestFactory, responseProcessor?: TransformsApiResponseProcessor) {
        this.api = new ObservableTransformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List transforms
     * List transforms
     * @param param the request object
     */
    public v1TransformsGetWithHttpInfo(param: TransformsApiV1TransformsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OperationInformation>> {
        return this.api.v1TransformsGetWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param param the request object
     */
    public v1TransformsGet(param: TransformsApiV1TransformsGetRequest = {}, options?: ConfigurationOptions): Promise<OperationInformation> {
        return this.api.v1TransformsGet(param.body,  options).toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param param the request object
     */
    public v1TransformsTransformTypeIdGetWithHttpInfo(param: TransformsApiV1TransformsTransformTypeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1TransformsTransformTypeIdGetWithHttpInfo(param.transformTypeId, param.body,  options).toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param param the request object
     */
    public v1TransformsTransformTypeIdGet(param: TransformsApiV1TransformsTransformTypeIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1TransformsTransformTypeIdGet(param.transformTypeId, param.body,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiV1UsersGetRequest {
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof UsersApiv1UsersGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof UsersApiv1UsersGet
     */
    offset?: number
}

export interface UsersApiV1UsersPostRequest {
    /**
     * 
     * @type any
     * @memberof UsersApiv1UsersPost
     */
    body?: any
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List users
     * List users
     * @param param the request object
     */
    public v1UsersGetWithHttpInfo(param: UsersApiV1UsersGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsUserList>> {
        return this.api.v1UsersGetWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * List users
     * List users
     * @param param the request object
     */
    public v1UsersGet(param: UsersApiV1UsersGetRequest = {}, options?: ConfigurationOptions): Promise<ModelsUserList> {
        return this.api.v1UsersGet(param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create user
     * Create user
     * @param param the request object
     */
    public v1UsersPostWithHttpInfo(param: UsersApiV1UsersPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsUser>> {
        return this.api.v1UsersPostWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create user
     * Create user
     * @param param the request object
     */
    public v1UsersPost(param: UsersApiV1UsersPostRequest = {}, options?: ConfigurationOptions): Promise<ModelsUser> {
        return this.api.v1UsersPost(param.body,  options).toPromise();
    }

}
