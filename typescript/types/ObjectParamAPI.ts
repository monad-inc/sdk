import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AbsSecretsConfig } from '../models/AbsSecretsConfig';
import { AbsSettingsConfig } from '../models/AbsSettingsConfig';
import { ActivityLogsSecretsConfig } from '../models/ActivityLogsSecretsConfig';
import { ActivityLogsSettingsConfig } from '../models/ActivityLogsSettingsConfig';
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
import { AwssqsSettingsConfig } from '../models/AwssqsSettingsConfig';
import { AwssqsoutputSettingsConfig } from '../models/AwssqsoutputSettingsConfig';
import { AzureActivityLogsSecretsConfig } from '../models/AzureActivityLogsSecretsConfig';
import { AzureActivityLogsSettingsConfig } from '../models/AzureActivityLogsSettingsConfig';
import { AzureBlobStorageSecretsConfig } from '../models/AzureBlobStorageSecretsConfig';
import { AzureBlobStorageSettingsConfig } from '../models/AzureBlobStorageSettingsConfig';
import { BatchConfigBatchConfig } from '../models/BatchConfigBatchConfig';
import { BigqueryInputSecretsConfig } from '../models/BigqueryInputSecretsConfig';
import { BigqueryInputSettingsConfig } from '../models/BigqueryInputSettingsConfig';
import { BigquerySecretsConfig } from '../models/BigquerySecretsConfig';
import { BigquerySettingsConfig } from '../models/BigquerySettingsConfig';
import { BoxEventsSecretsConfig } from '../models/BoxEventsSecretsConfig';
import { BoxEventsSettingsConfig } from '../models/BoxEventsSettingsConfig';
import { BoxUsersSecretsConfig } from '../models/BoxUsersSecretsConfig';
import { BoxUsersSettingsConfig } from '../models/BoxUsersSettingsConfig';
import { CertificateManagerSettingsConfig } from '../models/CertificateManagerSettingsConfig';
import { CloudAssetInventorySecretsConfig } from '../models/CloudAssetInventorySecretsConfig';
import { CloudAssetInventorySettingsConfig } from '../models/CloudAssetInventorySettingsConfig';
import { CloudConfigurationFindingsSecretsConfig } from '../models/CloudConfigurationFindingsSecretsConfig';
import { CloudConfigurationFindingsSettingsConfig } from '../models/CloudConfigurationFindingsSettingsConfig';
import { CloudLogsSecretsConfig } from '../models/CloudLogsSecretsConfig';
import { CloudLogsSettingsConfig } from '../models/CloudLogsSettingsConfig';
import { CloudResourceInventorySecretsConfig } from '../models/CloudResourceInventorySecretsConfig';
import { CloudResourceInventorySettingsConfig } from '../models/CloudResourceInventorySettingsConfig';
import { CloudtrailSettingsConfig } from '../models/CloudtrailSettingsConfig';
import { CommunityEditionSecretsConfig } from '../models/CommunityEditionSecretsConfig';
import { CommunityEditionSettingsConfig } from '../models/CommunityEditionSettingsConfig';
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
import { EnrichmentConnectorMeta } from '../models/EnrichmentConnectorMeta';
import { EntraIdSecretsConfig } from '../models/EntraIdSecretsConfig';
import { EntraIdSettingsConfig } from '../models/EntraIdSettingsConfig';
import { EventSecretsConfig } from '../models/EventSecretsConfig';
import { EventSettingsConfig } from '../models/EventSettingsConfig';
import { EventsLogsSecretsConfig } from '../models/EventsLogsSecretsConfig';
import { EventsLogsSettingsConfig } from '../models/EventsLogsSettingsConfig';
import { FlagsmithFlag } from '../models/FlagsmithFlag';
import { FlattenFlatten } from '../models/FlattenFlatten';
import { FlattenallFlattenAll } from '../models/FlattenallFlattenAll';
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { FullScansSecretsConfig } from '../models/FullScansSecretsConfig';
import { FullScansSettingsConfig } from '../models/FullScansSettingsConfig';
import { GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter } from '../models/GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter';
import { GitlabIssuesSecretsConfig } from '../models/GitlabIssuesSecretsConfig';
import { GitlabIssuesSettingsConfig } from '../models/GitlabIssuesSettingsConfig';
import { GoogleCloudStorageOutputSecretsConfig } from '../models/GoogleCloudStorageOutputSecretsConfig';
import { GoogleCloudStorageOutputSettingsConfig } from '../models/GoogleCloudStorageOutputSettingsConfig';
import { GoogleCloudStorageSecretsConfig } from '../models/GoogleCloudStorageSecretsConfig';
import { GoogleCloudStorageSettingsConfig } from '../models/GoogleCloudStorageSettingsConfig';
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
import { ModelsEnrichment } from '../models/ModelsEnrichment';
import { ModelsEnrichmentConfig } from '../models/ModelsEnrichmentConfig';
import { ModelsEnrichmentList } from '../models/ModelsEnrichmentList';
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
import { ObjectStorageInputSecretsConfig } from '../models/ObjectStorageInputSecretsConfig';
import { ObjectStorageInputSettingsConfig } from '../models/ObjectStorageInputSettingsConfig';
import { ObjectStorageSecretsConfig } from '../models/ObjectStorageSecretsConfig';
import { ObjectStorageSettingsConfig } from '../models/ObjectStorageSettingsConfig';
import { OneloginEventsSecretsConfig } from '../models/OneloginEventsSecretsConfig';
import { OneloginEventsSettingsConfig } from '../models/OneloginEventsSettingsConfig';
import { OpensearchSecretsConfig } from '../models/OpensearchSecretsConfig';
import { OpensearchSettingsConfig } from '../models/OpensearchSettingsConfig';
import { OperationInformation } from '../models/OperationInformation';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
import { PagerdutyAlertsConfig } from '../models/PagerdutyAlertsConfig';
import { PagerdutySecretsConfig } from '../models/PagerdutySecretsConfig';
import { PagerdutySettingsConfig } from '../models/PagerdutySettingsConfig';
import { PagerdutySummaryConfig } from '../models/PagerdutySummaryConfig';
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
import { RoutesV2ListTemplatesResponse } from '../models/RoutesV2ListTemplatesResponse';
import { RoutesV2MetricsResponse } from '../models/RoutesV2MetricsResponse';
import { RoutesV2MetricsValue } from '../models/RoutesV2MetricsValue';
import { RoutesV2OrganizationOverview } from '../models/RoutesV2OrganizationOverview';
import { RoutesV2PipelineMetric } from '../models/RoutesV2PipelineMetric';
import { RoutesV2PipelineRequestEdge } from '../models/RoutesV2PipelineRequestEdge';
import { RoutesV2PipelineRequestNode } from '../models/RoutesV2PipelineRequestNode';
import { RoutesV2PipelineStatus } from '../models/RoutesV2PipelineStatus';
import { RoutesV2PipelineWithStatus } from '../models/RoutesV2PipelineWithStatus';
import { RoutesV2PutInputRequest } from '../models/RoutesV2PutInputRequest';
import { RoutesV2PutOutputRequest } from '../models/RoutesV2PutOutputRequest';
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
import { RoutesV3CreateEnrichmentRequest } from '../models/RoutesV3CreateEnrichmentRequest';
import { RoutesV3GetEnrichmentResponse } from '../models/RoutesV3GetEnrichmentResponse';
import { RoutesV3GetFeatureFlagResponse } from '../models/RoutesV3GetFeatureFlagResponse';
import { RoutesV3ImportTransformResponse } from '../models/RoutesV3ImportTransformResponse';
import { RoutesV3PutEnrichmentRequest } from '../models/RoutesV3PutEnrichmentRequest';
import { RoutesV3SuccessResponse } from '../models/RoutesV3SuccessResponse';
import { RoutesV3TestEnrichmentConnectionRequest } from '../models/RoutesV3TestEnrichmentConnectionRequest';
import { RoutesV3TransformConfig } from '../models/RoutesV3TransformConfig';
import { RoutesV3TransformOperation } from '../models/RoutesV3TransformOperation';
import { RoutesV3UpdateEnrichmentRequest } from '../models/RoutesV3UpdateEnrichmentRequest';
import { S3SettingsConfig } from '../models/S3SettingsConfig';
import { SecretProcessesorEnrichmentConfig } from '../models/SecretProcessesorEnrichmentConfig';
import { SecretProcessesorEnrichmentConfigSecrets } from '../models/SecretProcessesorEnrichmentConfigSecrets';
import { SecretProcessesorEnrichmentConfigSettings } from '../models/SecretProcessesorEnrichmentConfigSettings';
import { SecretProcessesorInputConfig } from '../models/SecretProcessesorInputConfig';
import { SecretProcessesorInputConfigSecrets } from '../models/SecretProcessesorInputConfigSecrets';
import { SecretProcessesorInputConfigSettings } from '../models/SecretProcessesorInputConfigSettings';
import { SecretProcessesorOutputConfig } from '../models/SecretProcessesorOutputConfig';
import { SecretProcessesorOutputConfigSecrets } from '../models/SecretProcessesorOutputConfigSecrets';
import { SecretProcessesorOutputConfigSettings } from '../models/SecretProcessesorOutputConfigSettings';
import { SecretsmanagerSettingsConfig } from '../models/SecretsmanagerSettingsConfig';
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
import { TenableAssetsCronSecretsConfig } from '../models/TenableAssetsCronSecretsConfig';
import { TenableAssetsCronSettingsConfig } from '../models/TenableAssetsCronSettingsConfig';
import { TenableAssetsSecretsConfig } from '../models/TenableAssetsSecretsConfig';
import { TenableVulnerabilitiesCronSecretsConfig } from '../models/TenableVulnerabilitiesCronSecretsConfig';
import { TenableVulnerabilitiesCronSettingsConfig } from '../models/TenableVulnerabilitiesCronSettingsConfig';
import { TenableVulnerabilitiesSecretsConfig } from '../models/TenableVulnerabilitiesSecretsConfig';
import { TypesFilterNameStringType } from '../models/TypesFilterNameStringType';
import { UsersInfoSecretsConfig } from '../models/UsersInfoSecretsConfig';
import { UsersInfoSettingsConfig } from '../models/UsersInfoSettingsConfig';
import { UsersSecretsConfig } from '../models/UsersSecretsConfig';
import { UsersSettingsConfig } from '../models/UsersSettingsConfig';
import { UtcTimestampTimestamp } from '../models/UtcTimestampTimestamp';
import { V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet500Response } from '../models/V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet500Response';
import { VulnerabilitiesCronSecretsConfig } from '../models/VulnerabilitiesCronSecretsConfig';
import { VulnerabilitiesCronSettingsConfig } from '../models/VulnerabilitiesCronSettingsConfig';
import { VulnerabilitiesSecretsConfig } from '../models/VulnerabilitiesSecretsConfig';
import { VulnerabilitiesSettingsConfig } from '../models/VulnerabilitiesSettingsConfig';
import { VulnerabilityFindingsSecretsConfig } from '../models/VulnerabilityFindingsSecretsConfig';
import { VulnerabilityFindingsSettingsConfig } from '../models/VulnerabilityFindingsSettingsConfig';

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
     * @type RoutesLoginRequest
     * @memberof AuthenticationApiv1LoginTokenPost
     */
    routesLoginRequest: RoutesLoginRequest
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
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     * @param param the request object
     */
    public v1LoginGetWithHttpInfo(param: AuthenticationApiV1LoginGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v1LoginGetWithHttpInfo( options).toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
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
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param param the request object
     */
    public v1LoginTokenPostWithHttpInfo(param: AuthenticationApiV1LoginTokenPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AuthenticationtypesTokenResponse>> {
        return this.api.v1LoginTokenPostWithHttpInfo(param.routesLoginRequest,  options).toPromise();
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param param the request object
     */
    public v1LoginTokenPost(param: AuthenticationApiV1LoginTokenPostRequest, options?: ConfigurationOptions): Promise<AuthenticationtypesTokenResponse> {
        return this.api.v1LoginTokenPost(param.routesLoginRequest,  options).toPromise();
    }

}

import { ObservableBillingAccountsApi } from "./ObservableAPI";
import { BillingAccountsApiRequestFactory, BillingAccountsApiResponseProcessor} from "../apis/BillingAccountsApi";

export interface BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsApiv2BillingAccountsBillingAccountIdDelete
     */
    billingAccountId: string
}

export interface BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsApiv2BillingAccountsBillingAccountIdGet
     */
    billingAccountId: string
}

export interface BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsApiv2BillingAccountsBillingAccountIdPatch
     */
    billingAccountId: string
    /**
     * Request body for updating a billing account
     * @type RoutesV2UpdateBillingAccountRequest
     * @memberof BillingAccountsApiv2BillingAccountsBillingAccountIdPatch
     */
    routesV2UpdateBillingAccountRequest: RoutesV2UpdateBillingAccountRequest
}

export interface BillingAccountsApiV2BillingAccountsGetRequest {
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof BillingAccountsApiv2BillingAccountsGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof BillingAccountsApiv2BillingAccountsGet
     */
    offset?: number
}

export interface BillingAccountsApiV2BillingAccountsPostRequest {
    /**
     * Request body for creating a billing account
     * @type RoutesV2CreateBillingAccountRequest
     * @memberof BillingAccountsApiv2BillingAccountsPost
     */
    routesV2CreateBillingAccountRequest: RoutesV2CreateBillingAccountRequest
}

export class ObjectBillingAccountsApi {
    private api: ObservableBillingAccountsApi

    public constructor(configuration: Configuration, requestFactory?: BillingAccountsApiRequestFactory, responseProcessor?: BillingAccountsApiResponseProcessor) {
        this.api = new ObservableBillingAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdDeleteWithHttpInfo(param: BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v2BillingAccountsBillingAccountIdDeleteWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdDelete(param: BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v2BillingAccountsBillingAccountIdDelete(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdGetWithHttpInfo(param: BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        return this.api.v2BillingAccountsBillingAccountIdGetWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdGet(param: BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccount> {
        return this.api.v2BillingAccountsBillingAccountIdGet(param.billingAccountId,  options).toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdPatchWithHttpInfo(param: BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        return this.api.v2BillingAccountsBillingAccountIdPatchWithHttpInfo(param.billingAccountId, param.routesV2UpdateBillingAccountRequest,  options).toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdPatch(param: BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccount> {
        return this.api.v2BillingAccountsBillingAccountIdPatch(param.billingAccountId, param.routesV2UpdateBillingAccountRequest,  options).toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param param the request object
     */
    public v2BillingAccountsGetWithHttpInfo(param: BillingAccountsApiV2BillingAccountsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountList>> {
        return this.api.v2BillingAccountsGetWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param param the request object
     */
    public v2BillingAccountsGet(param: BillingAccountsApiV2BillingAccountsGetRequest = {}, options?: ConfigurationOptions): Promise<ModelsBillingAccountList> {
        return this.api.v2BillingAccountsGet(param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param param the request object
     */
    public v2BillingAccountsPostWithHttpInfo(param: BillingAccountsApiV2BillingAccountsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        return this.api.v2BillingAccountsPostWithHttpInfo(param.routesV2CreateBillingAccountRequest,  options).toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param param the request object
     */
    public v2BillingAccountsPost(param: BillingAccountsApiV2BillingAccountsPostRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccount> {
        return this.api.v2BillingAccountsPost(param.routesV2CreateBillingAccountRequest,  options).toPromise();
    }

}

import { ObservableBillingAccountsRbacApi } from "./ObservableAPI";
import { BillingAccountsRbacApiRequestFactory, BillingAccountsRbacApiResponseProcessor} from "../apis/BillingAccountsRbacApi";

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesGetRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesGet
     */
    billingAccountId: string
}

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesPostRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesPost
     */
    billingAccountId: string
    /**
     * Create Billing Account Role Request
     * @type RoutesV2CreateBillingAccountRoleRequest
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesPost
     */
    routesV2CreateBillingAccountRoleRequest: RoutesV2CreateBillingAccountRoleRequest
}

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdDelete
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdDelete
     */
    roleId: string
}

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdGet
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdGet
     */
    roleId: string
}

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdPatch
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdPatch
     */
    roleId: string
    /**
     * Update Billing Account Role Request
     * @type RoutesV2UpdateBillingAccountRoleRequest
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdPatch
     */
    routesV2UpdateBillingAccountRoleRequest: RoutesV2UpdateBillingAccountRoleRequest
}

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdUsersPost
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdUsersPost
     */
    roleId: string
    /**
     * Create Billing Account User Role Request
     * @type RoutesV2CreatebillingAccountUserRoleRequest
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdUsersPost
     */
    routesV2CreatebillingAccountUserRoleRequest: RoutesV2CreatebillingAccountUserRoleRequest
}

export interface BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete
     */
    roleId: string
    /**
     * User ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRbacApiv2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete
     */
    userId: string
}

export interface BillingAccountsRbacApiV2BillingPermissionsGetRequest {
}

export class ObjectBillingAccountsRbacApi {
    private api: ObservableBillingAccountsRbacApi

    public constructor(configuration: Configuration, requestFactory?: BillingAccountsRbacApiRequestFactory, responseProcessor?: BillingAccountsRbacApiResponseProcessor) {
        this.api = new ObservableBillingAccountsRbacApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesGetWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountRole>>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesGetWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesGet(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesGetRequest, options?: ConfigurationOptions): Promise<Array<ModelsBillingAccountRole>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesGet(param.billingAccountId,  options).toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesPostWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesPostWithHttpInfo(param.billingAccountId, param.routesV2CreateBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesPost(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesPostRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccountRole> {
        return this.api.v2BillingAccountsBillingAccountIdRolesPost(param.billingAccountId, param.routesV2CreateBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdDeleteWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdDeleteWithHttpInfo(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdDelete(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdDelete(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdGetWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdGetWithHttpInfo(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdGet(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccountRole> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdGet(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdPatchWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdPatchWithHttpInfo(param.billingAccountId, param.roleId, param.routesV2UpdateBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdPatch(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccountRole> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdPatch(param.billingAccountId, param.roleId, param.routesV2UpdateBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersPostWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPostWithHttpInfo(param.billingAccountId, param.roleId, param.routesV2CreatebillingAccountUserRoleRequest,  options).toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(param.billingAccountId, param.roleId, param.routesV2CreatebillingAccountUserRoleRequest,  options).toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteWithHttpInfo(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteWithHttpInfo(param.billingAccountId, param.roleId, param.userId,  options).toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(param: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(param.billingAccountId, param.roleId, param.userId,  options).toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     * @param param the request object
     */
    public v2BillingPermissionsGetWithHttpInfo(param: BillingAccountsRbacApiV2BillingPermissionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountPermission>>> {
        return this.api.v2BillingPermissionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     * @param param the request object
     */
    public v2BillingPermissionsGet(param: BillingAccountsRbacApiV2BillingPermissionsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ModelsBillingAccountPermission>> {
        return this.api.v2BillingPermissionsGet( options).toPromise();
    }

}

import { ObservableBillingProductsApi } from "./ObservableAPI";
import { BillingProductsApiRequestFactory, BillingProductsApiResponseProcessor} from "../apis/BillingProductsApi";

export interface BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionDeleteRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingProductsApiv2BillingAccountsBillingAccountIdSubscriptionDelete
     */
    billingAccountId: string
}

export interface BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionGetRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingProductsApiv2BillingAccountsBillingAccountIdSubscriptionGet
     */
    billingAccountId: string
}

export interface BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionPostRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingProductsApiv2BillingAccountsBillingAccountIdSubscriptionPost
     */
    billingAccountId: string
    /**
     * Request body for creating a billing subscription
     * @type RoutesV2CreateBillingAccountSubscriptionRequest
     * @memberof BillingProductsApiv2BillingAccountsBillingAccountIdSubscriptionPost
     */
    routesV2CreateBillingAccountSubscriptionRequest: RoutesV2CreateBillingAccountSubscriptionRequest
}

export interface BillingProductsApiV2BillingProductsGetRequest {
    /**
     * Show inactive products
     * Defaults to: undefined
     * @type boolean
     * @memberof BillingProductsApiv2BillingProductsGet
     */
    showInactive?: boolean
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof BillingProductsApiv2BillingProductsGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof BillingProductsApiv2BillingProductsGet
     */
    offset?: number
}

export class ObjectBillingProductsApi {
    private api: ObservableBillingProductsApi

    public constructor(configuration: Configuration, requestFactory?: BillingProductsApiRequestFactory, responseProcessor?: BillingProductsApiResponseProcessor) {
        this.api = new ObservableBillingProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdSubscriptionDeleteWithHttpInfo(param: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.v2BillingAccountsBillingAccountIdSubscriptionDeleteWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdSubscriptionDelete(param: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.v2BillingAccountsBillingAccountIdSubscriptionDelete(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdSubscriptionGetWithHttpInfo(param: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingProduct>> {
        return this.api.v2BillingAccountsBillingAccountIdSubscriptionGetWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdSubscriptionGet(param: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionGetRequest, options?: ConfigurationOptions): Promise<ModelsBillingProduct> {
        return this.api.v2BillingAccountsBillingAccountIdSubscriptionGet(param.billingAccountId,  options).toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdSubscriptionPostWithHttpInfo(param: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>> {
        return this.api.v2BillingAccountsBillingAccountIdSubscriptionPostWithHttpInfo(param.billingAccountId, param.routesV2CreateBillingAccountSubscriptionRequest,  options).toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param param the request object
     */
    public v2BillingAccountsBillingAccountIdSubscriptionPost(param: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionPostRequest, options?: ConfigurationOptions): Promise<RoutesV2CreateBillingAccountSubscriptionResponse> {
        return this.api.v2BillingAccountsBillingAccountIdSubscriptionPost(param.billingAccountId, param.routesV2CreateBillingAccountSubscriptionRequest,  options).toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param param the request object
     */
    public v2BillingProductsGetWithHttpInfo(param: BillingProductsApiV2BillingProductsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingProductList>> {
        return this.api.v2BillingProductsGetWithHttpInfo(param.showInactive, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param param the request object
     */
    public v2BillingProductsGet(param: BillingProductsApiV2BillingProductsGetRequest = {}, options?: ConfigurationOptions): Promise<ModelsBillingProductList> {
        return this.api.v2BillingProductsGet(param.showInactive, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableConditionsApi } from "./ObservableAPI";
import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";

export interface ConditionsApiV2ConditionsGetRequest {
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
        return this.api.v2ConditionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List conditions
     * List conditions
     * @param param the request object
     */
    public v2ConditionsGet(param: ConditionsApiV2ConditionsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ConditionInfo>> {
        return this.api.v2ConditionsGet( options).toPromise();
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

import { ObservableEnrichmentsApi } from "./ObservableAPI";
import { EnrichmentsApiRequestFactory, EnrichmentsApiResponseProcessor} from "../apis/EnrichmentsApi";

export interface EnrichmentsApiV3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentsApiv3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet
     */
    organizationId: string
    /**
     * Enrichment type ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentsApiv3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet
     */
    enrichmentTypeId: string
}

export interface EnrichmentsApiV3OrganizationIdEnrichmentsMetaGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentsApiv3OrganizationIdEnrichmentsMetaGet
     */
    organizationId: string
}

export class ObjectEnrichmentsApi {
    private api: ObservableEnrichmentsApi

    public constructor(configuration: Configuration, requestFactory?: EnrichmentsApiRequestFactory, responseProcessor?: EnrichmentsApiResponseProcessor) {
        this.api = new ObservableEnrichmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(param: EnrichmentsApiV3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<EnrichmentConnectorMeta>> {
        return this.api.v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(param.organizationId, param.enrichmentTypeId,  options).toPromise();
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(param: EnrichmentsApiV3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetRequest, options?: ConfigurationOptions): Promise<EnrichmentConnectorMeta> {
        return this.api.v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(param.organizationId, param.enrichmentTypeId,  options).toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(param: EnrichmentsApiV3OrganizationIdEnrichmentsMetaGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<EnrichmentConnectorMeta>>> {
        return this.api.v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsMetaGet(param: EnrichmentsApiV3OrganizationIdEnrichmentsMetaGetRequest, options?: ConfigurationOptions): Promise<Array<EnrichmentConnectorMeta>> {
        return this.api.v3OrganizationIdEnrichmentsMetaGet(param.organizationId,  options).toPromise();
    }

}

import { ObservableFeatureFlagsApi } from "./ObservableAPI";
import { FeatureFlagsApiRequestFactory, FeatureFlagsApiResponseProcessor} from "../apis/FeatureFlagsApi";

export interface FeatureFlagsApiV3FeatureFlagsGetRequest {
}

export class ObjectFeatureFlagsApi {
    private api: ObservableFeatureFlagsApi

    public constructor(configuration: Configuration, requestFactory?: FeatureFlagsApiRequestFactory, responseProcessor?: FeatureFlagsApiResponseProcessor) {
        this.api = new ObservableFeatureFlagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     * @param param the request object
     */
    public v3FeatureFlagsGetWithHttpInfo(param: FeatureFlagsApiV3FeatureFlagsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3GetFeatureFlagResponse>> {
        return this.api.v3FeatureFlagsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     * @param param the request object
     */
    public v3FeatureFlagsGet(param: FeatureFlagsApiV3FeatureFlagsGetRequest = {}, options?: ConfigurationOptions): Promise<RoutesV3GetFeatureFlagResponse> {
        return this.api.v3FeatureFlagsGet( options).toPromise();
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

import { ObservableOrganizationEnrichmentsApi } from "./ObservableAPI";
import { OrganizationEnrichmentsApiRequestFactory, OrganizationEnrichmentsApiResponseProcessor} from "../apis/OrganizationEnrichmentsApi";

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdDelete
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdDelete
     */
    enrichmentId: string
}

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdGet
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdGet
     */
    enrichmentId: string
}

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPatch
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPatch
     */
    enrichmentId: string
    /**
     * Enrichment configuration update
     * @type RoutesV3UpdateEnrichmentRequest
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPatch
     */
    routesV3UpdateEnrichmentRequest: RoutesV3UpdateEnrichmentRequest
    /**
     * Test connection before updating the enrichment
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPatch
     */
    testConnection?: boolean
}

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPutRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPut
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPut
     */
    enrichmentId: string
    /**
     * Enrichment configuration update
     * @type RoutesV3PutEnrichmentRequest
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPut
     */
    routesV3PutEnrichmentRequest: RoutesV3PutEnrichmentRequest
    /**
     * Test connection before updating the enrichment
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsEnrichmentIdPut
     */
    testConnection?: boolean
}

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsGet
     */
    organizationId: string
    /**
     * Number of results to return (default 100)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsGet
     */
    limit?: number
    /**
     * Number of results to skip (default 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsGet
     */
    offset?: number
}

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsPost
     */
    organizationId: string
    /**
     * Enrichment configuration
     * @type RoutesV3CreateEnrichmentRequest
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsPost
     */
    routesV3CreateEnrichmentRequest: RoutesV3CreateEnrichmentRequest
    /**
     * Test connection before creating the enrichment
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsPost
     */
    testConnection?: boolean
}

export interface OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsTestConnectionPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsTestConnectionPost
     */
    organizationId: string
    /**
     * Enrichment configuration to test
     * @type RoutesV3TestEnrichmentConnectionRequest
     * @memberof OrganizationEnrichmentsApiv3OrganizationIdEnrichmentsTestConnectionPost
     */
    routesV3TestEnrichmentConnectionRequest: RoutesV3TestEnrichmentConnectionRequest
}

export class ObjectOrganizationEnrichmentsApi {
    private api: ObservableOrganizationEnrichmentsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationEnrichmentsApiRequestFactory, responseProcessor?: OrganizationEnrichmentsApiResponseProcessor) {
        this.api = new ObservableOrganizationEnrichmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdDeleteWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdDeleteWithHttpInfo(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdDelete(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdDeleteRequest, options?: ConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdDelete(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdGetWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3GetEnrichmentResponse>> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdGetWithHttpInfo(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdGet(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdGetRequest, options?: ConfigurationOptions): Promise<RoutesV3GetEnrichmentResponse> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdGet(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdPatchWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdPatchWithHttpInfo(param.organizationId, param.enrichmentId, param.routesV3UpdateEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdPatch(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsEnrichment> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdPatch(param.organizationId, param.enrichmentId, param.routesV3UpdateEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdPutWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdPutWithHttpInfo(param.organizationId, param.enrichmentId, param.routesV3PutEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdPut(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPutRequest, options?: ConfigurationOptions): Promise<ModelsEnrichment> {
        return this.api.v3OrganizationIdEnrichmentsEnrichmentIdPut(param.organizationId, param.enrichmentId, param.routesV3PutEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsGetWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichmentList>> {
        return this.api.v3OrganizationIdEnrichmentsGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsGet(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsGetRequest, options?: ConfigurationOptions): Promise<ModelsEnrichmentList> {
        return this.api.v3OrganizationIdEnrichmentsGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsPostWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        return this.api.v3OrganizationIdEnrichmentsPostWithHttpInfo(param.organizationId, param.routesV3CreateEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsPost(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsPostRequest, options?: ConfigurationOptions): Promise<ModelsEnrichment> {
        return this.api.v3OrganizationIdEnrichmentsPost(param.organizationId, param.routesV3CreateEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsTestConnectionPostWithHttpInfo(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        return this.api.v3OrganizationIdEnrichmentsTestConnectionPostWithHttpInfo(param.organizationId, param.routesV3TestEnrichmentConnectionRequest,  options).toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param param the request object
     */
    public v3OrganizationIdEnrichmentsTestConnectionPost(param: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        return this.api.v3OrganizationIdEnrichmentsTestConnectionPost(param.organizationId, param.routesV3TestEnrichmentConnectionRequest,  options).toPromise();
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

export interface OrganizationInputsApiV2OrganizationIdInputsInputIdPutRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPut
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPut
     */
    inputId: string
    /**
     * Input configuration update
     * @type RoutesV2PutInputRequest
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPut
     */
    routesV2PutInputRequest: RoutesV2PutInputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationInputsApiv2OrganizationIdInputsInputIdPut
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
     * @type RoutesV2TestInputConnectionRequest
     * @memberof OrganizationInputsApiv2OrganizationIdInputsTestConnectionPost
     */
    routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest
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
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param param the request object
     */
    public v2OrganizationIdInputsInputIdPutWithHttpInfo(param: OrganizationInputsApiV2OrganizationIdInputsInputIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        return this.api.v2OrganizationIdInputsInputIdPutWithHttpInfo(param.organizationId, param.inputId, param.routesV2PutInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param param the request object
     */
    public v2OrganizationIdInputsInputIdPut(param: OrganizationInputsApiV2OrganizationIdInputsInputIdPutRequest, options?: ConfigurationOptions): Promise<ModelsInput> {
        return this.api.v2OrganizationIdInputsInputIdPut(param.organizationId, param.inputId, param.routesV2PutInputRequest, param.testConnection,  options).toPromise();
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
        return this.api.v2OrganizationIdInputsTestConnectionPostWithHttpInfo(param.organizationId, param.routesV2TestInputConnectionRequest,  options).toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param param the request object
     */
    public v2OrganizationIdInputsTestConnectionPost(param: OrganizationInputsApiV2OrganizationIdInputsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        return this.api.v2OrganizationIdInputsTestConnectionPost(param.organizationId, param.routesV2TestInputConnectionRequest,  options).toPromise();
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

export interface OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPutRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPut
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPut
     */
    outputId: string
    /**
     * Output configuration update
     * @type RoutesV2PutOutputRequest
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPut
     */
    routesV2PutOutputRequest: RoutesV2PutOutputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsOutputIdPut
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
     * @type RoutesV2TestOutputConnectionRequest
     * @memberof OrganizationOutputsApiv2OrganizationIdOutputsTestConnectionPost
     */
    routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest
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
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param param the request object
     */
    public v2OrganizationIdOutputsOutputIdPutWithHttpInfo(param: OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        return this.api.v2OrganizationIdOutputsOutputIdPutWithHttpInfo(param.organizationId, param.outputId, param.routesV2PutOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param param the request object
     */
    public v2OrganizationIdOutputsOutputIdPut(param: OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPutRequest, options?: ConfigurationOptions): Promise<ModelsOutput> {
        return this.api.v2OrganizationIdOutputsOutputIdPut(param.organizationId, param.outputId, param.routesV2PutOutputRequest, param.testConnection,  options).toPromise();
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
        return this.api.v2OrganizationIdOutputsTestConnectionPostWithHttpInfo(param.organizationId, param.routesV2TestOutputConnectionRequest,  options).toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param param the request object
     */
    public v2OrganizationIdOutputsTestConnectionPost(param: OrganizationOutputsApiV2OrganizationIdOutputsTestConnectionPostRequest, options?: ConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        return this.api.v2OrganizationIdOutputsTestConnectionPost(param.organizationId, param.routesV2TestOutputConnectionRequest,  options).toPromise();
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

import { ObservablePermissionsApi } from "./ObservableAPI";
import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";

export interface PermissionsApiV2OrganizationIdRolesPermissionsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PermissionsApiv2OrganizationIdRolesPermissionsGet
     */
    organizationId: string
    /**
     * Limit the number of permissions returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof PermissionsApiv2OrganizationIdRolesPermissionsGet
     */
    limit?: number
    /**
     * Offset the permissions returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof PermissionsApiv2OrganizationIdRolesPermissionsGet
     */
    offset?: number
}

export class ObjectPermissionsApi {
    private api: ObservablePermissionsApi

    public constructor(configuration: Configuration, requestFactory?: PermissionsApiRequestFactory, responseProcessor?: PermissionsApiResponseProcessor) {
        this.api = new ObservablePermissionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param param the request object
     */
    public v2OrganizationIdRolesPermissionsGetWithHttpInfo(param: PermissionsApiV2OrganizationIdRolesPermissionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPermissionList>> {
        return this.api.v2OrganizationIdRolesPermissionsGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param param the request object
     */
    public v2OrganizationIdRolesPermissionsGet(param: PermissionsApiV2OrganizationIdRolesPermissionsGetRequest, options?: ConfigurationOptions): Promise<ModelsPermissionList> {
        return this.api.v2OrganizationIdRolesPermissionsGet(param.organizationId, param.limit, param.offset,  options).toPromise();
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

export interface PipelinesApiV2OrganizationIdPipelinesMetricsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesMetricsGet
     */
    organizationId: string
    /**
     * Comma-separated list of pipeline IDs
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesMetricsGet
     */
    pipelineIds: string
    /**
     * Resolution for metrics (default: 5m)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiv2OrganizationIdPipelinesMetricsGet
     */
    resolution?: string
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
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param param the request object
     */
    public v2OrganizationIdPipelinesMetricsGetWithHttpInfo(param: PipelinesApiV2OrganizationIdPipelinesMetricsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2MetricsResponse>> {
        return this.api.v2OrganizationIdPipelinesMetricsGetWithHttpInfo(param.organizationId, param.pipelineIds, param.resolution,  options).toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param param the request object
     */
    public v2OrganizationIdPipelinesMetricsGet(param: PipelinesApiV2OrganizationIdPipelinesMetricsGetRequest, options?: ConfigurationOptions): Promise<RoutesV2MetricsResponse> {
        return this.api.v2OrganizationIdPipelinesMetricsGet(param.organizationId, param.pipelineIds, param.resolution,  options).toPromise();
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

import { ObservableQuotasApi } from "./ObservableAPI";
import { QuotasApiRequestFactory, QuotasApiResponseProcessor} from "../apis/QuotasApi";

export interface QuotasApiV2QuotasGetRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof QuotasApiv2QuotasGet
     */
    billingAccountId?: string
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof QuotasApiv2QuotasGet
     */
    organizationId?: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof QuotasApiv2QuotasGet
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof QuotasApiv2QuotasGet
     */
    offset?: number
    /**
     * 
     * @type any
     * @memberof QuotasApiv2QuotasGet
     */
    body?: any
}

export class ObjectQuotasApi {
    private api: ObservableQuotasApi

    public constructor(configuration: Configuration, requestFactory?: QuotasApiRequestFactory, responseProcessor?: QuotasApiResponseProcessor) {
        this.api = new ObservableQuotasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List quotas for a given billing account or organization id.
     * List quotas
     * @param param the request object
     */
    public v2QuotasGetWithHttpInfo(param: QuotasApiV2QuotasGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        return this.api.v2QuotasGetWithHttpInfo(param.billingAccountId, param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

    /**
     * List quotas for a given billing account or organization id.
     * List quotas
     * @param param the request object
     */
    public v2QuotasGet(param: QuotasApiV2QuotasGetRequest = {}, options?: ConfigurationOptions): Promise<ModelsQuotaList> {
        return this.api.v2QuotasGet(param.billingAccountId, param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

}

import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiV2OrganizationIdRolesGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesGet
     */
    organizationId: string
    /**
     * Limit the number of roles returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof RolesApiv2OrganizationIdRolesGet
     */
    limit?: number
    /**
     * Offset the roles returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof RolesApiv2OrganizationIdRolesGet
     */
    offset?: number
}

export interface RolesApiV2OrganizationIdRolesPostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesPost
     */
    organizationId: string
    /**
     * Request body for creating a role
     * @type RoutesV2CreateRoleV2Request
     * @memberof RolesApiv2OrganizationIdRolesPost
     */
    routesV2CreateRoleV2Request: RoutesV2CreateRoleV2Request
}

export interface RolesApiV2OrganizationIdRolesRoleIdDeleteRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesRoleIdDelete
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesRoleIdDelete
     */
    roleId: string
}

export interface RolesApiV2OrganizationIdRolesRoleIdGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesRoleIdGet
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesRoleIdGet
     */
    roleId: string
}

export interface RolesApiV2OrganizationIdRolesRoleIdPatchRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesRoleIdPatch
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiv2OrganizationIdRolesRoleIdPatch
     */
    roleId: string
    /**
     * Request body for updating a role
     * @type RoutesV2UpdateRoleV2Request
     * @memberof RolesApiv2OrganizationIdRolesRoleIdPatch
     */
    routesV2UpdateRoleV2Request: RoutesV2UpdateRoleV2Request
}

export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param param the request object
     */
    public v2OrganizationIdRolesGetWithHttpInfo(param: RolesApiV2OrganizationIdRolesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissionsList>> {
        return this.api.v2OrganizationIdRolesGetWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param param the request object
     */
    public v2OrganizationIdRolesGet(param: RolesApiV2OrganizationIdRolesGetRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissionsList> {
        return this.api.v2OrganizationIdRolesGet(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param param the request object
     */
    public v2OrganizationIdRolesPostWithHttpInfo(param: RolesApiV2OrganizationIdRolesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        return this.api.v2OrganizationIdRolesPostWithHttpInfo(param.organizationId, param.routesV2CreateRoleV2Request,  options).toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param param the request object
     */
    public v2OrganizationIdRolesPost(param: RolesApiV2OrganizationIdRolesPostRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        return this.api.v2OrganizationIdRolesPost(param.organizationId, param.routesV2CreateRoleV2Request,  options).toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param param the request object
     */
    public v2OrganizationIdRolesRoleIdDeleteWithHttpInfo(param: RolesApiV2OrganizationIdRolesRoleIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v2OrganizationIdRolesRoleIdDeleteWithHttpInfo(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param param the request object
     */
    public v2OrganizationIdRolesRoleIdDelete(param: RolesApiV2OrganizationIdRolesRoleIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v2OrganizationIdRolesRoleIdDelete(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param param the request object
     */
    public v2OrganizationIdRolesRoleIdGetWithHttpInfo(param: RolesApiV2OrganizationIdRolesRoleIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        return this.api.v2OrganizationIdRolesRoleIdGetWithHttpInfo(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param param the request object
     */
    public v2OrganizationIdRolesRoleIdGet(param: RolesApiV2OrganizationIdRolesRoleIdGetRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        return this.api.v2OrganizationIdRolesRoleIdGet(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param param the request object
     */
    public v2OrganizationIdRolesRoleIdPatchWithHttpInfo(param: RolesApiV2OrganizationIdRolesRoleIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        return this.api.v2OrganizationIdRolesRoleIdPatchWithHttpInfo(param.organizationId, param.roleId, param.routesV2UpdateRoleV2Request,  options).toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param param the request object
     */
    public v2OrganizationIdRolesRoleIdPatch(param: RolesApiV2OrganizationIdRolesRoleIdPatchRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        return this.api.v2OrganizationIdRolesRoleIdPatch(param.organizationId, param.roleId, param.routesV2UpdateRoleV2Request,  options).toPromise();
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

import { ObservableTransformsRepositoryApi } from "./ObservableAPI";
import { TransformsRepositoryApiRequestFactory, TransformsRepositoryApiResponseProcessor} from "../apis/TransformsRepositoryApi";

export interface TransformsRepositoryApiV2TransformsRepositoryGetRequest {
    /**
     * Number of items to return (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof TransformsRepositoryApiv2TransformsRepositoryGet
     */
    limit?: number
    /**
     * Number of items to skip (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof TransformsRepositoryApiv2TransformsRepositoryGet
     */
    offset?: number
}

export interface TransformsRepositoryApiV2TransformsRepositoryTransformIdGetRequest {
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsRepositoryApiv2TransformsRepositoryTransformIdGet
     */
    transformId: string
}

export interface TransformsRepositoryApiV3TransformsRepositoryExportPostRequest {
    /**
     * Transform to export and optional metadata
     * @type CommunityTransformsInternalTransformConfig
     * @memberof TransformsRepositoryApiv3TransformsRepositoryExportPost
     */
    communityTransformsInternalTransformConfig: CommunityTransformsInternalTransformConfig
}

export interface TransformsRepositoryApiV3TransformsRepositoryGetRequest {
}

export interface TransformsRepositoryApiV3TransformsRepositoryImportPostRequest {
    /**
     * YAML transform definition
     * @type string
     * @memberof TransformsRepositoryApiv3TransformsRepositoryImportPost
     */
    body: string
}

export interface TransformsRepositoryApiV3TransformsRepositoryTransformIdGetRequest {
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsRepositoryApiv3TransformsRepositoryTransformIdGet
     */
    transformId: string
}

export class ObjectTransformsRepositoryApi {
    private api: ObservableTransformsRepositoryApi

    public constructor(configuration: Configuration, requestFactory?: TransformsRepositoryApiRequestFactory, responseProcessor?: TransformsRepositoryApiResponseProcessor) {
        this.api = new ObservableTransformsRepositoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param param the request object
     */
    public v2TransformsRepositoryGetWithHttpInfo(param: TransformsRepositoryApiV2TransformsRepositoryGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryList>> {
        return this.api.v2TransformsRepositoryGetWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param param the request object
     */
    public v2TransformsRepositoryGet(param: TransformsRepositoryApiV2TransformsRepositoryGetRequest = {}, options?: ConfigurationOptions): Promise<ModelsTransformsRepositoryList> {
        return this.api.v2TransformsRepositoryGet(param.limit, param.offset,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public v2TransformsRepositoryTransformIdGetWithHttpInfo(param: TransformsRepositoryApiV2TransformsRepositoryTransformIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryTransform>> {
        return this.api.v2TransformsRepositoryTransformIdGetWithHttpInfo(param.transformId,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public v2TransformsRepositoryTransformIdGet(param: TransformsRepositoryApiV2TransformsRepositoryTransformIdGetRequest, options?: ConfigurationOptions): Promise<ModelsTransformsRepositoryTransform> {
        return this.api.v2TransformsRepositoryTransformIdGet(param.transformId,  options).toPromise();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param param the request object
     */
    public v3TransformsRepositoryExportPostWithHttpInfo(param: TransformsRepositoryApiV3TransformsRepositoryExportPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.v3TransformsRepositoryExportPostWithHttpInfo(param.communityTransformsInternalTransformConfig,  options).toPromise();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param param the request object
     */
    public v3TransformsRepositoryExportPost(param: TransformsRepositoryApiV3TransformsRepositoryExportPostRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.v3TransformsRepositoryExportPost(param.communityTransformsInternalTransformConfig,  options).toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     * @param param the request object
     */
    public v3TransformsRepositoryGetWithHttpInfo(param: TransformsRepositoryApiV3TransformsRepositoryGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformsIndex>> {
        return this.api.v3TransformsRepositoryGetWithHttpInfo( options).toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     * @param param the request object
     */
    public v3TransformsRepositoryGet(param: TransformsRepositoryApiV3TransformsRepositoryGetRequest = {}, options?: ConfigurationOptions): Promise<CommunityTransformsInternalTransformsIndex> {
        return this.api.v3TransformsRepositoryGet( options).toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param param the request object
     */
    public v3TransformsRepositoryImportPostWithHttpInfo(param: TransformsRepositoryApiV3TransformsRepositoryImportPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3ImportTransformResponse>> {
        return this.api.v3TransformsRepositoryImportPostWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param param the request object
     */
    public v3TransformsRepositoryImportPost(param: TransformsRepositoryApiV3TransformsRepositoryImportPostRequest, options?: ConfigurationOptions): Promise<RoutesV3ImportTransformResponse> {
        return this.api.v3TransformsRepositoryImportPost(param.body,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public v3TransformsRepositoryTransformIdGetWithHttpInfo(param: TransformsRepositoryApiV3TransformsRepositoryTransformIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformConfig>> {
        return this.api.v3TransformsRepositoryTransformIdGetWithHttpInfo(param.transformId,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public v3TransformsRepositoryTransformIdGet(param: TransformsRepositoryApiV3TransformsRepositoryTransformIdGetRequest, options?: ConfigurationOptions): Promise<CommunityTransformsInternalTransformConfig> {
        return this.api.v3TransformsRepositoryTransformIdGet(param.transformId,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiV1UsersGetRequest {
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
     * Get your current user
     * Get your current user
     * @param param the request object
     */
    public v1UsersGetWithHttpInfo(param: UsersApiV1UsersGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesUserWithRoles>> {
        return this.api.v1UsersGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     * @param param the request object
     */
    public v1UsersGet(param: UsersApiV1UsersGetRequest = {}, options?: ConfigurationOptions): Promise<RoutesUserWithRoles> {
        return this.api.v1UsersGet( options).toPromise();
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
