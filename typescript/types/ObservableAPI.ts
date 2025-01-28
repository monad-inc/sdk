import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ActorsInfoSecretsConfig } from '../models/ActorsInfoSecretsConfig';
import { ActorsInfoSettingsConfig } from '../models/ActorsInfoSettingsConfig';
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
import { BoxUsersSecretsConfig } from '../models/BoxUsersSecretsConfig';
import { BoxUsersSettingsConfig } from '../models/BoxUsersSettingsConfig';
import { CloudConfigurationFindingsSecretsConfig } from '../models/CloudConfigurationFindingsSecretsConfig';
import { CloudConfigurationFindingsSettingsConfig } from '../models/CloudConfigurationFindingsSettingsConfig';
import { CloudLogsSecretsConfig } from '../models/CloudLogsSecretsConfig';
import { CloudLogsSettingsConfig } from '../models/CloudLogsSettingsConfig';
import { CloudResourceInventorySecretsConfig } from '../models/CloudResourceInventorySecretsConfig';
import { CloudResourceInventorySettingsConfig } from '../models/CloudResourceInventorySettingsConfig';
import { CloudtrailSettingsConfig } from '../models/CloudtrailSettingsConfig';
import { ConditionInfo } from '../models/ConditionInfo';
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
import { ElasticsearchSecretsConfig } from '../models/ElasticsearchSecretsConfig';
import { ElasticsearchSettingsConfig } from '../models/ElasticsearchSettingsConfig';
import { EntraIdSecretsConfig } from '../models/EntraIdSecretsConfig';
import { EntraIdSettingsConfig } from '../models/EntraIdSettingsConfig';
import { EventSecretsConfig } from '../models/EventSecretsConfig';
import { EventSettingsConfig } from '../models/EventSettingsConfig';
import { EventsLogsSecretsConfig } from '../models/EventsLogsSecretsConfig';
import { EventsLogsSettingsConfig } from '../models/EventsLogsSettingsConfig';
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { HttpSecretsConfig } from '../models/HttpSecretsConfig';
import { HttpSettingsConfig } from '../models/HttpSettingsConfig';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
import { JsonJsonFormatter } from '../models/JsonJsonFormatter';
import { LogAnalyticsQuerySecretsConfig } from '../models/LogAnalyticsQuerySecretsConfig';
import { LogAnalyticsQuerySettingsConfig } from '../models/LogAnalyticsQuerySettingsConfig';
import { LoginActivitySecretsConfig } from '../models/LoginActivitySecretsConfig';
import { LoginActivitySettingsConfig } from '../models/LoginActivitySettingsConfig';
import { LoginSessionsSecretsConfig } from '../models/LoginSessionsSecretsConfig';
import { LoginSessionsSettingsConfig } from '../models/LoginSessionsSettingsConfig';
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
import { OauthActivitySecretsConfig } from '../models/OauthActivitySecretsConfig';
import { OauthActivitySettingsConfig } from '../models/OauthActivitySettingsConfig';
import { OpensearchSecretsConfig } from '../models/OpensearchSecretsConfig';
import { OpensearchSettingsConfig } from '../models/OpensearchSettingsConfig';
import { OperationInformation } from '../models/OperationInformation';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
import { ParquetParquetFormatter } from '../models/ParquetParquetFormatter';
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
import { RoutesV2BulkCreateInputRequest } from '../models/RoutesV2BulkCreateInputRequest';
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
import { V1OrganizationIdInputsBulkPost400Response } from '../models/V1OrganizationIdInputsBulkPost400Response';
import { V1OrganizationIdInputsPost400Response } from '../models/V1OrganizationIdInputsPost400Response';
import { VulnerabilitiesSecretsConfig } from '../models/VulnerabilitiesSecretsConfig';
import { VulnerabilitiesSettingsConfig } from '../models/VulnerabilitiesSettingsConfig';
import { VulnerabilityFindingsSecretsConfig } from '../models/VulnerabilityFindingsSecretsConfig';
import { VulnerabilityFindingsSettingsConfig } from '../models/VulnerabilityFindingsSettingsConfig';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public v1LoginCallbackGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1LoginCallbackGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LoginCallbackGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public v1LoginCallbackGet(_options?: Configuration): Observable<string> {
        return this.v1LoginCallbackGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Redirects the user to Authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public v1LoginGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1LoginGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LoginGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Redirects the user to Authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public v1LoginGet(_options?: Configuration): Observable<void> {
        return this.v1LoginGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public v1LoginResendVerificationPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1LoginResendVerificationPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LoginResendVerificationPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public v1LoginResendVerificationPost(_options?: Configuration): Observable<string> {
        return this.v1LoginResendVerificationPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieve an authentication token from the Authentication service using username and password.
     * Get Authentication token
     * @param auth0LoginRequest Login request
     */
    public v1LoginTokenPostWithHttpInfo(auth0LoginRequest: Auth0LoginRequest, _options?: Configuration): Observable<HttpInfo<Auth0Auth0TokenResponse>> {
        const requestContextPromise = this.requestFactory.v1LoginTokenPost(auth0LoginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1LoginTokenPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an authentication token from the Authentication service using username and password.
     * Get Authentication token
     * @param auth0LoginRequest Login request
     */
    public v1LoginTokenPost(auth0LoginRequest: Auth0LoginRequest, _options?: Configuration): Observable<Auth0Auth0TokenResponse> {
        return this.v1LoginTokenPostWithHttpInfo(auth0LoginRequest, _options).pipe(map((apiResponse: HttpInfo<Auth0Auth0TokenResponse>) => apiResponse.data));
    }

}

import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";
export class ObservableConditionsApi {
    private requestFactory: ConditionsApiRequestFactory;
    private responseProcessor: ConditionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConditionsApiRequestFactory,
        responseProcessor?: ConditionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConditionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConditionsApiResponseProcessor();
    }

    /**
     * List conditions
     * List conditions
     * @param [body]
     */
    public v2ConditionsGetWithHttpInfo(body?: any, _options?: Configuration): Observable<HttpInfo<Array<ConditionInfo>>> {
        const requestContextPromise = this.requestFactory.v2ConditionsGet(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2ConditionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List conditions
     * List conditions
     * @param [body]
     */
    public v2ConditionsGet(body?: any, _options?: Configuration): Observable<Array<ConditionInfo>> {
        return this.v2ConditionsGetWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<Array<ConditionInfo>>) => apiResponse.data));
    }

}

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";
export class ObservableDataApi {
    private requestFactory: DataApiRequestFactory;
    private responseProcessor: DataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataApiResponseProcessor();
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public v1OrganizationIdDataNodeIdGetWithHttpInfo(organizationId: string, nodeId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdDataNodeIdGet(organizationId, nodeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdDataNodeIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public v1OrganizationIdDataNodeIdGet(organizationId: string, nodeId: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdDataNodeIdGetWithHttpInfo(organizationId, nodeId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { InputsApiRequestFactory, InputsApiResponseProcessor} from "../apis/InputsApi";
export class ObservableInputsApi {
    private requestFactory: InputsApiRequestFactory;
    private responseProcessor: InputsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InputsApiRequestFactory,
        responseProcessor?: InputsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InputsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InputsApiResponseProcessor();
    }

    /**
     * List inputs
     * List inputs
     */
    public v1InputsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<InputsConnectorMeta>>> {
        const requestContextPromise = this.requestFactory.v1InputsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InputsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List inputs
     * List inputs
     */
    public v1InputsGet(_options?: Configuration): Observable<Array<InputsConnectorMeta>> {
        return this.v1InputsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<InputsConnectorMeta>>) => apiResponse.data));
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public v1InputsInputTypeIdGetWithHttpInfo(inputTypeId: string, _options?: Configuration): Observable<HttpInfo<ModelsConnectorMeta>> {
        const requestContextPromise = this.requestFactory.v1InputsInputTypeIdGet(inputTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InputsInputTypeIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public v1InputsInputTypeIdGet(inputTypeId: string, _options?: Configuration): Observable<ModelsConnectorMeta> {
        return this.v1InputsInputTypeIdGetWithHttpInfo(inputTypeId, _options).pipe(map((apiResponse: HttpInfo<ModelsConnectorMeta>) => apiResponse.data));
    }

}

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class ObservableLogsApi {
    private requestFactory: LogsApiRequestFactory;
    private responseProcessor: LogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApiResponseProcessor();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsApiGetWithHttpInfo(organizationId: string, since?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdLogsApiGet(organizationId, since, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdLogsApiGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsApiGet(organizationId: string, since?: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdLogsApiGetWithHttpInfo(organizationId, since, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsGetWithHttpInfo(organizationId: string, since?: string, last?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdLogsGet(organizationId, since, last, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdLogsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsGet(organizationId: string, since?: string, last?: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdLogsGetWithHttpInfo(organizationId, since, last, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsPipelinesGetWithHttpInfo(organizationId: string, since?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdLogsPipelinesGet(organizationId, since, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdLogsPipelinesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public v1OrganizationIdLogsPipelinesGet(organizationId: string, since?: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdLogsPipelinesGetWithHttpInfo(organizationId, since, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId, pipelineId, since, last, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdLogsPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, since, last, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId, pipelineId, nodeId, since, last, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(rsp)));
            }));
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
    public v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, since, last, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { OauthApiRequestFactory, OauthApiResponseProcessor} from "../apis/OauthApi";
export class ObservableOauthApi {
    private requestFactory: OauthApiRequestFactory;
    private responseProcessor: OauthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OauthApiRequestFactory,
        responseProcessor?: OauthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OauthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OauthApiResponseProcessor();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public v1OauthTypeIdCallbackGetWithHttpInfo(typeId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OauthTypeIdCallbackGet(typeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OauthTypeIdCallbackGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public v1OauthTypeIdCallbackGet(typeId: string, _options?: Configuration): Observable<any> {
        return this.v1OauthTypeIdCallbackGetWithHttpInfo(typeId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId: string, organizationId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OauthTypeIdOrganizationIdGet(typeId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OauthTypeIdOrganizationIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public v1OauthTypeIdOrganizationIdGet(typeId: string, organizationId: string, _options?: Configuration): Observable<any> {
        return this.v1OauthTypeIdOrganizationIdGetWithHttpInfo(typeId, organizationId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { OrganizationApiKeysApiRequestFactory, OrganizationApiKeysApiResponseProcessor} from "../apis/OrganizationApiKeysApi";
export class ObservableOrganizationApiKeysApi {
    private requestFactory: OrganizationApiKeysApiRequestFactory;
    private responseProcessor: OrganizationApiKeysApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationApiKeysApiRequestFactory,
        responseProcessor?: OrganizationApiKeysApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationApiKeysApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationApiKeysApiResponseProcessor();
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(organizationId: string, apiKeyId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdApiKeysApiKeyIdDelete(organizationId, apiKeyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdDelete(organizationId: string, apiKeyId: string, _options?: Configuration): Observable<string> {
        return this.v2OrganizationIdApiKeysApiKeyIdDeleteWithHttpInfo(organizationId, apiKeyId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(organizationId: string, apiKeyId: string, _options?: Configuration): Observable<HttpInfo<ModelsAPIKey>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdApiKeysApiKeyIdGet(organizationId, apiKeyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdGet(organizationId: string, apiKeyId: string, _options?: Configuration): Observable<ModelsAPIKey> {
        return this.v2OrganizationIdApiKeysApiKeyIdGetWithHttpInfo(organizationId, apiKeyId, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKey>) => apiResponse.data));
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: Configuration): Observable<HttpInfo<ModelsAPIKey>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdApiKeysApiKeyIdPatch(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public v2OrganizationIdApiKeysApiKeyIdPatch(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: Configuration): Observable<ModelsAPIKey> {
        return this.v2OrganizationIdApiKeysApiKeyIdPatchWithHttpInfo(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKey>) => apiResponse.data));
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(organizationId: string, apiKeyId: string, _options?: Configuration): Observable<HttpInfo<ModelsAPIKeyWithToken>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId, apiKeyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId: string, apiKeyId: string, _options?: Configuration): Observable<ModelsAPIKeyWithToken> {
        return this.v2OrganizationIdApiKeysApiKeyIdRegeneratePostWithHttpInfo(organizationId, apiKeyId, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKeyWithToken>) => apiResponse.data));
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdApiKeysGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsAPIKeyList>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdApiKeysGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdApiKeysGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdApiKeysGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsAPIKeyList> {
        return this.v2OrganizationIdApiKeysGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKeyList>) => apiResponse.data));
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public v2OrganizationIdApiKeysPostWithHttpInfo(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: Configuration): Observable<HttpInfo<ModelsAPIKeyWithToken>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdApiKeysPost(organizationId, routesV2CreateAPIKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdApiKeysPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public v2OrganizationIdApiKeysPost(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: Configuration): Observable<ModelsAPIKeyWithToken> {
        return this.v2OrganizationIdApiKeysPostWithHttpInfo(organizationId, routesV2CreateAPIKeyRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKeyWithToken>) => apiResponse.data));
    }

}

import { OrganizationInputsApiRequestFactory, OrganizationInputsApiResponseProcessor} from "../apis/OrganizationInputsApi";
export class ObservableOrganizationInputsApi {
    private requestFactory: OrganizationInputsApiRequestFactory;
    private responseProcessor: OrganizationInputsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationInputsApiRequestFactory,
        responseProcessor?: OrganizationInputsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationInputsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationInputsApiResponseProcessor();
    }

    /**
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesBulkCreateInputRequest Request body for creating multiple inputs
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsBulkPostWithHttpInfo(organizationId: string, routesBulkCreateInputRequest: RoutesBulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<Array<ModelsInput>>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInputsBulkPost(organizationId, routesBulkCreateInputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInputsBulkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesBulkCreateInputRequest Request body for creating multiple inputs
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsBulkPost(organizationId: string, routesBulkCreateInputRequest: RoutesBulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<Array<ModelsInput>> {
        return this.v1OrganizationIdInputsBulkPostWithHttpInfo(organizationId, routesBulkCreateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<Array<ModelsInput>>) => apiResponse.data));
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationIdInputsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsInputList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInputsGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInputsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List inputs
     * List inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationIdInputsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsInputList> {
        return this.v1OrganizationIdInputsGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsInputList>) => apiResponse.data));
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdDeleteWithHttpInfo(organizationId: string, inputId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInputsInputIdDelete(organizationId, inputId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInputsInputIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdDelete(organizationId: string, inputId: string, _options?: Configuration): Observable<any> {
        return this.v1OrganizationIdInputsInputIdDeleteWithHttpInfo(organizationId, inputId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdGetWithHttpInfo(organizationId: string, inputId: string, _options?: Configuration): Observable<HttpInfo<RoutesGetInputResponse>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInputsInputIdGet(organizationId, inputId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInputsInputIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get input
     * Get input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public v1OrganizationIdInputsInputIdGet(organizationId: string, inputId: string, _options?: Configuration): Observable<RoutesGetInputResponse> {
        return this.v1OrganizationIdInputsInputIdGetWithHttpInfo(organizationId, inputId, _options).pipe(map((apiResponse: HttpInfo<RoutesGetInputResponse>) => apiResponse.data));
    }

    /**
     * Update input
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesUpdateInputRequest Request body for updating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId: string, inputId: string, routesUpdateInputRequest: RoutesUpdateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<ModelsInput>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInputsInputIdPatch(organizationId, inputId, routesUpdateInputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInputsInputIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update input
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesUpdateInputRequest Request body for updating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesUpdateInputRequest: RoutesUpdateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<ModelsInput> {
        return this.v1OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId, inputId, routesUpdateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
    }

    /**
     * Create input
     * Create input
     * @param organizationId Organization ID
     * @param routesCreateInputRequest Request body for creating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsPostWithHttpInfo(organizationId: string, routesCreateInputRequest: RoutesCreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<ModelsInput>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInputsPost(organizationId, routesCreateInputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInputsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create input
     * Create input
     * @param organizationId Organization ID
     * @param routesCreateInputRequest Request body for creating an input
     * @param [testConnection] Test connection before creating the input
     */
    public v1OrganizationIdInputsPost(organizationId: string, routesCreateInputRequest: RoutesCreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<ModelsInput> {
        return this.v1OrganizationIdInputsPostWithHttpInfo(organizationId, routesCreateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
    }

    /**
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesV2BulkCreateInputRequest Request body for creating multiple inputs
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsBulkPostWithHttpInfo(organizationId: string, routesV2BulkCreateInputRequest: RoutesV2BulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<Array<ModelsInput>>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdInputsBulkPost(organizationId, routesV2BulkCreateInputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdInputsBulkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create multiple inputs in a single request
     * Bulk create inputs
     * @param organizationId Organization ID
     * @param routesV2BulkCreateInputRequest Request body for creating multiple inputs
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsBulkPost(organizationId: string, routesV2BulkCreateInputRequest: RoutesV2BulkCreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<Array<ModelsInput>> {
        return this.v2OrganizationIdInputsBulkPostWithHttpInfo(organizationId, routesV2BulkCreateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<Array<ModelsInput>>) => apiResponse.data));
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2UpdateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<ModelsInput>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdInputsInputIdPatch(organizationId, inputId, routesV2UpdateInputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdInputsInputIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2UpdateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsInputIdPatch(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<ModelsInput> {
        return this.v2OrganizationIdInputsInputIdPatchWithHttpInfo(organizationId, inputId, routesV2UpdateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsPostWithHttpInfo(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<ModelsInput>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdInputsPost(organizationId, routesV2CreateInputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdInputsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsPost(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: Configuration): Observable<ModelsInput> {
        return this.v2OrganizationIdInputsPostWithHttpInfo(organizationId, routesV2CreateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public v2OrganizationIdInputsTestConnectionPostWithHttpInfo(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: Configuration): Observable<HttpInfo<RoutesV2SuccessResponse>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdInputsTestConnectionPost(organizationId, routesV2TestInputConnectionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdInputsTestConnectionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public v2OrganizationIdInputsTestConnectionPost(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: Configuration): Observable<RoutesV2SuccessResponse> {
        return this.v2OrganizationIdInputsTestConnectionPostWithHttpInfo(organizationId, routesV2TestInputConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SuccessResponse>) => apiResponse.data));
    }

}

import { OrganizationInvitesApiRequestFactory, OrganizationInvitesApiResponseProcessor} from "../apis/OrganizationInvitesApi";
export class ObservableOrganizationInvitesApi {
    private requestFactory: OrganizationInvitesApiRequestFactory;
    private responseProcessor: OrganizationInvitesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationInvitesApiRequestFactory,
        responseProcessor?: OrganizationInvitesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationInvitesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationInvitesApiResponseProcessor();
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public v1OrganizationIdInvitesPostWithHttpInfo(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdInvitesPost(organizationId, routesInviteUserToOrganizationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdInvitesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public v1OrganizationIdInvitesPost(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdInvitesPostWithHttpInfo(organizationId, routesInviteUserToOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { OrganizationOutputsApiRequestFactory, OrganizationOutputsApiResponseProcessor} from "../apis/OrganizationOutputsApi";
export class ObservableOrganizationOutputsApi {
    private requestFactory: OrganizationOutputsApiRequestFactory;
    private responseProcessor: OrganizationOutputsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationOutputsApiRequestFactory,
        responseProcessor?: OrganizationOutputsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationOutputsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationOutputsApiResponseProcessor();
    }

    /**
     * List outputs
     * List outputs
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdOutputsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsOutputList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdOutputsGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdOutputsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List outputs
     * List outputs
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdOutputsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsOutputList> {
        return this.v1OrganizationIdOutputsGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsOutputList>) => apiResponse.data));
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(organizationId: string, outputId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdOutputsOutputIdDelete(organizationId, outputId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdDelete(organizationId: string, outputId: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdOutputsOutputIdDeleteWithHttpInfo(organizationId, outputId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdGetWithHttpInfo(organizationId: string, outputId: string, _options?: Configuration): Observable<HttpInfo<RoutesGetOutputResponse>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdOutputsOutputIdGet(organizationId, outputId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdOutputsOutputIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get output
     * Get output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public v1OrganizationIdOutputsOutputIdGet(organizationId: string, outputId: string, _options?: Configuration): Observable<RoutesGetOutputResponse> {
        return this.v1OrganizationIdOutputsOutputIdGetWithHttpInfo(organizationId, outputId, _options).pipe(map((apiResponse: HttpInfo<RoutesGetOutputResponse>) => apiResponse.data));
    }

    /**
     * Update output
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesUpdateOutputRequest Request body for updating an output
     */
    public v1OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId: string, outputId: string, routesUpdateOutputRequest: RoutesUpdateOutputRequest, _options?: Configuration): Observable<HttpInfo<ModelsOutput>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesUpdateOutputRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdOutputsOutputIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update output
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesUpdateOutputRequest Request body for updating an output
     */
    public v1OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesUpdateOutputRequest: RoutesUpdateOutputRequest, _options?: Configuration): Observable<ModelsOutput> {
        return this.v1OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId, outputId, routesUpdateOutputRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
    }

    /**
     * Create output
     * Create output
     * @param organizationId Organization ID
     * @param routesCreateOutputRequest Request body for creating an output
     */
    public v1OrganizationIdOutputsPostWithHttpInfo(organizationId: string, routesCreateOutputRequest: RoutesCreateOutputRequest, _options?: Configuration): Observable<HttpInfo<ModelsOutput>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdOutputsPost(organizationId, routesCreateOutputRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdOutputsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create output
     * Create output
     * @param organizationId Organization ID
     * @param routesCreateOutputRequest Request body for creating an output
     */
    public v1OrganizationIdOutputsPost(organizationId: string, routesCreateOutputRequest: RoutesCreateOutputRequest, _options?: Configuration): Observable<ModelsOutput> {
        return this.v1OrganizationIdOutputsPostWithHttpInfo(organizationId, routesCreateOutputRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2UpdateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<ModelsOutput>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2UpdateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsOutputIdPatch(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: Configuration): Observable<ModelsOutput> {
        return this.v2OrganizationIdOutputsOutputIdPatchWithHttpInfo(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsPostWithHttpInfo(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: Configuration): Observable<HttpInfo<ModelsOutput>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdOutputsPost(organizationId, routesV2CreateOutputRequest, testConnection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdOutputsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsPost(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: Configuration): Observable<ModelsOutput> {
        return this.v2OrganizationIdOutputsPostWithHttpInfo(organizationId, routesV2CreateOutputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: Configuration): Observable<HttpInfo<RoutesV2SuccessResponse>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdOutputsTestConnectionPost(organizationId, routesV2TestOutputConnectionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public v2OrganizationIdOutputsTestConnectionPost(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: Configuration): Observable<RoutesV2SuccessResponse> {
        return this.v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(organizationId, routesV2TestOutputConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SuccessResponse>) => apiResponse.data));
    }

}

import { OrganizationQuotasApiRequestFactory, OrganizationQuotasApiResponseProcessor} from "../apis/OrganizationQuotasApi";
export class ObservableOrganizationQuotasApi {
    private requestFactory: OrganizationQuotasApiRequestFactory;
    private responseProcessor: OrganizationQuotasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationQuotasApiRequestFactory,
        responseProcessor?: OrganizationQuotasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationQuotasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationQuotasApiResponseProcessor();
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [body]
     */
    public v2OrganizationIdQuotasGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, body?: any, _options?: Configuration): Observable<HttpInfo<ModelsQuotaList>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdQuotasGet(organizationId, limit, offset, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdQuotasGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [body]
     */
    public v2OrganizationIdQuotasGet(organizationId: string, limit?: number, offset?: number, body?: any, _options?: Configuration): Observable<ModelsQuotaList> {
        return this.v2OrganizationIdQuotasGetWithHttpInfo(organizationId, limit, offset, body, _options).pipe(map((apiResponse: HttpInfo<ModelsQuotaList>) => apiResponse.data));
    }

}

import { OrganizationTransformsApiRequestFactory, OrganizationTransformsApiResponseProcessor} from "../apis/OrganizationTransformsApi";
export class ObservableOrganizationTransformsApi {
    private requestFactory: OrganizationTransformsApiRequestFactory;
    private responseProcessor: OrganizationTransformsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationTransformsApiRequestFactory,
        responseProcessor?: OrganizationTransformsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationTransformsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationTransformsApiResponseProcessor();
    }

    /**
     * List transforms
     * List transforms
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdTransformsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsTransformList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdTransformsGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdTransformsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transforms
     * List transforms
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdTransformsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsTransformList> {
        return this.v1OrganizationIdTransformsGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsTransformList>) => apiResponse.data));
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public v1OrganizationIdTransformsPostWithHttpInfo(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: Configuration): Observable<HttpInfo<ModelsTransform>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdTransformsPost(organizationId, routesCreateTransformRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdTransformsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public v1OrganizationIdTransformsPost(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: Configuration): Observable<ModelsTransform> {
        return this.v1OrganizationIdTransformsPostWithHttpInfo(organizationId, routesCreateTransformRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsTransform>) => apiResponse.data));
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(organizationId: string, transformId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdTransformsTransformIdDelete(organizationId, transformId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public v1OrganizationIdTransformsTransformIdDelete(organizationId: string, transformId: string, _options?: Configuration): Observable<any> {
        return this.v1OrganizationIdTransformsTransformIdDeleteWithHttpInfo(organizationId, transformId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public v1OrganizationIdTransformsTransformIdGetWithHttpInfo(transformId: string, organizationId: string, _options?: Configuration): Observable<HttpInfo<RoutesGetTransformResponse>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdTransformsTransformIdGet(transformId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdTransformsTransformIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public v1OrganizationIdTransformsTransformIdGet(transformId: string, organizationId: string, _options?: Configuration): Observable<RoutesGetTransformResponse> {
        return this.v1OrganizationIdTransformsTransformIdGetWithHttpInfo(transformId, organizationId, _options).pipe(map((apiResponse: HttpInfo<RoutesGetTransformResponse>) => apiResponse.data));
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: Configuration): Observable<HttpInfo<ModelsTransform>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdTransformsTransformIdPatch(organizationId, transformId, routesUpdateTransformRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public v1OrganizationIdTransformsTransformIdPatch(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: Configuration): Observable<ModelsTransform> {
        return this.v1OrganizationIdTransformsTransformIdPatchWithHttpInfo(organizationId, transformId, routesUpdateTransformRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsTransform>) => apiResponse.data));
    }

}

import { OrganizationUsersApiRequestFactory, OrganizationUsersApiResponseProcessor} from "../apis/OrganizationUsersApi";
export class ObservableOrganizationUsersApi {
    private requestFactory: OrganizationUsersApiRequestFactory;
    private responseProcessor: OrganizationUsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationUsersApiRequestFactory,
        responseProcessor?: OrganizationUsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationUsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationUsersApiResponseProcessor();
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdUsersGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsOrganizationUserList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdUsersGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdUsersGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsOrganizationUserList> {
        return this.v1OrganizationIdUsersGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationUserList>) => apiResponse.data));
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public v1OrganizationIdUsersPostWithHttpInfo(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: Configuration): Observable<HttpInfo<ModelsOrganizationUser>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdUsersPost(organizationId, routesAddUserToOrganizationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public v1OrganizationIdUsersPost(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: Configuration): Observable<ModelsOrganizationUser> {
        return this.v1OrganizationIdUsersPostWithHttpInfo(organizationId, routesAddUserToOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationUser>) => apiResponse.data));
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId: string, userId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdUsersUserIdDelete(organizationId, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdUsersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public v1OrganizationIdUsersUserIdDelete(organizationId: string, userId: string, _options?: Configuration): Observable<any> {
        return this.v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId, userId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public v1OrganizationIdUsersUserIdPatchWithHttpInfo(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: Configuration): Observable<HttpInfo<ModelsOrganizationUser>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdUsersUserIdPatch(organizationId, userId, routesUpdateUserInOrganizationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdUsersUserIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public v1OrganizationIdUsersUserIdPatch(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: Configuration): Observable<ModelsOrganizationUser> {
        return this.v1OrganizationIdUsersUserIdPatchWithHttpInfo(organizationId, userId, routesUpdateUserInOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationUser>) => apiResponse.data));
    }

}

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class ObservableOrganizationsApi {
    private requestFactory: OrganizationsApiRequestFactory;
    private responseProcessor: OrganizationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationsApiResponseProcessor();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationsGetWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsOrganizationList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationsGet(limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public v1OrganizationsGet(limit?: number, offset?: number, _options?: Configuration): Observable<ModelsOrganizationList> {
        return this.v1OrganizationsGetWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationList>) => apiResponse.data));
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public v1OrganizationsOrganizationIdDeleteWithHttpInfo(organizationId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OrganizationsOrganizationIdDelete(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationsOrganizationIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public v1OrganizationsOrganizationIdDelete(organizationId: string, _options?: Configuration): Observable<any> {
        return this.v1OrganizationsOrganizationIdDeleteWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: Configuration): Observable<HttpInfo<ModelsOrganization>> {
        const requestContextPromise = this.requestFactory.v1OrganizationsOrganizationIdPatch(organizationId, routesUpdateOrganizationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationsOrganizationIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public v1OrganizationsOrganizationIdPatch(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: Configuration): Observable<ModelsOrganization> {
        return this.v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId, routesUpdateOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganization>) => apiResponse.data));
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: Configuration): Observable<HttpInfo<ModelsOrganization>> {
        const requestContextPromise = this.requestFactory.v1OrganizationsPost(routesCreateOrganizationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPost(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: Configuration): Observable<ModelsOrganization> {
        return this.v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganization>) => apiResponse.data));
    }

}

import { OutputsApiRequestFactory, OutputsApiResponseProcessor} from "../apis/OutputsApi";
export class ObservableOutputsApi {
    private requestFactory: OutputsApiRequestFactory;
    private responseProcessor: OutputsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OutputsApiRequestFactory,
        responseProcessor?: OutputsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OutputsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OutputsApiResponseProcessor();
    }

    /**
     * List outputs
     * List outputs
     */
    public v1OutputsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<OutputsConnectorMeta>>> {
        const requestContextPromise = this.requestFactory.v1OutputsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutputsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List outputs
     * List outputs
     */
    public v1OutputsGet(_options?: Configuration): Observable<Array<OutputsConnectorMeta>> {
        return this.v1OutputsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<OutputsConnectorMeta>>) => apiResponse.data));
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public v1OutputsOutputTypeIdGetWithHttpInfo(outputTypeId: string, _options?: Configuration): Observable<HttpInfo<ModelsConnectorMeta>> {
        const requestContextPromise = this.requestFactory.v1OutputsOutputTypeIdGet(outputTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OutputsOutputTypeIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public v1OutputsOutputTypeIdGet(outputTypeId: string, _options?: Configuration): Observable<ModelsConnectorMeta> {
        return this.v1OutputsOutputTypeIdGetWithHttpInfo(outputTypeId, _options).pipe(map((apiResponse: HttpInfo<ModelsConnectorMeta>) => apiResponse.data));
    }

}

import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";
export class ObservablePipelinesApi {
    private requestFactory: PipelinesApiRequestFactory;
    private responseProcessor: PipelinesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelinesApiRequestFactory,
        responseProcessor?: PipelinesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelinesApiResponseProcessor();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdPipelinesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsPipelineList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdPipelinesGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdPipelinesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsPipelineList> {
        return this.v1OrganizationIdPipelinesGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineList>) => apiResponse.data));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: Configuration): Observable<string> {
        return this.v1OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<ModelsPipeline>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v1OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: Configuration): Observable<ModelsPipeline> {
        return this.v1OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsPipeline>) => apiResponse.data));
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: Configuration): Observable<HttpInfo<ModelsPipeline>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesUpdatePipelineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public v1OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: Configuration): Observable<ModelsPipeline> {
        return this.v1OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId, pipelineId, routesUpdatePipelineRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsPipeline>) => apiResponse.data));
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelineSummaryGetWithHttpInfo(organizationId: string, start?: string, end?: string, _options?: Configuration): Observable<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelineSummaryGet(organizationId, start, end, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelineSummaryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public v2OrganizationIdPipelineSummaryGet(organizationId: string, start?: string, end?: string, _options?: Configuration): Observable<RoutesV2GetOrganizationSummaryResponse> {
        return this.v2OrganizationIdPipelineSummaryGetWithHttpInfo(organizationId, start, end, _options).pipe(map((apiResponse: HttpInfo<RoutesV2GetOrganizationSummaryResponse>) => apiResponse.data));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdPipelinesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsPipelineList>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v2OrganizationIdPipelinesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsPipelineList> {
        return this.v2OrganizationIdPipelinesGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineList>) => apiResponse.data));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdDelete(organizationId: string, pipelineId: string, _options?: Configuration): Observable<string> {
        return this.v2OrganizationIdPipelinesPipelineIdDeleteWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<ModelsPipelineConfigV2>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdGet(organizationId: string, pipelineId: string, _options?: Configuration): Observable<ModelsPipelineConfigV2> {
        return this.v2OrganizationIdPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineConfigV2>) => apiResponse.data));
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
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: Configuration): Observable<HttpInfo<ModelsPipelineNodeMetrics>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId, pipelineId, nodeId, metric, start, end, resolution, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(rsp)));
            }));
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
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: Configuration): Observable<ModelsPipelineNodeMetrics> {
        return this.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineNodeMetrics>) => apiResponse.data));
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: Configuration): Observable<HttpInfo<ModelsPipelineConfigV2>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesV2UpdatePipelineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public v2OrganizationIdPipelinesPipelineIdPatch(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: Configuration): Observable<ModelsPipelineConfigV2> {
        return this.v2OrganizationIdPipelinesPipelineIdPatchWithHttpInfo(organizationId, pipelineId, routesV2UpdatePipelineRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineConfigV2>) => apiResponse.data));
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
    public v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Observable<HttpInfo<ModelsPipelineStatus>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId, pipelineId, metrics, start, end, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(rsp)));
            }));
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
    public v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Observable<ModelsPipelineStatus> {
        return this.v2OrganizationIdPipelinesPipelineIdStatusGetWithHttpInfo(organizationId, pipelineId, metrics, start, end, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineStatus>) => apiResponse.data));
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
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Observable<HttpInfo<ModelsPipelineNodeStatus>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId, pipelineId, nodeId, metrics, start, end, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(rsp)));
            }));
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
    public v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: Configuration): Observable<ModelsPipelineNodeStatus> {
        return this.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, metrics, start, end, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineNodeStatus>) => apiResponse.data));
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public v2OrganizationIdPipelinesPostWithHttpInfo(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: Configuration): Observable<HttpInfo<ModelsPipelineConfigV2>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesPost(organizationId, routesV2CreatePipelineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public v2OrganizationIdPipelinesPost(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: Configuration): Observable<ModelsPipelineConfigV2> {
        return this.v2OrganizationIdPipelinesPostWithHttpInfo(organizationId, routesV2CreatePipelineRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineConfigV2>) => apiResponse.data));
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
    public v2OrganizationIdPipelinesStatusesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: Configuration): Observable<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdPipelinesStatusesGet(organizationId, limit, offset, start, end, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdPipelinesStatusesGetWithHttpInfo(rsp)));
            }));
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
    public v2OrganizationIdPipelinesStatusesGet(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: Configuration): Observable<Array<RoutesV2PipelineWithStatus>> {
        return this.v2OrganizationIdPipelinesStatusesGetWithHttpInfo(organizationId, limit, offset, start, end, _options).pipe(map((apiResponse: HttpInfo<Array<RoutesV2PipelineWithStatus>>) => apiResponse.data));
    }

}

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class ObservableRolesApi {
    private requestFactory: RolesApiRequestFactory;
    private responseProcessor: RolesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RolesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RolesApiResponseProcessor();
    }

    /**
     * List roles
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public v1OrganizationIdRolesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsRoleList>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdRolesGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdRolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List roles
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public v1OrganizationIdRolesGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsRoleList> {
        return this.v1OrganizationIdRolesGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsRoleList>) => apiResponse.data));
    }

    /**
     * Create role
     * Create role
     * @param organizationId Organization ID
     * @param routesCreateRoleRequest Request body for creating a role
     */
    public v1OrganizationIdRolesPostWithHttpInfo(organizationId: string, routesCreateRoleRequest: RoutesCreateRoleRequest, _options?: Configuration): Observable<HttpInfo<ModelsRole>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdRolesPost(organizationId, routesCreateRoleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdRolesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create role
     * Create role
     * @param organizationId Organization ID
     * @param routesCreateRoleRequest Request body for creating a role
     */
    public v1OrganizationIdRolesPost(organizationId: string, routesCreateRoleRequest: RoutesCreateRoleRequest, _options?: Configuration): Observable<ModelsRole> {
        return this.v1OrganizationIdRolesPostWithHttpInfo(organizationId, routesCreateRoleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsRole>) => apiResponse.data));
    }

    /**
     * Delete role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(organizationId: string, roleId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdRolesRoleIdDelete(organizationId, roleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdDelete(organizationId: string, roleId: string, _options?: Configuration): Observable<any> {
        return this.v1OrganizationIdRolesRoleIdDeleteWithHttpInfo(organizationId, roleId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get role
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdGetWithHttpInfo(organizationId: string, roleId: string, _options?: Configuration): Observable<HttpInfo<ModelsRole>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdRolesRoleIdGet(organizationId, roleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdRolesRoleIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get role
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public v1OrganizationIdRolesRoleIdGet(organizationId: string, roleId: string, _options?: Configuration): Observable<ModelsRole> {
        return this.v1OrganizationIdRolesRoleIdGetWithHttpInfo(organizationId, roleId, _options).pipe(map((apiResponse: HttpInfo<ModelsRole>) => apiResponse.data));
    }

    /**
     * Update role
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesUpdateRoleRequest Request body for updating a role
     */
    public v1OrganizationIdRolesRoleIdPatchWithHttpInfo(organizationId: string, roleId: string, routesUpdateRoleRequest: RoutesUpdateRoleRequest, _options?: Configuration): Observable<HttpInfo<ModelsRole>> {
        const requestContextPromise = this.requestFactory.v1OrganizationIdRolesRoleIdPatch(organizationId, roleId, routesUpdateRoleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdRolesRoleIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update role
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesUpdateRoleRequest Request body for updating a role
     */
    public v1OrganizationIdRolesRoleIdPatch(organizationId: string, roleId: string, routesUpdateRoleRequest: RoutesUpdateRoleRequest, _options?: Configuration): Observable<ModelsRole> {
        return this.v1OrganizationIdRolesRoleIdPatchWithHttpInfo(organizationId, roleId, routesUpdateRoleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsRole>) => apiResponse.data));
    }

}

import { SandboxApiRequestFactory, SandboxApiResponseProcessor} from "../apis/SandboxApi";
export class ObservableSandboxApi {
    private requestFactory: SandboxApiRequestFactory;
    private responseProcessor: SandboxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SandboxApiRequestFactory,
        responseProcessor?: SandboxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SandboxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SandboxApiResponseProcessor();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public v2SandboxTemplateGetWithHttpInfo(body?: any, _options?: Configuration): Observable<HttpInfo<RoutesV2ListTemplatesResponse>> {
        const requestContextPromise = this.requestFactory.v2SandboxTemplateGet(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SandboxTemplateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public v2SandboxTemplateGet(body?: any, _options?: Configuration): Observable<RoutesV2ListTemplatesResponse> {
        return this.v2SandboxTemplateGetWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RoutesV2ListTemplatesResponse>) => apiResponse.data));
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public v2SandboxTemplatePostWithHttpInfo(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: Configuration): Observable<HttpInfo<RoutesV2GenerateRecordResponse>> {
        const requestContextPromise = this.requestFactory.v2SandboxTemplatePost(routesV2GenerateRecordRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SandboxTemplatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public v2SandboxTemplatePost(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: Configuration): Observable<RoutesV2GenerateRecordResponse> {
        return this.v2SandboxTemplatePostWithHttpInfo(routesV2GenerateRecordRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2GenerateRecordResponse>) => apiResponse.data));
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public v2SandboxTransformPostWithHttpInfo(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: Configuration): Observable<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const requestContextPromise = this.requestFactory.v2SandboxTransformPost(routesV2ApplyTransformationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SandboxTransformPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public v2SandboxTransformPost(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: Configuration): Observable<RoutesV2ApplyTransformationResponse> {
        return this.v2SandboxTransformPostWithHttpInfo(routesV2ApplyTransformationRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2ApplyTransformationResponse>) => apiResponse.data));
    }

}

import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi";
export class ObservableSecretsApi {
    private requestFactory: SecretsApiRequestFactory;
    private responseProcessor: SecretsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsApiRequestFactory,
        responseProcessor?: SecretsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecretsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecretsApiResponseProcessor();
    }

    /**
     * Lists all secrets for the specified organization
     * List secrets
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public v2OrganizationIdSecretsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsSecretList>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdSecretsGet(organizationId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdSecretsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all secrets for the specified organization
     * List secrets
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public v2OrganizationIdSecretsGet(organizationId: string, limit?: number, offset?: number, _options?: Configuration): Observable<ModelsSecretList> {
        return this.v2OrganizationIdSecretsGetWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsSecretList>) => apiResponse.data));
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public v2OrganizationIdSecretsPostWithHttpInfo(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Observable<HttpInfo<RoutesV2SecretResponse>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdSecretsPost(organizationId, routesV2CreateOrUpdateSecretRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdSecretsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public v2OrganizationIdSecretsPost(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Observable<RoutesV2SecretResponse> {
        return this.v2OrganizationIdSecretsPostWithHttpInfo(organizationId, routesV2CreateOrUpdateSecretRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SecretResponse>) => apiResponse.data));
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(organizationId: string, secretId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdSecretsSecretIdDelete(organizationId, secretId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdDelete(organizationId: string, secretId: string, _options?: Configuration): Observable<void> {
        return this.v2OrganizationIdSecretsSecretIdDeleteWithHttpInfo(organizationId, secretId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a specific secret by ID
     * Get secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdGetWithHttpInfo(organizationId: string, secretId: string, _options?: Configuration): Observable<HttpInfo<RoutesV2SecretResponse>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdSecretsSecretIdGet(organizationId, secretId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdSecretsSecretIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a specific secret by ID
     * Get secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public v2OrganizationIdSecretsSecretIdGet(organizationId: string, secretId: string, _options?: Configuration): Observable<RoutesV2SecretResponse> {
        return this.v2OrganizationIdSecretsSecretIdGetWithHttpInfo(organizationId, secretId, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SecretResponse>) => apiResponse.data));
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Observable<HttpInfo<RoutesV2SecretResponse>> {
        const requestContextPromise = this.requestFactory.v2OrganizationIdSecretsSecretIdPatch(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public v2OrganizationIdSecretsSecretIdPatch(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: Configuration): Observable<RoutesV2SecretResponse> {
        return this.v2OrganizationIdSecretsSecretIdPatchWithHttpInfo(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SecretResponse>) => apiResponse.data));
    }

}

import { TransformsApiRequestFactory, TransformsApiResponseProcessor} from "../apis/TransformsApi";
export class ObservableTransformsApi {
    private requestFactory: TransformsApiRequestFactory;
    private responseProcessor: TransformsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformsApiRequestFactory,
        responseProcessor?: TransformsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransformsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransformsApiResponseProcessor();
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public v1TransformsGetWithHttpInfo(body?: any, _options?: Configuration): Observable<HttpInfo<OperationInformation>> {
        const requestContextPromise = this.requestFactory.v1TransformsGet(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransformsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public v1TransformsGet(body?: any, _options?: Configuration): Observable<OperationInformation> {
        return this.v1TransformsGetWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OperationInformation>) => apiResponse.data));
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId: string, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1TransformsTransformTypeIdGet(transformTypeId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransformsTransformTypeIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public v1TransformsTransformTypeIdGet(transformTypeId: string, body?: any, _options?: Configuration): Observable<any> {
        return this.v1TransformsTransformTypeIdGetWithHttpInfo(transformTypeId, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * List users
     * List users
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1UsersGetWithHttpInfo(limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ModelsUserList>> {
        const requestContextPromise = this.requestFactory.v1UsersGet(limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List users
     * List users
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v1UsersGet(limit?: number, offset?: number, _options?: Configuration): Observable<ModelsUserList> {
        return this.v1UsersGetWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsUserList>) => apiResponse.data));
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPostWithHttpInfo(body?: any, _options?: Configuration): Observable<HttpInfo<ModelsUser>> {
        const requestContextPromise = this.requestFactory.v1UsersPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPost(body?: any, _options?: Configuration): Observable<ModelsUser> {
        return this.v1UsersPostWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ModelsUser>) => apiResponse.data));
    }

}
