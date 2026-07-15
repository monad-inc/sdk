import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AbsSecretsConfig } from '../models/AbsSecretsConfig';
import { AbsSettingsConfig } from '../models/AbsSettingsConfig';
import { AddArgumentsConfig } from '../models/AddArgumentsConfig';
import { AddIdArgumentsConfig } from '../models/AddIdArgumentsConfig';
import { AdminLogsSecretsConfig } from '../models/AdminLogsSecretsConfig';
import { AdminLogsSettingsConfig } from '../models/AdminLogsSettingsConfig';
import { AivenServiceLogsSecretsConfig } from '../models/AivenServiceLogsSecretsConfig';
import { AivenServiceLogsSettingsConfig } from '../models/AivenServiceLogsSettingsConfig';
import { AlertsAlertCategory } from '../models/AlertsAlertCategory';
import { AlertsAlertGranularity } from '../models/AlertsAlertGranularity';
import { AlertsAlertHouse } from '../models/AlertsAlertHouse';
import { AlertsAlertMeta } from '../models/AlertsAlertMeta';
import { ApplyConditionV2Request } from '../models/ApplyConditionV2Request';
import { ApplyTransformationV2Request } from '../models/ApplyTransformationV2Request';
import { ArizeAuditLogsSecretsConfig } from '../models/ArizeAuditLogsSecretsConfig';
import { ArizeAuditLogsSettingsConfig } from '../models/ArizeAuditLogsSettingsConfig';
import { AuthLogsSecretsConfig } from '../models/AuthLogsSecretsConfig';
import { AuthLogsSettingsConfig } from '../models/AuthLogsSettingsConfig';
import { AuthenticationtypesAuthenticationMethod } from '../models/AuthenticationtypesAuthenticationMethod';
import { AuthenticationtypesMFAEnrollmentTicket } from '../models/AuthenticationtypesMFAEnrollmentTicket';
import { AuthenticationtypesTokenResponse } from '../models/AuthenticationtypesTokenResponse';
import { AwsGuarddutySecretsConfig } from '../models/AwsGuarddutySecretsConfig';
import { AwsGuarddutySettingsConfig } from '../models/AwsGuarddutySettingsConfig';
import { AwsS3SecretsConfig } from '../models/AwsS3SecretsConfig';
import { AwsS3SettingsConfig } from '../models/AwsS3SettingsConfig';
import { AwsSqsS3CloudtrailChunkingMode } from '../models/AwsSqsS3CloudtrailChunkingMode';
import { AwsSqsS3CloudtrailSettingsConfig } from '../models/AwsSqsS3CloudtrailSettingsConfig';
import { AwssqsoutputQueueType } from '../models/AwssqsoutputQueueType';
import { AwssqsoutputSettingsConfig } from '../models/AwssqsoutputSettingsConfig';
import { Awssqss3SettingsConfig } from '../models/Awssqss3SettingsConfig';
import { AxiomSecretsConfig } from '../models/AxiomSecretsConfig';
import { AxiomSettingsConfig } from '../models/AxiomSettingsConfig';
import { AzureActivityLogsSecretsConfig } from '../models/AzureActivityLogsSecretsConfig';
import { AzureActivityLogsSettingsConfig } from '../models/AzureActivityLogsSettingsConfig';
import { AzureBlobStorageSecretsConfig } from '../models/AzureBlobStorageSecretsConfig';
import { AzureBlobStorageSettingsConfig } from '../models/AzureBlobStorageSettingsConfig';
import { AzureEventHubsSecretsConfig } from '../models/AzureEventHubsSecretsConfig';
import { AzureEventHubsSettingsConfig } from '../models/AzureEventHubsSettingsConfig';
import { AzureVnetFlowLogsSecretsConfig } from '../models/AzureVnetFlowLogsSecretsConfig';
import { AzureVnetFlowLogsSettingsConfig } from '../models/AzureVnetFlowLogsSettingsConfig';
import { BackblazeB2SecretsConfig } from '../models/BackblazeB2SecretsConfig';
import { BackblazeB2SettingsConfig } from '../models/BackblazeB2SettingsConfig';
import { BackblazeSecretsConfig } from '../models/BackblazeSecretsConfig';
import { BackblazeSettingsConfig } from '../models/BackblazeSettingsConfig';
import { BatchConfigBatchConfig } from '../models/BatchConfigBatchConfig';
import { BigqueryInputSecretsConfig } from '../models/BigqueryInputSecretsConfig';
import { BigqueryInputSettingsConfig } from '../models/BigqueryInputSettingsConfig';
import { BigquerySecretsConfig } from '../models/BigquerySecretsConfig';
import { BigquerySettingsConfig } from '../models/BigquerySettingsConfig';
import { BitwardenEventsSecretsConfig } from '../models/BitwardenEventsSecretsConfig';
import { BitwardenEventsSettingsConfig } from '../models/BitwardenEventsSettingsConfig';
import { BoxEventsSecretsConfig } from '../models/BoxEventsSecretsConfig';
import { BoxEventsSettingsConfig } from '../models/BoxEventsSettingsConfig';
import { BrinqaAuditLogsSecretsConfig } from '../models/BrinqaAuditLogsSecretsConfig';
import { BrinqaAuditLogsSettingsConfig } from '../models/BrinqaAuditLogsSettingsConfig';
import { BugsnagOrgEventsSecretsConfig } from '../models/BugsnagOrgEventsSecretsConfig';
import { BugsnagOrgEventsSettingsConfig } from '../models/BugsnagOrgEventsSettingsConfig';
import { BuildkiteAuditLogsSecretsConfig } from '../models/BuildkiteAuditLogsSecretsConfig';
import { BuildkiteAuditLogsSettingsConfig } from '../models/BuildkiteAuditLogsSettingsConfig';
import { BuildkiteGraphqlInputSecretsConfig } from '../models/BuildkiteGraphqlInputSecretsConfig';
import { BuildkiteGraphqlInputSettingsConfig } from '../models/BuildkiteGraphqlInputSettingsConfig';
import { CisaUserSettingsConfig } from '../models/CisaUserSettingsConfig';
import { CloudConfigurationFindingsSecretsConfig } from '../models/CloudConfigurationFindingsSecretsConfig';
import { CloudConfigurationFindingsSettingsConfig } from '../models/CloudConfigurationFindingsSettingsConfig';
import { CloudLogsSecretsConfig } from '../models/CloudLogsSecretsConfig';
import { CloudLogsSettingsConfig } from '../models/CloudLogsSettingsConfig';
import { CloudResourceInventorySecretsConfig } from '../models/CloudResourceInventorySecretsConfig';
import { CloudResourceInventorySettingsConfig } from '../models/CloudResourceInventorySettingsConfig';
import { CloudflareDdosAttackAnalyticsSecretsConfig } from '../models/CloudflareDdosAttackAnalyticsSecretsConfig';
import { CloudflareDdosAttackAnalyticsSettingsConfig } from '../models/CloudflareDdosAttackAnalyticsSettingsConfig';
import { CloudflareFirewallEventsSecretsConfig } from '../models/CloudflareFirewallEventsSecretsConfig';
import { CloudflareFirewallEventsSettingsConfig } from '../models/CloudflareFirewallEventsSettingsConfig';
import { CloudflareHttpRequestsSecretsConfig } from '../models/CloudflareHttpRequestsSecretsConfig';
import { CloudflareHttpRequestsSettingsConfig } from '../models/CloudflareHttpRequestsSettingsConfig';
import { CloudflareUrlScannerSecretsConfig } from '../models/CloudflareUrlScannerSecretsConfig';
import { CloudflareUrlScannerSettingsConfig } from '../models/CloudflareUrlScannerSettingsConfig';
import { CloudflareZeroTrustAccessRequestsSecretsConfig } from '../models/CloudflareZeroTrustAccessRequestsSecretsConfig';
import { CloudflareZeroTrustAccessRequestsSettingsConfig } from '../models/CloudflareZeroTrustAccessRequestsSettingsConfig';
import { CloudtrailSettingsConfig } from '../models/CloudtrailSettingsConfig';
import { ClumioAuditLogsSecretsConfig } from '../models/ClumioAuditLogsSecretsConfig';
import { ClumioAuditLogsSettingsConfig } from '../models/ClumioAuditLogsSettingsConfig';
import { ClumioConsolidatedAlertsSecretsConfig } from '../models/ClumioConsolidatedAlertsSecretsConfig';
import { ClumioConsolidatedAlertsSettingsConfig } from '../models/ClumioConsolidatedAlertsSettingsConfig';
import { CodaAuditEventsSecretsConfig } from '../models/CodaAuditEventsSecretsConfig';
import { CodaAuditEventsSettingsConfig } from '../models/CodaAuditEventsSettingsConfig';
import { CommonAuthConfig } from '../models/CommonAuthConfig';
import { CommonAuthType } from '../models/CommonAuthType';
import { CommonGitHubAppVariant } from '../models/CommonGitHubAppVariant';
import { CommonPersonalAccessTokenVariant } from '../models/CommonPersonalAccessTokenVariant';
import { CommunityEditionSecretsConfig } from '../models/CommunityEditionSecretsConfig';
import { CommunityEditionSettingsConfig } from '../models/CommunityEditionSettingsConfig';
import { CommunityTransformsInternalTransformConfig } from '../models/CommunityTransformsInternalTransformConfig';
import { CommunityTransformsInternalTransformMetadata } from '../models/CommunityTransformsInternalTransformMetadata';
import { CommunityTransformsInternalTransformsIndex } from '../models/CommunityTransformsInternalTransformsIndex';
import { ConvertTimestampArgumentsConfig } from '../models/ConvertTimestampArgumentsConfig';
import { ConvertTimestampTimestampFormat } from '../models/ConvertTimestampTimestampFormat';
import { CortexXsoarManagementLogsSecretsConfig } from '../models/CortexXsoarManagementLogsSecretsConfig';
import { CortexXsoarManagementLogsSettingsConfig } from '../models/CortexXsoarManagementLogsSettingsConfig';
import { CreateAPIKeyRequest } from '../models/CreateAPIKeyRequest';
import { CreateAlertRuleRequest } from '../models/CreateAlertRuleRequest';
import { CreateBillingAccountRequest } from '../models/CreateBillingAccountRequest';
import { CreateBillingAccountRoleRequest } from '../models/CreateBillingAccountRoleRequest';
import { CreateBillingAccountSubscriptionRequest } from '../models/CreateBillingAccountSubscriptionRequest';
import { CreateBillingAccountUserRoleRequest } from '../models/CreateBillingAccountUserRoleRequest';
import { CreateChildOrganizationRequest } from '../models/CreateChildOrganizationRequest';
import { CreateConnectionRequest } from '../models/CreateConnectionRequest';
import { CreateEnrichmentRequest } from '../models/CreateEnrichmentRequest';
import { CreateInputRequest } from '../models/CreateInputRequest';
import { CreateKeyValueIfKeyValueArgumentsConfig } from '../models/CreateKeyValueIfKeyValueArgumentsConfig';
import { CreateOutputRequest } from '../models/CreateOutputRequest';
import { CreatePipelineRequest } from '../models/CreatePipelineRequest';
import { CreateResourceSharesRequest } from '../models/CreateResourceSharesRequest';
import { CreateRoleRequest } from '../models/CreateRoleRequest';
import { CreateSecretRequest } from '../models/CreateSecretRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateTransformRecommendationRequest } from '../models/CreateTransformRecommendationRequest';
import { CreateTransformRequest } from '../models/CreateTransformRequest';
import { CriblHttpSecretsConfig } from '../models/CriblHttpSecretsConfig';
import { CriblHttpSettingsConfig } from '../models/CriblHttpSettingsConfig';
import { CustomerEventDataSecretsConfig } from '../models/CustomerEventDataSecretsConfig';
import { CustomerEventDataSettingsConfig } from '../models/CustomerEventDataSettingsConfig';
import { DatabricksDeltaTableAutoLoaderWriteMode } from '../models/DatabricksDeltaTableAutoLoaderWriteMode';
import { DatabricksDeltaTableCopyIntoWriteMode } from '../models/DatabricksDeltaTableCopyIntoWriteMode';
import { DatabricksDeltaTableSecretsConfig } from '../models/DatabricksDeltaTableSecretsConfig';
import { DatabricksDeltaTableSettingsConfig } from '../models/DatabricksDeltaTableSettingsConfig';
import { DatabricksDeltaTableWriteMode } from '../models/DatabricksDeltaTableWriteMode';
import { DatabricksDeltaTableZeroBusWriteMode } from '../models/DatabricksDeltaTableZeroBusWriteMode';
import { DatabricksLakehouseAutoLoaderWriteMode } from '../models/DatabricksLakehouseAutoLoaderWriteMode';
import { DatabricksLakehouseMonadManagedPipeline } from '../models/DatabricksLakehouseMonadManagedPipeline';
import { DatabricksLakehousePipelineConfig } from '../models/DatabricksLakehousePipelineConfig';
import { DatabricksLakehouseSettingsConfig } from '../models/DatabricksLakehouseSettingsConfig';
import { DatabricksLakehouseWriteMode } from '../models/DatabricksLakehouseWriteMode';
import { DatabricksLakehouseZeroBusWriteMode } from '../models/DatabricksLakehouseZeroBusWriteMode';
import { DatabricksLakewatchAutoLoaderPipelineWriteMode } from '../models/DatabricksLakewatchAutoLoaderPipelineWriteMode';
import { DatabricksLakewatchAutoLoaderWriteMode } from '../models/DatabricksLakewatchAutoLoaderWriteMode';
import { DatabricksLakewatchSettingsConfig } from '../models/DatabricksLakewatchSettingsConfig';
import { DatabricksLakewatchWriteMode } from '../models/DatabricksLakewatchWriteMode';
import { DatabricksLakewatchZeroBusWriteMode } from '../models/DatabricksLakewatchZeroBusWriteMode';
import { DatadogSecretsConfig } from '../models/DatadogSecretsConfig';
import { DatadogSettingsConfig } from '../models/DatadogSettingsConfig';
import { DefenderForEndpointAlertsSecretsConfig } from '../models/DefenderForEndpointAlertsSecretsConfig';
import { DefenderForEndpointAlertsSettingsConfig } from '../models/DefenderForEndpointAlertsSettingsConfig';
import { DelimitedDelimiterFormatter } from '../models/DelimitedDelimiterFormatter';
import { DropKeyArgumentsConfig } from '../models/DropKeyArgumentsConfig';
import { DropKeyWhereValueEqArgumentsConfig } from '../models/DropKeyWhereValueEqArgumentsConfig';
import { DropRecordWhereValueEqArgumentsConfig } from '../models/DropRecordWhereValueEqArgumentsConfig';
import { DuoSecurityActivityLogsSecretsConfig } from '../models/DuoSecurityActivityLogsSecretsConfig';
import { DuoSecurityActivityLogsSettingsConfig } from '../models/DuoSecurityActivityLogsSettingsConfig';
import { DuplicateKeyValueToKeyArgumentsConfig } from '../models/DuplicateKeyValueToKeyArgumentsConfig';
import { EksAuditLogsSecretsConfig } from '../models/EksAuditLogsSecretsConfig';
import { EksAuditLogsSettingsConfig } from '../models/EksAuditLogsSettingsConfig';
import { ElasticsearchAuthConfig } from '../models/ElasticsearchAuthConfig';
import { ElasticsearchCloudIdVariant } from '../models/ElasticsearchCloudIdVariant';
import { ElasticsearchConnectionConfig } from '../models/ElasticsearchConnectionConfig';
import { ElasticsearchSecretVariant } from '../models/ElasticsearchSecretVariant';
import { ElasticsearchSecretsConfig } from '../models/ElasticsearchSecretsConfig';
import { ElasticsearchSettingsConfig } from '../models/ElasticsearchSettingsConfig';
import { ElasticsearchUrlVariant } from '../models/ElasticsearchUrlVariant';
import { EncryptAESVariant } from '../models/EncryptAESVariant';
import { EncryptAgeVariant } from '../models/EncryptAgeVariant';
import { EncryptAlgorithmConfig } from '../models/EncryptAlgorithmConfig';
import { EncryptArgumentsConfig } from '../models/EncryptArgumentsConfig';
import { EndorLabsAuditLogsSecretsConfig } from '../models/EndorLabsAuditLogsSecretsConfig';
import { EndorLabsAuditLogsSettingsConfig } from '../models/EndorLabsAuditLogsSettingsConfig';
import { EnrichmentConnectorMeta } from '../models/EnrichmentConnectorMeta';
import { EnrichmentSandboxRequest } from '../models/EnrichmentSandboxRequest';
import { EntraIdSecretsConfig } from '../models/EntraIdSecretsConfig';
import { EntraIdSettingsConfig } from '../models/EntraIdSettingsConfig';
import { EventSecretsConfig } from '../models/EventSecretsConfig';
import { EventSettingsConfig } from '../models/EventSettingsConfig';
import { ExportTransformRequest } from '../models/ExportTransformRequest';
import { FlattenArgumentsConfig } from '../models/FlattenArgumentsConfig';
import { FlattenallArgumentsConfig } from '../models/FlattenallArgumentsConfig';
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { FormatterType } from '../models/FormatterType';
import { FullScansSecretsConfig } from '../models/FullScansSecretsConfig';
import { FullScansSettingsConfig } from '../models/FullScansSettingsConfig';
import { GenerateRecordRequest } from '../models/GenerateRecordRequest';
import { GeolocusSettingsConfig } from '../models/GeolocusSettingsConfig';
import { GetTokenRequest } from '../models/GetTokenRequest';
import { GithubActionsWorkflowLogsWebhookOrganizationScope } from '../models/GithubActionsWorkflowLogsWebhookOrganizationScope';
import { GithubActionsWorkflowLogsWebhookRepositoryScope } from '../models/GithubActionsWorkflowLogsWebhookRepositoryScope';
import { GithubActionsWorkflowLogsWebhookScopeConfig } from '../models/GithubActionsWorkflowLogsWebhookScopeConfig';
import { GithubActionsWorkflowLogsWebhookSettingsConfig } from '../models/GithubActionsWorkflowLogsWebhookSettingsConfig';
import { GithubComMonadIncCorePkgTypesModelsAlert } from '../models/GithubComMonadIncCorePkgTypesModelsAlert';
import { GithubComMonadIncCorePkgTypesModelsAlertStatus } from '../models/GithubComMonadIncCorePkgTypesModelsAlertStatus';
import { GithubComMonadIncCorePkgTypesModelsAuditResource } from '../models/GithubComMonadIncCorePkgTypesModelsAuditResource';
import { GithubComMonadIncCorePkgTypesModelsOrganization } from '../models/GithubComMonadIncCorePkgTypesModelsOrganization';
import { GithubComMonadIncCorePkgTypesModelsPermission } from '../models/GithubComMonadIncCorePkgTypesModelsPermission';
import { GithubComMonadIncCorePkgTypesModelsQuota } from '../models/GithubComMonadIncCorePkgTypesModelsQuota';
import { GithubComMonadIncCorePkgTypesModelsResourceReference } from '../models/GithubComMonadIncCorePkgTypesModelsResourceReference';
import { GithubComMonadIncCorePkgTypesModelsTimeRange } from '../models/GithubComMonadIncCorePkgTypesModelsTimeRange';
import { GithubComMonadIncCorePkgTypesModelsUser } from '../models/GithubComMonadIncCorePkgTypesModelsUser';
import { GitlabIssuesSecretsConfig } from '../models/GitlabIssuesSecretsConfig';
import { GitlabIssuesSettingsConfig } from '../models/GitlabIssuesSettingsConfig';
import { GkeAuditLogsSecretsConfig } from '../models/GkeAuditLogsSecretsConfig';
import { GkeAuditLogsSettingsConfig } from '../models/GkeAuditLogsSettingsConfig';
import { GoogleCloudStorageOutputSecretsConfig } from '../models/GoogleCloudStorageOutputSecretsConfig';
import { GoogleCloudStorageOutputSettingsConfig } from '../models/GoogleCloudStorageOutputSettingsConfig';
import { GoogleCloudStorageSecretsConfig } from '../models/GoogleCloudStorageSecretsConfig';
import { GoogleCloudStorageSettingsConfig } from '../models/GoogleCloudStorageSettingsConfig';
import { GoogleWorkspaceSecretsConfig } from '../models/GoogleWorkspaceSecretsConfig';
import { GoogleWorkspaceSettingsConfig } from '../models/GoogleWorkspaceSettingsConfig';
import { GreenhouseAuditLogsSecretsConfig } from '../models/GreenhouseAuditLogsSecretsConfig';
import { GreenhouseAuditLogsSettingsConfig } from '../models/GreenhouseAuditLogsSettingsConfig';
import { HttpHeaders } from '../models/HttpHeaders';
import { HttpPayloadStructure } from '../models/HttpPayloadStructure';
import { HttpSecretsConfig } from '../models/HttpSecretsConfig';
import { HttpSettingsConfig } from '../models/HttpSettingsConfig';
import { IndividualAlertsSecretsConfig } from '../models/IndividualAlertsSecretsConfig';
import { IndividualAlertsSettingsConfig } from '../models/IndividualAlertsSettingsConfig';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
import { InspectorSecretsConfig } from '../models/InspectorSecretsConfig';
import { InspectorSettingsConfig } from '../models/InspectorSettingsConfig';
import { IssuesSecretsConfig } from '../models/IssuesSecretsConfig';
import { IssuesSettingsConfig } from '../models/IssuesSettingsConfig';
import { JqArgumentsConfig } from '../models/JqArgumentsConfig';
import { JsonFormatType } from '../models/JsonFormatType';
import { JsonJsonFormatter } from '../models/JsonJsonFormatter';
import { KafkaAcks } from '../models/KafkaAcks';
import { KafkaCompressionType } from '../models/KafkaCompressionType';
import { KafkaKafkaHeader } from '../models/KafkaKafkaHeader';
import { KafkaSaslMechanism } from '../models/KafkaSaslMechanism';
import { KafkaSecretsConfig } from '../models/KafkaSecretsConfig';
import { KafkaSecurityProtocol } from '../models/KafkaSecurityProtocol';
import { KafkaSettingsConfig } from '../models/KafkaSettingsConfig';
import { KoiAuditLogsSecretsConfig } from '../models/KoiAuditLogsSecretsConfig';
import { KoiAuditLogsSettingsConfig } from '../models/KoiAuditLogsSettingsConfig';
import { KvLookupOutputSettingsConfig } from '../models/KvLookupOutputSettingsConfig';
import { KvLookupSettingsConfig } from '../models/KvLookupSettingsConfig';
import { KvlookupGetMetadataResponse } from '../models/KvlookupGetMetadataResponse';
import { KvlookupKVEntry } from '../models/KvlookupKVEntry';
import { LeafconditionsInfo } from '../models/LeafconditionsInfo';
import { LogAnalyticsQuerySecretsConfig } from '../models/LogAnalyticsQuerySecretsConfig';
import { LogAnalyticsQuerySettingsConfig } from '../models/LogAnalyticsQuerySettingsConfig';
import { LookerAuditLogsSecretsConfig } from '../models/LookerAuditLogsSecretsConfig';
import { LookerAuditLogsSettingsConfig } from '../models/LookerAuditLogsSettingsConfig';
import { MaskArgumentsConfig } from '../models/MaskArgumentsConfig';
import { MaskDeterministicVariant } from '../models/MaskDeterministicVariant';
import { MaskModeConfig } from '../models/MaskModeConfig';
import { MathMultiplyWithValueArgumentsConfig } from '../models/MathMultiplyWithValueArgumentsConfig';
import { MerakiConfigLogsSecretsConfig } from '../models/MerakiConfigLogsSecretsConfig';
import { MerakiConfigLogsSettingsConfig } from '../models/MerakiConfigLogsSettingsConfig';
import { Microsoft365GenericSecretsConfig } from '../models/Microsoft365GenericSecretsConfig';
import { Microsoft365GenericSettingsConfig } from '../models/Microsoft365GenericSettingsConfig';
import { ModelsAPIKey } from '../models/ModelsAPIKey';
import { ModelsAPIKeyList } from '../models/ModelsAPIKeyList';
import { ModelsAPIKeyWithToken } from '../models/ModelsAPIKeyWithToken';
import { ModelsAPILogActor } from '../models/ModelsAPILogActor';
import { ModelsAPILogActorRole } from '../models/ModelsAPILogActorRole';
import { ModelsAlertRule } from '../models/ModelsAlertRule';
import { ModelsAlertRuleList } from '../models/ModelsAlertRuleList';
import { ModelsAlertState } from '../models/ModelsAlertState';
import { ModelsAuditAction } from '../models/ModelsAuditAction';
import { ModelsAuditLogHistogramBucket } from '../models/ModelsAuditLogHistogramBucket';
import { ModelsBillingAccount } from '../models/ModelsBillingAccount';
import { ModelsBillingAccountList } from '../models/ModelsBillingAccountList';
import { ModelsBillingAccountPermission } from '../models/ModelsBillingAccountPermission';
import { ModelsBillingAccountRole } from '../models/ModelsBillingAccountRole';
import { ModelsBillingAccountRoleUser } from '../models/ModelsBillingAccountRoleUser';
import { ModelsBillingProduct } from '../models/ModelsBillingProduct';
import { ModelsBillingProductList } from '../models/ModelsBillingProductList';
import { ModelsBillingProductType } from '../models/ModelsBillingProductType';
import { ModelsBillingType } from '../models/ModelsBillingType';
import { ModelsComponentReference } from '../models/ModelsComponentReference';
import { ModelsComponentType } from '../models/ModelsComponentType';
import { ModelsConditionEvaluatable } from '../models/ModelsConditionEvaluatable';
import { ModelsConditionOperator } from '../models/ModelsConditionOperator';
import { ModelsConnection } from '../models/ModelsConnection';
import { ModelsConnectionList } from '../models/ModelsConnectionList';
import { ModelsConnectionSessionSettings } from '../models/ModelsConnectionSessionSettings';
import { ModelsConnectorInfo } from '../models/ModelsConnectorInfo';
import { ModelsConnectorMeta } from '../models/ModelsConnectorMeta';
import { ModelsCursorPagination } from '../models/ModelsCursorPagination';
import { ModelsDataUsage } from '../models/ModelsDataUsage';
import { ModelsElseAction } from '../models/ModelsElseAction';
import { ModelsEnrichment } from '../models/ModelsEnrichment';
import { ModelsEnrichmentConfig } from '../models/ModelsEnrichmentConfig';
import { ModelsEnrichmentList } from '../models/ModelsEnrichmentList';
import { ModelsFeatureFlag } from '../models/ModelsFeatureFlag';
import { ModelsInput } from '../models/ModelsInput';
import { ModelsInputConfig } from '../models/ModelsInputConfig';
import { ModelsInputConnectorCategory } from '../models/ModelsInputConnectorCategory';
import { ModelsInputList } from '../models/ModelsInputList';
import { ModelsInputRateLimit } from '../models/ModelsInputRateLimit';
import { ModelsManagedBy } from '../models/ModelsManagedBy';
import { ModelsNodeBackpressure } from '../models/ModelsNodeBackpressure';
import { ModelsNodeComponent } from '../models/ModelsNodeComponent';
import { ModelsNodeSharedResource } from '../models/ModelsNodeSharedResource';
import { ModelsOrganizationAuditLog } from '../models/ModelsOrganizationAuditLog';
import { ModelsOrganizationAuditLogHistogram } from '../models/ModelsOrganizationAuditLogHistogram';
import { ModelsOrganizationAuditLogList } from '../models/ModelsOrganizationAuditLogList';
import { ModelsOrganizationList } from '../models/ModelsOrganizationList';
import { ModelsOrganizationUser } from '../models/ModelsOrganizationUser';
import { ModelsOrganizationUserList } from '../models/ModelsOrganizationUserList';
import { ModelsOutput } from '../models/ModelsOutput';
import { ModelsOutputConfig } from '../models/ModelsOutputConfig';
import { ModelsOutputConnectorCategory } from '../models/ModelsOutputConnectorCategory';
import { ModelsOutputList } from '../models/ModelsOutputList';
import { ModelsPagination } from '../models/ModelsPagination';
import { ModelsPermissionList } from '../models/ModelsPermissionList';
import { ModelsPipeline } from '../models/ModelsPipeline';
import { ModelsPipelineConfigV2 } from '../models/ModelsPipelineConfigV2';
import { ModelsPipelineEdge } from '../models/ModelsPipelineEdge';
import { ModelsPipelineList } from '../models/ModelsPipelineList';
import { ModelsPipelineMetrics } from '../models/ModelsPipelineMetrics';
import { ModelsPipelineMetricsValue } from '../models/ModelsPipelineMetricsValue';
import { ModelsPipelineNode } from '../models/ModelsPipelineNode';
import { ModelsPipelineNodeStatus } from '../models/ModelsPipelineNodeStatus';
import { ModelsPipelinePurgeResponse } from '../models/ModelsPipelinePurgeResponse';
import { ModelsPipelineRetentionPolicy } from '../models/ModelsPipelineRetentionPolicy';
import { ModelsPipelineStatus } from '../models/ModelsPipelineStatus';
import { ModelsPipelineStatusValue } from '../models/ModelsPipelineStatusValue';
import { ModelsPipelineStreamInfo } from '../models/ModelsPipelineStreamInfo';
import { ModelsProgressEntries } from '../models/ModelsProgressEntries';
import { ModelsProgressEntry } from '../models/ModelsProgressEntry';
import { ModelsProgressLabel } from '../models/ModelsProgressLabel';
import { ModelsQuotaAction } from '../models/ModelsQuotaAction';
import { ModelsQuotaLimitType } from '../models/ModelsQuotaLimitType';
import { ModelsQuotaLimitUnit } from '../models/ModelsQuotaLimitUnit';
import { ModelsQuotaList } from '../models/ModelsQuotaList';
import { ModelsQuotaTimeframe } from '../models/ModelsQuotaTimeframe';
import { ModelsRateUnit } from '../models/ModelsRateUnit';
import { ModelsReference } from '../models/ModelsReference';
import { ModelsReferences } from '../models/ModelsReferences';
import { ModelsResourceShare } from '../models/ModelsResourceShare';
import { ModelsResourceShareChangeSet } from '../models/ModelsResourceShareChangeSet';
import { ModelsResourceShareTarget } from '../models/ModelsResourceShareTarget';
import { ModelsResourceShareTargetList } from '../models/ModelsResourceShareTargetList';
import { ModelsResourceShareWithUsage } from '../models/ModelsResourceShareWithUsage';
import { ModelsResourceShareWithUsageList } from '../models/ModelsResourceShareWithUsageList';
import { ModelsRoleWithPermissions } from '../models/ModelsRoleWithPermissions';
import { ModelsRoleWithPermissionsList } from '../models/ModelsRoleWithPermissionsList';
import { ModelsSchemaDetection } from '../models/ModelsSchemaDetection';
import { ModelsSecret } from '../models/ModelsSecret';
import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { ModelsSecretWithComponentsList } from '../models/ModelsSecretWithComponentsList';
import { ModelsShareDetails } from '../models/ModelsShareDetails';
import { ModelsStorageTypeCostConfig } from '../models/ModelsStorageTypeCostConfig';
import { ModelsStorageTypeCostEntry } from '../models/ModelsStorageTypeCostEntry';
import { ModelsStorageTypeCostSummary } from '../models/ModelsStorageTypeCostSummary';
import { ModelsStorageTypeOutputDetail } from '../models/ModelsStorageTypeOutputDetail';
import { ModelsStorageTypeSummaryResponse } from '../models/ModelsStorageTypeSummaryResponse';
import { ModelsStorageTypeTimeSeries } from '../models/ModelsStorageTypeTimeSeries';
import { ModelsStorageTypeTimeSeriesResponse } from '../models/ModelsStorageTypeTimeSeriesResponse';
import { ModelsSupportedFeatures } from '../models/ModelsSupportedFeatures';
import { ModelsTransform } from '../models/ModelsTransform';
import { ModelsTransformConditional } from '../models/ModelsTransformConditional';
import { ModelsTransformConfig } from '../models/ModelsTransformConfig';
import { ModelsTransformList } from '../models/ModelsTransformList';
import { ModelsTransformOperation } from '../models/ModelsTransformOperation';
import { ModelsTransformsRepositoryList } from '../models/ModelsTransformsRepositoryList';
import { ModelsTransformsRepositoryTransform } from '../models/ModelsTransformsRepositoryTransform';
import { ModelsUserAuthProvider } from '../models/ModelsUserAuthProvider';
import { ModelsUserOrganization } from '../models/ModelsUserOrganization';
import { ModelsUserOrganizationList } from '../models/ModelsUserOrganizationList';
import { ModelsUserRoleWithPermissions } from '../models/ModelsUserRoleWithPermissions';
import { MonadGraphqlInputVariable } from '../models/MonadGraphqlInputVariable';
import { MonadLogSettingsConfig } from '../models/MonadLogSettingsConfig';
import { MutateTypeArgumentsConfig } from '../models/MutateTypeArgumentsConfig';
import { MutateValueWhereKeyEqAndValueEqArgumentsConfig } from '../models/MutateValueWhereKeyEqAndValueEqArgumentsConfig';
import { MutateValueWhereKeyEqArgumentsConfig } from '../models/MutateValueWhereKeyEqArgumentsConfig';
import { NextGenSiemSecretsConfig } from '../models/NextGenSiemSecretsConfig';
import { NextGenSiemSettingsConfig } from '../models/NextGenSiemSettingsConfig';
import { ObjectStorageInputSecretsConfig } from '../models/ObjectStorageInputSecretsConfig';
import { ObjectStorageInputSettingsConfig } from '../models/ObjectStorageInputSettingsConfig';
import { ObjectStorageSecretsConfig } from '../models/ObjectStorageSecretsConfig';
import { ObjectStorageSettingsConfig } from '../models/ObjectStorageSettingsConfig';
import { OfflineenrollmentlogsSecretsConfig } from '../models/OfflineenrollmentlogsSecretsConfig';
import { OfflineenrollmentlogsSettingsConfig } from '../models/OfflineenrollmentlogsSettingsConfig';
import { OneloginEventsSecretsConfig } from '../models/OneloginEventsSecretsConfig';
import { OneloginEventsSettingsConfig } from '../models/OneloginEventsSettingsConfig';
import { OpalEventsSecretsConfig } from '../models/OpalEventsSecretsConfig';
import { OpalEventsSettingsConfig } from '../models/OpalEventsSettingsConfig';
import { OpenaiAuditLogsSettingsConfig } from '../models/OpenaiAuditLogsSettingsConfig';
import { OpensearchAuthMode } from '../models/OpensearchAuthMode';
import { OpensearchSecretsConfig } from '../models/OpensearchSecretsConfig';
import { OpensearchSettingsConfig } from '../models/OpensearchSettingsConfig';
import { OperationInformation } from '../models/OperationInformation';
import { OperationLogsSecretsConfig } from '../models/OperationLogsSecretsConfig';
import { OperationLogsSettingsConfig } from '../models/OperationLogsSettingsConfig';
import { OracleSettingsConfig } from '../models/OracleSettingsConfig';
import { OrgAuditLogsSecretsConfig } from '../models/OrgAuditLogsSecretsConfig';
import { OrgAuditLogsSettingsConfig } from '../models/OrgAuditLogsSettingsConfig';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
import { OwnbackupAccountEventsSecretsConfig } from '../models/OwnbackupAccountEventsSecretsConfig';
import { OwnbackupAccountEventsSettingsConfig } from '../models/OwnbackupAccountEventsSettingsConfig';
import { PagerdutyAlertsConfig } from '../models/PagerdutyAlertsConfig';
import { PagerdutyAuditRecordsSecretsConfig } from '../models/PagerdutyAuditRecordsSecretsConfig';
import { PagerdutyAuditRecordsSettingsConfig } from '../models/PagerdutyAuditRecordsSettingsConfig';
import { PagerdutyEventType } from '../models/PagerdutyEventType';
import { PagerdutySecretsConfig } from '../models/PagerdutySecretsConfig';
import { PagerdutySettingsConfig } from '../models/PagerdutySettingsConfig';
import { PagerdutySummaryConfig } from '../models/PagerdutySummaryConfig';
import { PaloAltoDataSecurityAlertsSecretsConfig } from '../models/PaloAltoDataSecurityAlertsSecretsConfig';
import { PaloAltoDataSecurityAlertsSettingsConfig } from '../models/PaloAltoDataSecurityAlertsSettingsConfig';
import { PantherSecretsConfig } from '../models/PantherSecretsConfig';
import { PantherSettingsConfig } from '../models/PantherSettingsConfig';
import { ParquetParquetFormatter } from '../models/ParquetParquetFormatter';
import { PersonaSettingsConfig } from '../models/PersonaSettingsConfig';
import { PlaidWebhooksSecretsConfig } from '../models/PlaidWebhooksSecretsConfig';
import { PlaidWebhooksSettingsConfig } from '../models/PlaidWebhooksSettingsConfig';
import { PolymerSecretsConfig } from '../models/PolymerSecretsConfig';
import { PolymerSettingsConfig } from '../models/PolymerSettingsConfig';
import { PostgresqlSecretsConfig } from '../models/PostgresqlSecretsConfig';
import { PostgresqlSettingsConfig } from '../models/PostgresqlSettingsConfig';
import { PostmanAuditLogsSecretsConfig } from '../models/PostmanAuditLogsSecretsConfig';
import { PostmanAuditLogsSettingsConfig } from '../models/PostmanAuditLogsSettingsConfig';
import { PrometheusAuthConfig } from '../models/PrometheusAuthConfig';
import { PrometheusBasicVariant } from '../models/PrometheusBasicVariant';
import { PrometheusBearerVariant } from '../models/PrometheusBearerVariant';
import { PrometheusFieldMetricVariant } from '../models/PrometheusFieldMetricVariant';
import { PrometheusMetricNameConfig } from '../models/PrometheusMetricNameConfig';
import { PrometheusSettingsConfig } from '../models/PrometheusSettingsConfig';
import { PrometheusStaticMetricVariant } from '../models/PrometheusStaticMetricVariant';
import { PubsubSecretsConfig } from '../models/PubsubSecretsConfig';
import { PubsubSettingsConfig } from '../models/PubsubSettingsConfig';
import { RedshiftAuditLogsSettingsConfig } from '../models/RedshiftAuditLogsSettingsConfig';
import { RenameKeyArgumentsConfig } from '../models/RenameKeyArgumentsConfig';
import { RenameKeyWhereValueEqArgumentsConfig } from '../models/RenameKeyWhereValueEqArgumentsConfig';
import { ReplaceEnrichmentRequest } from '../models/ReplaceEnrichmentRequest';
import { ReplaceInputRequest } from '../models/ReplaceInputRequest';
import { ReplaceOutputRequest } from '../models/ReplaceOutputRequest';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RootlyAuditLogsSecretsConfig } from '../models/RootlyAuditLogsSecretsConfig';
import { RootlyAuditLogsSettingsConfig } from '../models/RootlyAuditLogsSettingsConfig';
import { RoutesAddUserToOrganizationRequest } from '../models/RoutesAddUserToOrganizationRequest';
import { RoutesCreateOrganizationRequest } from '../models/RoutesCreateOrganizationRequest';
import { RoutesCreateTransformRequest } from '../models/RoutesCreateTransformRequest';
import { RoutesGetInputResponse } from '../models/RoutesGetInputResponse';
import { RoutesGetOutputResponse } from '../models/RoutesGetOutputResponse';
import { RoutesGetTransformResponse } from '../models/RoutesGetTransformResponse';
import { RoutesInviteUserToOrganizationRequest } from '../models/RoutesInviteUserToOrganizationRequest';
import { RoutesLoginRequest } from '../models/RoutesLoginRequest';
import { RoutesResourceMetadata } from '../models/RoutesResourceMetadata';
import { RoutesTransformConfig } from '../models/RoutesTransformConfig';
import { RoutesTransformOperation } from '../models/RoutesTransformOperation';
import { RoutesTransformOperationArguments } from '../models/RoutesTransformOperationArguments';
import { RoutesUpdateOrganizationRequest } from '../models/RoutesUpdateOrganizationRequest';
import { RoutesUpdatePipelineRequest } from '../models/RoutesUpdatePipelineRequest';
import { RoutesUpdateTransformRequest } from '../models/RoutesUpdateTransformRequest';
import { RoutesUpdateUserInOrganizationRequest } from '../models/RoutesUpdateUserInOrganizationRequest';
import { RoutesUserAuthProvider } from '../models/RoutesUserAuthProvider';
import { RoutesUserWithRoles } from '../models/RoutesUserWithRoles';
import { RoutesV2ApplyConditionRequest } from '../models/RoutesV2ApplyConditionRequest';
import { RoutesV2ApplyConditionResponse } from '../models/RoutesV2ApplyConditionResponse';
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
import { RoutesV2PatchPipelineEdgeRequest } from '../models/RoutesV2PatchPipelineEdgeRequest';
import { RoutesV2PipelineMetric } from '../models/RoutesV2PipelineMetric';
import { RoutesV2PipelineRequestEdge } from '../models/RoutesV2PipelineRequestEdge';
import { RoutesV2PipelineRequestNode } from '../models/RoutesV2PipelineRequestNode';
import { RoutesV2PipelineStatus } from '../models/RoutesV2PipelineStatus';
import { RoutesV2PipelineWithStatus } from '../models/RoutesV2PipelineWithStatus';
import { RoutesV2PutInputRequest } from '../models/RoutesV2PutInputRequest';
import { RoutesV2PutOutputRequest } from '../models/RoutesV2PutOutputRequest';
import { RoutesV2SecretResponse } from '../models/RoutesV2SecretResponse';
import { RoutesV2SetStorageTypeCostEntry } from '../models/RoutesV2SetStorageTypeCostEntry';
import { RoutesV2SetStorageTypeCostRequest } from '../models/RoutesV2SetStorageTypeCostRequest';
import { RoutesV2StorageTypeDetailsResponse } from '../models/RoutesV2StorageTypeDetailsResponse';
import { RoutesV2StorageTypeOutputDetailResponse } from '../models/RoutesV2StorageTypeOutputDetailResponse';
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
import { RoutesV3AlertList } from '../models/RoutesV3AlertList';
import { RoutesV3CreateAlertRuleRequest } from '../models/RoutesV3CreateAlertRuleRequest';
import { RoutesV3CreateChildOrganizationRequest } from '../models/RoutesV3CreateChildOrganizationRequest';
import { RoutesV3CreateConnectionRequest } from '../models/RoutesV3CreateConnectionRequest';
import { RoutesV3CreateConnectionRequestSaml } from '../models/RoutesV3CreateConnectionRequestSaml';
import { RoutesV3CreateEnrichmentRequest } from '../models/RoutesV3CreateEnrichmentRequest';
import { RoutesV3CreateSessionRequest } from '../models/RoutesV3CreateSessionRequest';
import { RoutesV3CreateSessionResponse } from '../models/RoutesV3CreateSessionResponse';
import { RoutesV3EnrichmentSandboxRequest } from '../models/RoutesV3EnrichmentSandboxRequest';
import { RoutesV3EnrichmentSandboxResponse } from '../models/RoutesV3EnrichmentSandboxResponse';
import { RoutesV3FieldStateResponse } from '../models/RoutesV3FieldStateResponse';
import { RoutesV3FieldUpdation } from '../models/RoutesV3FieldUpdation';
import { RoutesV3GetEnrichmentResponse } from '../models/RoutesV3GetEnrichmentResponse';
import { RoutesV3GetFeatureFlagResponse } from '../models/RoutesV3GetFeatureFlagResponse';
import { RoutesV3ImportTransformResponse } from '../models/RoutesV3ImportTransformResponse';
import { RoutesV3MFAStatusResponse } from '../models/RoutesV3MFAStatusResponse';
import { RoutesV3OptimizerType } from '../models/RoutesV3OptimizerType';
import { RoutesV3PutEnrichmentRequest } from '../models/RoutesV3PutEnrichmentRequest';
import { RoutesV3ResourceUsageListResponse } from '../models/RoutesV3ResourceUsageListResponse';
import { RoutesV3ResourceUsageWithMetadata } from '../models/RoutesV3ResourceUsageWithMetadata';
import { RoutesV3SchemaHistoryEntryResponse } from '../models/RoutesV3SchemaHistoryEntryResponse';
import { RoutesV3SchemaStateResponse } from '../models/RoutesV3SchemaStateResponse';
import { RoutesV3SecurityDataAnalysis } from '../models/RoutesV3SecurityDataAnalysis';
import { RoutesV3ShareChangesRequest } from '../models/RoutesV3ShareChangesRequest';
import { RoutesV3SharedResourceListResponse } from '../models/RoutesV3SharedResourceListResponse';
import { RoutesV3SharedResourceWithMetadata } from '../models/RoutesV3SharedResourceWithMetadata';
import { RoutesV3SuccessResponse } from '../models/RoutesV3SuccessResponse';
import { RoutesV3Summary } from '../models/RoutesV3Summary';
import { RoutesV3TestEnrichmentConnectionRequest } from '../models/RoutesV3TestEnrichmentConnectionRequest';
import { RoutesV3TransformConfig } from '../models/RoutesV3TransformConfig';
import { RoutesV3TransformOperation } from '../models/RoutesV3TransformOperation';
import { RoutesV3TransformOperationWithRationale } from '../models/RoutesV3TransformOperationWithRationale';
import { RoutesV3TransformRecommendationRequest } from '../models/RoutesV3TransformRecommendationRequest';
import { RoutesV3UpdateAlertRuleRequest } from '../models/RoutesV3UpdateAlertRuleRequest';
import { RoutesV3UpdateChildOrganizationRequest } from '../models/RoutesV3UpdateChildOrganizationRequest';
import { RoutesV3UpdateConnectionRequest } from '../models/RoutesV3UpdateConnectionRequest';
import { RoutesV3UpdateEnrichmentRequest } from '../models/RoutesV3UpdateEnrichmentRequest';
import { S3SecretsConfig } from '../models/S3SecretsConfig';
import { S3SettingsConfig } from '../models/S3SettingsConfig';
import { ScannerAuthConfig } from '../models/ScannerAuthConfig';
import { ScannerDelimitedVariant } from '../models/ScannerDelimitedVariant';
import { ScannerFormatConfig } from '../models/ScannerFormatConfig';
import { ScannerIAMRoleVariant } from '../models/ScannerIAMRoleVariant';
import { ScannerJSONVariant } from '../models/ScannerJSONVariant';
import { ScannerParquetVariant } from '../models/ScannerParquetVariant';
import { ScannerSettingsConfig } from '../models/ScannerSettingsConfig';
import { ScannerStaticCredentialsVariant } from '../models/ScannerStaticCredentialsVariant';
import { SecretProcessesorEnrichmentConfig } from '../models/SecretProcessesorEnrichmentConfig';
import { SecretProcessesorEnrichmentConfigSecrets } from '../models/SecretProcessesorEnrichmentConfigSecrets';
import { SecretProcessesorEnrichmentConfigSettings } from '../models/SecretProcessesorEnrichmentConfigSettings';
import { SecretProcessesorInputConfig } from '../models/SecretProcessesorInputConfig';
import { SecretProcessesorInputConfigSecrets } from '../models/SecretProcessesorInputConfigSecrets';
import { SecretProcessesorInputConfigSettings } from '../models/SecretProcessesorInputConfigSettings';
import { SecretProcessesorOutputConfig } from '../models/SecretProcessesorOutputConfig';
import { SecretProcessesorOutputConfigSecrets } from '../models/SecretProcessesorOutputConfigSecrets';
import { SecretProcessesorOutputConfigSettings } from '../models/SecretProcessesorOutputConfigSettings';
import { SecurityLakeSettingsConfig } from '../models/SecurityLakeSettingsConfig';
import { SecurityLakeSourceAccountDetails } from '../models/SecurityLakeSourceAccountDetails';
import { SemgrepCodeFindingsSecretsConfig } from '../models/SemgrepCodeFindingsSecretsConfig';
import { SemgrepCodeFindingsSettingsConfig } from '../models/SemgrepCodeFindingsSettingsConfig';
import { SemgrepSupplyChainFindingsSecretsConfig } from '../models/SemgrepSupplyChainFindingsSecretsConfig';
import { SemgrepSupplyChainFindingsSettingsConfig } from '../models/SemgrepSupplyChainFindingsSettingsConfig';
import { SentinelSecretsConfig } from '../models/SentinelSecretsConfig';
import { SentinelSettingsConfig } from '../models/SentinelSettingsConfig';
import { SentryOrgAuditLogsSecretsConfig } from '../models/SentryOrgAuditLogsSecretsConfig';
import { SentryOrgAuditLogsSettingsConfig } from '../models/SentryOrgAuditLogsSettingsConfig';
import { SetStorageTypeCostRequest } from '../models/SetStorageTypeCostRequest';
import { SlackAuthConfig } from '../models/SlackAuthConfig';
import { SlackBotTokenVariant } from '../models/SlackBotTokenVariant';
import { SlackEnterpriseAuditLogsSecretsConfig } from '../models/SlackEnterpriseAuditLogsSecretsConfig';
import { SlackEnterpriseAuditLogsSettingsConfig } from '../models/SlackEnterpriseAuditLogsSettingsConfig';
import { SlackSettingsConfig } from '../models/SlackSettingsConfig';
import { SlackWebhookVariant } from '../models/SlackWebhookVariant';
import { SnowflakeOutputSecretsConfig } from '../models/SnowflakeOutputSecretsConfig';
import { SnowflakeOutputSettingsConfig } from '../models/SnowflakeOutputSettingsConfig';
import { SnowflakeSnowpipeStreamingSettingsConfig } from '../models/SnowflakeSnowpipeStreamingSettingsConfig';
import { SnykIssuesSecretsConfig } from '../models/SnykIssuesSecretsConfig';
import { SnykIssuesSettingsConfig } from '../models/SnykIssuesSettingsConfig';
import { SnykTargetsSecretsConfig } from '../models/SnykTargetsSecretsConfig';
import { SnykTargetsSettingsConfig } from '../models/SnykTargetsSettingsConfig';
import { SplunkSecretsConfig } from '../models/SplunkSecretsConfig';
import { SplunkSettingsConfig } from '../models/SplunkSettingsConfig';
import { SqsS3BaseFilterVariant } from '../models/SqsS3BaseFilterVariant';
import { SqsS3BaseKeyFilter } from '../models/SqsS3BaseKeyFilter';
import { SqsS3BaseKeyFilterMode } from '../models/SqsS3BaseKeyFilterMode';
import { SqsS3BaseKeyFilterOperator } from '../models/SqsS3BaseKeyFilterOperator';
import { SqsS3BaseKeyFilterType } from '../models/SqsS3BaseKeyFilterType';
import { SumologicSecretsConfig } from '../models/SumologicSecretsConfig';
import { SumologicSettingsConfig } from '../models/SumologicSettingsConfig';
import { SumologicSourceMetadata } from '../models/SumologicSourceMetadata';
import { SumologicSumoField } from '../models/SumologicSumoField';
import { SyntheticDataCustomSettingsConfig } from '../models/SyntheticDataCustomSettingsConfig';
import { SyntheticDataSettingsConfig } from '../models/SyntheticDataSettingsConfig';
import { TaniumGraphqlInputSecretsConfig } from '../models/TaniumGraphqlInputSecretsConfig';
import { TaniumGraphqlInputSettingsConfig } from '../models/TaniumGraphqlInputSettingsConfig';
import { TeamAccessLogsSecretsConfig } from '../models/TeamAccessLogsSecretsConfig';
import { TeamAccessLogsSettingsConfig } from '../models/TeamAccessLogsSettingsConfig';
import { TeamIntegrationLogsSecretsConfig } from '../models/TeamIntegrationLogsSecretsConfig';
import { TeamIntegrationLogsSettingsConfig } from '../models/TeamIntegrationLogsSettingsConfig';
import { TelephonyLogsSecretsConfig } from '../models/TelephonyLogsSecretsConfig';
import { TelephonyLogsSettingsConfig } from '../models/TelephonyLogsSettingsConfig';
import { TenableAssetsCronSecretsConfig } from '../models/TenableAssetsCronSecretsConfig';
import { TenableAssetsCronSettingsConfig } from '../models/TenableAssetsCronSettingsConfig';
import { TenableAssetsSecretsConfig } from '../models/TenableAssetsSecretsConfig';
import { TenableAssetsSettingsConfig } from '../models/TenableAssetsSettingsConfig';
import { TenableVulnerabilitiesCronSecretsConfig } from '../models/TenableVulnerabilitiesCronSecretsConfig';
import { TenableVulnerabilitiesCronSettingsConfig } from '../models/TenableVulnerabilitiesCronSettingsConfig';
import { TenableVulnerabilitiesSecretsConfig } from '../models/TenableVulnerabilitiesSecretsConfig';
import { TenableVulnerabilitiesSettingsConfig } from '../models/TenableVulnerabilitiesSettingsConfig';
import { TestEnrichmentConnectionRequest } from '../models/TestEnrichmentConnectionRequest';
import { TestInputConnectionRequest } from '../models/TestInputConnectionRequest';
import { TestOutputConnectionRequest } from '../models/TestOutputConnectionRequest';
import { TinesAuditLogsSecretsConfig } from '../models/TinesAuditLogsSecretsConfig';
import { TinesAuditLogsSettingsConfig } from '../models/TinesAuditLogsSettingsConfig';
import { TinesEventsLogsSecretsConfig } from '../models/TinesEventsLogsSecretsConfig';
import { TinesEventsLogsSettingsConfig } from '../models/TinesEventsLogsSettingsConfig';
import { TwilioEventsSecretsConfig } from '../models/TwilioEventsSecretsConfig';
import { TwilioEventsSettingsConfig } from '../models/TwilioEventsSettingsConfig';
import { TwilioSendgridEmailActivitySecretsConfig } from '../models/TwilioSendgridEmailActivitySecretsConfig';
import { TwilioSendgridEmailActivitySettingsConfig } from '../models/TwilioSendgridEmailActivitySettingsConfig';
import { TypesStringComparison } from '../models/TypesStringComparison';
import { TypesStringFilter } from '../models/TypesStringFilter';
import { UniversalSecretsConfig } from '../models/UniversalSecretsConfig';
import { UniversalSettingsConfig } from '../models/UniversalSettingsConfig';
import { UpdateAPIKeyRequest } from '../models/UpdateAPIKeyRequest';
import { UpdateAlertRuleRequest } from '../models/UpdateAlertRuleRequest';
import { UpdateBillingAccountRequest } from '../models/UpdateBillingAccountRequest';
import { UpdateBillingAccountRoleRequest } from '../models/UpdateBillingAccountRoleRequest';
import { UpdateChildOrganizationRequest } from '../models/UpdateChildOrganizationRequest';
import { UpdateConnectionRequest } from '../models/UpdateConnectionRequest';
import { UpdateEnrichmentRequest } from '../models/UpdateEnrichmentRequest';
import { UpdateInputRequest } from '../models/UpdateInputRequest';
import { UpdateOutputRequest } from '../models/UpdateOutputRequest';
import { UpdatePipelineEdgeRequest } from '../models/UpdatePipelineEdgeRequest';
import { UpdatePipelineRequest } from '../models/UpdatePipelineRequest';
import { UpdatePipelineV1Request } from '../models/UpdatePipelineV1Request';
import { UpdateRoleRequest } from '../models/UpdateRoleRequest';
import { UtcTimestampArgumentsConfig } from '../models/UtcTimestampArgumentsConfig';
import { UtcTimestampTimestampFormat } from '../models/UtcTimestampTimestampFormat';
import { VercelUserEventsSecretsConfig } from '../models/VercelUserEventsSecretsConfig';
import { VercelUserEventsSettingsConfig } from '../models/VercelUserEventsSettingsConfig';
import { VoltioAuditLogsSecretsConfig } from '../models/VoltioAuditLogsSecretsConfig';
import { VoltioAuditLogsSettingsConfig } from '../models/VoltioAuditLogsSettingsConfig';
import { VulnerabilityFindingsSecretsConfig } from '../models/VulnerabilityFindingsSecretsConfig';
import { VulnerabilityFindingsSettingsConfig } from '../models/VulnerabilityFindingsSettingsConfig';
import { WizAssetStatus } from '../models/WizAssetStatus';
import { WizAssetType } from '../models/WizAssetType';
import { WizAuditLogsSecretsConfig } from '../models/WizAuditLogsSecretsConfig';
import { WizAuditLogsSettingsConfig } from '../models/WizAuditLogsSettingsConfig';
import { WizCloudPlatform } from '../models/WizCloudPlatform';
import { WizDetectionMethod } from '../models/WizDetectionMethod';
import { WizEntityType } from '../models/WizEntityType';
import { WizIssueSeverity } from '../models/WizIssueSeverity';
import { WizIssueStatus } from '../models/WizIssueStatus';
import { WizIssueType } from '../models/WizIssueType';
import { WizNoteFilter } from '../models/WizNoteFilter';
import { WizRemediationFilter } from '../models/WizRemediationFilter';
import { WizResolutionReason } from '../models/WizResolutionReason';
import { WizResult } from '../models/WizResult';
import { WizRiskType } from '../models/WizRiskType';
import { WizServiceTicketFilter } from '../models/WizServiceTicketFilter';
import { WizStackLayer } from '../models/WizStackLayer';
import { WizStatus } from '../models/WizStatus';
import { WizVendorSeverity } from '../models/WizVendorSeverity';
import { ZendeskAuditLogsAuthType } from '../models/ZendeskAuditLogsAuthType';
import { ZendeskAuditLogsSecretsConfig } from '../models/ZendeskAuditLogsSecretsConfig';
import { ZendeskAuditLogsSettingsConfig } from '../models/ZendeskAuditLogsSettingsConfig';
import { ObservableAlertRulesApi } from './ObservableAPI';

import { AlertRulesApiRequestFactory, AlertRulesApiResponseProcessor} from "../apis/AlertRulesApi";
export class PromiseAlertRulesApi {
    private api: ObservableAlertRulesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertRulesApiRequestFactory,
        responseProcessor?: AlertRulesApiResponseProcessor
    ) {
        this.api = new ObservableAlertRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param createAlertRuleRequest Request body for creating an alert rule
     */
    public createAlertRuleWithHttpInfo(organizationId: string, createAlertRuleRequest: CreateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlertRuleWithHttpInfo(organizationId, createAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param createAlertRuleRequest Request body for creating an alert rule
     */
    public createAlertRule(organizationId: string, createAlertRuleRequest: CreateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlertRule(organizationId, createAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to delete
     */
    public deleteAlertRuleWithHttpInfo(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAlertRuleWithHttpInfo(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to delete
     */
    public deleteAlertRule(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAlertRule(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to retrieve
     */
    public getAlertRuleByIDWithHttpInfo(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlertRuleByIDWithHttpInfo(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to retrieve
     */
    public getAlertRuleByID(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlertRuleByID(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param alertRuleTypeId Alert Rule Type ID
     */
    public getAlertRuleConfigMetaWithHttpInfo(alertRuleTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlertsAlertMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlertRuleConfigMetaWithHttpInfo(alertRuleTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param alertRuleTypeId Alert Rule Type ID
     */
    public getAlertRuleConfigMeta(alertRuleTypeId: string, _options?: PromiseConfigurationOptions): Promise<AlertsAlertMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlertRuleConfigMeta(alertRuleTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     */
    public listAlertRuleTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlertsAlertMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAlertRuleTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     */
    public listAlertRuleTypes(_options?: PromiseConfigurationOptions): Promise<Array<AlertsAlertMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAlertRuleTypes(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAlertRulesWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAlertRulesWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAlertRules(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAlertRules(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param updateAlertRuleRequest Request body for updating an alert rule
     */
    public updateAlertRuleWithHttpInfo(organizationId: string, alertRuleId: string, updateAlertRuleRequest: UpdateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlertRuleWithHttpInfo(organizationId, alertRuleId, updateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param updateAlertRuleRequest Request body for updating an alert rule
     */
    public updateAlertRule(organizationId: string, alertRuleId: string, updateAlertRuleRequest: UpdateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlertRule(organizationId, alertRuleId, updateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAlertsApi } from './ObservableAPI';

import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi";
export class PromiseAlertsApi {
    private api: ObservableAlertsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertsApiRequestFactory,
        responseProcessor?: AlertsApiResponseProcessor
    ) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of recent historical alerts for an organization
     * List alerts with pagination
     * @param organizationId Organization ID
     * @param [ruleIds] Comma-separated alert rule IDs
     * @param [severities] Comma-separated severity levels
     * @param [pipelineIds] Comma-separated pipeline IDs
     * @param [resourceType] Resource type filter
     * @param [resourceId] Specific resource ID
     * @param [since] RFC3339 timestamp for start time
     * @param [until] RFC3339 timestamp for end time
     */
    public listAlertsWithHttpInfo(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3AlertList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAlertsWithHttpInfo(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until, observableOptions);
        return result.toPromise();
    }

    /**
     * Get list of recent historical alerts for an organization
     * List alerts with pagination
     * @param organizationId Organization ID
     * @param [ruleIds] Comma-separated alert rule IDs
     * @param [severities] Comma-separated severity levels
     * @param [pipelineIds] Comma-separated pipeline IDs
     * @param [resourceType] Resource type filter
     * @param [resourceId] Specific resource ID
     * @param [since] RFC3339 timestamp for start time
     * @param [until] RFC3339 timestamp for end time
     */
    public listAlerts(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3AlertList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAlerts(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream alerts for an organization using Server-Sent Events
     * Stream alerts in real-time
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5m\&#39;, \&#39;1h\&#39;, \&#39;24h\&#39;)
     * @param [ruleIds] Comma-separated alert rule IDs
     * @param [severities] Comma-separated severity levels
     * @param [resourceIds] Comma-separated resource IDs
     * @param [resourceType] Resource type filter
     */
    public streamAlertsWithHttpInfo(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamAlertsWithHttpInfo(organizationId, since, last, ruleIds, severities, resourceIds, resourceType, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream alerts for an organization using Server-Sent Events
     * Stream alerts in real-time
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5m\&#39;, \&#39;1h\&#39;, \&#39;24h\&#39;)
     * @param [ruleIds] Comma-separated alert rule IDs
     * @param [severities] Comma-separated severity levels
     * @param [resourceIds] Comma-separated resource IDs
     * @param [resourceType] Resource type filter
     */
    public streamAlerts(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamAlerts(organizationId, since, last, ruleIds, severities, resourceIds, resourceType, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuditLogsApi } from './ObservableAPI';

import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";
export class PromiseAuditLogsApi {
    private api: ObservableAuditLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditLogsApiRequestFactory,
        responseProcessor?: AuditLogsApiResponseProcessor
    ) {
        this.api = new ObservableAuditLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bucketed change counts over [from, to) for the audit timeline. For resource_type=pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.
     * Audit log change histogram
     * @param organizationId Organization ID
     * @param _from Bucket window start (inclusive), RFC3339
     * @param to Bucket window end (exclusive), RFC3339
     * @param [buckets] Number of equal-width buckets (default 100, max 500)
     * @param [resourceType] Filter by resource type; with resource_id selects the merged feed
     * @param [resourceId] Filter by resource ID; requires resource_type
     * @param [actorId] Filter by actor ID
     * @param [action] Filter by action (insert, update, delete)
     */
    public getOrganizationAuditLogHistogramWithHttpInfo(organizationId: string, _from: string, to: string, buckets?: number, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationAuditLogHistogram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationAuditLogHistogramWithHttpInfo(organizationId, _from, to, buckets, resourceType, resourceId, actorId, action, observableOptions);
        return result.toPromise();
    }

    /**
     * Bucketed change counts over [from, to) for the audit timeline. For resource_type=pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.
     * Audit log change histogram
     * @param organizationId Organization ID
     * @param _from Bucket window start (inclusive), RFC3339
     * @param to Bucket window end (exclusive), RFC3339
     * @param [buckets] Number of equal-width buckets (default 100, max 500)
     * @param [resourceType] Filter by resource type; with resource_id selects the merged feed
     * @param [resourceId] Filter by resource ID; requires resource_type
     * @param [actorId] Filter by actor ID
     * @param [action] Filter by action (insert, update, delete)
     */
    public getOrganizationAuditLogHistogram(organizationId: string, _from: string, to: string, buckets?: number, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationAuditLogHistogram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationAuditLogHistogram(organizationId, _from, to, buckets, resourceType, resourceId, actorId, action, observableOptions);
        return result.toPromise();
    }

    /**
     * List the organization\'s audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline\'s merged history: the pipeline\'s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.
     * List organization audit logs
     * @param organizationId Organization ID
     * @param [limit] Page size (default 50, max 100)
     * @param [cursor] Opaque cursor from a previous response; filters are carried by the cursor
     * @param [resourceType] Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type
     * @param [resourceId] Filter by resource ID; requires resource_type
     * @param [actorId] Filter by actor ID
     * @param [action] Filter by action (insert, update, delete)
     * @param [_from] Only rows at or after this RFC3339 timestamp
     * @param [to] Only rows before this RFC3339 timestamp
     */
    public listOrganizationAuditLogsWithHttpInfo(organizationId: string, limit?: number, cursor?: string, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _from?: string, to?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationAuditLogList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationAuditLogsWithHttpInfo(organizationId, limit, cursor, resourceType, resourceId, actorId, action, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * List the organization\'s audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline\'s merged history: the pipeline\'s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.
     * List organization audit logs
     * @param organizationId Organization ID
     * @param [limit] Page size (default 50, max 100)
     * @param [cursor] Opaque cursor from a previous response; filters are carried by the cursor
     * @param [resourceType] Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type
     * @param [resourceId] Filter by resource ID; requires resource_type
     * @param [actorId] Filter by actor ID
     * @param [action] Filter by action (insert, update, delete)
     * @param [_from] Only rows at or after this RFC3339 timestamp
     * @param [to] Only rows before this RFC3339 timestamp
     */
    public listOrganizationAuditLogs(organizationId: string, limit?: number, cursor?: string, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _from?: string, to?: string, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationAuditLogList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationAuditLogs(organizationId, limit, cursor, resourceType, resourceId, actorId, action, _from, to, observableOptions);
        return result.toPromise();
    }


}



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
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param getTokenRequest Login request
     */
    public getTokenWithHttpInfo(getTokenRequest: GetTokenRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthenticationtypesTokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTokenWithHttpInfo(getTokenRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param getTokenRequest Login request
     */
    public getToken(getTokenRequest: GetTokenRequest, _options?: PromiseConfigurationOptions): Promise<AuthenticationtypesTokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getToken(getTokenRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public loginCallbackHandlerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginCallbackHandlerWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public loginCallbackHandler(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginCallbackHandler(observableOptions);
        return result.toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public loginHandlerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginHandlerWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public loginHandler(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.loginHandler(observableOptions);
        return result.toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public resendVerificationHandlerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.resendVerificationHandlerWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public resendVerificationHandler(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.resendVerificationHandler(observableOptions);
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
     * Create Billing Account
     * Create Billing Account
     * @param createBillingAccountRequest Request body for creating a billing account
     */
    public createBillingAccountWithHttpInfo(createBillingAccountRequest: CreateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountWithHttpInfo(createBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param createBillingAccountRequest Request body for creating a billing account
     */
    public createBillingAccount(createBillingAccountRequest: CreateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccount(createBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     */
    public deleteBillingAccountWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBillingAccountWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     */
    public deleteBillingAccount(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBillingAccount(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccount(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccount(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingAccountsWithHttpInfo(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountsWithHttpInfo(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingAccounts(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccounts(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param updateBillingAccountRequest Request body for updating a billing account
     */
    public updateBillingAccountWithHttpInfo(billingAccountId: string, updateBillingAccountRequest: UpdateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccountWithHttpInfo(billingAccountId, updateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param updateBillingAccountRequest Request body for updating a billing account
     */
    public updateBillingAccount(billingAccountId: string, updateBillingAccountRequest: UpdateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccount(billingAccountId, updateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBillingAccountsRBACApi } from './ObservableAPI';

import { BillingAccountsRBACApiRequestFactory, BillingAccountsRBACApiResponseProcessor} from "../apis/BillingAccountsRBACApi";
export class PromiseBillingAccountsRBACApi {
    private api: ObservableBillingAccountsRBACApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingAccountsRBACApiRequestFactory,
        responseProcessor?: BillingAccountsRBACApiResponseProcessor
    ) {
        this.api = new ObservableBillingAccountsRBACApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountRoleRequest Create Billing Account Role Request
     */
    public createBillingAccountRoleWithHttpInfo(billingAccountId: string, createBillingAccountRoleRequest: CreateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountRoleWithHttpInfo(billingAccountId, createBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountRoleRequest Create Billing Account Role Request
     */
    public createBillingAccountRole(billingAccountId: string, createBillingAccountRoleRequest: CreateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountRole(billingAccountId, createBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param createBillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public createBillingAccountUserRoleWithHttpInfo(billingAccountId: string, roleId: string, createBillingAccountUserRoleRequest: CreateBillingAccountUserRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountUserRoleWithHttpInfo(billingAccountId, roleId, createBillingAccountUserRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param createBillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public createBillingAccountUserRole(billingAccountId: string, roleId: string, createBillingAccountUserRoleRequest: CreateBillingAccountUserRoleRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountUserRole(billingAccountId, roleId, createBillingAccountUserRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public deleteBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBillingAccountRoleWithHttpInfo(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public deleteBillingAccountRole(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBillingAccountRole(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public deleteBillingAccountUserRoleWithHttpInfo(billingAccountId: string, roleId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBillingAccountUserRoleWithHttpInfo(billingAccountId, roleId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public deleteBillingAccountUserRole(billingAccountId: string, roleId: string, userId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBillingAccountUserRole(billingAccountId, roleId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public getBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountRoleWithHttpInfo(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public getBillingAccountRole(billingAccountId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountRole(billingAccountId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountRolesWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountRole>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountRolesWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountRoles(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<Array<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountRoles(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public getBillingPermissionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountPermission>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingPermissionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public getBillingPermissions(_options?: PromiseConfigurationOptions): Promise<Array<ModelsBillingAccountPermission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingPermissions(observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param updateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public updateBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, updateBillingAccountRoleRequest: UpdateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccountRoleWithHttpInfo(billingAccountId, roleId, updateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param updateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public updateBillingAccountRole(billingAccountId: string, roleId: string, updateBillingAccountRoleRequest: UpdateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccountRole(billingAccountId, roleId, updateBillingAccountRoleRequest, observableOptions);
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
    public cancelBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelBillingAccountSubscriptionWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public cancelBillingAccountSubscription(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelBillingAccountSubscription(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public createBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, createBillingAccountSubscriptionRequest: CreateBillingAccountSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountSubscriptionWithHttpInfo(billingAccountId, createBillingAccountSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public createBillingAccountSubscription(billingAccountId: string, createBillingAccountSubscriptionRequest: CreateBillingAccountSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2CreateBillingAccountSubscriptionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountSubscription(billingAccountId, createBillingAccountSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingProduct>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountSubscriptionWithHttpInfo(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountSubscription(billingAccountId: string, _options?: PromiseConfigurationOptions): Promise<ModelsBillingProduct> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingAccountSubscription(billingAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param [showInactive] Show inactive products
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingProductsWithHttpInfo(showInactive?: boolean, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingProductList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingProductsWithHttpInfo(showInactive, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param [showInactive] Show inactive products
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingProducts(showInactive?: boolean, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsBillingProductList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBillingProducts(showInactive, limit, offset, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConditionSandboxApi } from './ObservableAPI';

import { ConditionSandboxApiRequestFactory, ConditionSandboxApiResponseProcessor} from "../apis/ConditionSandboxApi";
export class PromiseConditionSandboxApi {
    private api: ObservableConditionSandboxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConditionSandboxApiRequestFactory,
        responseProcessor?: ConditionSandboxApiResponseProcessor
    ) {
        this.api = new ObservableConditionSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply a condition to a JSON record
     * Apply condition to record
     * @param applyConditionV2Request Condition and record
     */
    public applyConditionV2WithHttpInfo(applyConditionV2Request: ApplyConditionV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyConditionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyConditionV2WithHttpInfo(applyConditionV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a condition to a JSON record
     * Apply condition to record
     * @param applyConditionV2Request Condition and record
     */
    public applyConditionV2(applyConditionV2Request: ApplyConditionV2Request, _options?: PromiseConfigurationOptions): Promise<RoutesV2ApplyConditionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyConditionV2(applyConditionV2Request, observableOptions);
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
     */
    public listConditionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LeafconditionsInfo>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConditionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List conditions
     * List conditions
     */
    public listConditions(_options?: PromiseConfigurationOptions): Promise<Array<LeafconditionsInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConditions(observableOptions);
        return result.toPromise();
    }


}



import { ObservableConnectionsApi } from './ObservableAPI';

import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi";
export class PromiseConnectionsApi {
    private api: ObservableConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectionsApiRequestFactory,
        responseProcessor?: ConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param createConnectionRequest Request body for creating a connection
     */
    public createConnectionWithHttpInfo(organizationId: string, createConnectionRequest: CreateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnectionWithHttpInfo(organizationId, createConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param createConnectionRequest Request body for creating a connection
     */
    public createConnection(organizationId: string, createConnectionRequest: CreateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnection(organizationId, createConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to delete
     */
    public deleteConnectionWithHttpInfo(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConnectionWithHttpInfo(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to delete
     */
    public deleteConnection(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConnection(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param organizationId Organization ID
     * @param connectionId Connection ID to retrieve
     */
    public getConnectionByIDWithHttpInfo(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConnectionByIDWithHttpInfo(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param organizationId Organization ID
     * @param connectionId Connection ID to retrieve
     */
    public getConnectionByID(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConnectionByID(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listConnectionsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnectionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConnectionsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listConnections(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsConnectionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConnections(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param updateConnectionRequest Request body for updating a connection
     */
    public updateConnectionWithHttpInfo(organizationId: string, connectionId: string, updateConnectionRequest: UpdateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnectionWithHttpInfo(organizationId, connectionId, updateConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param updateConnectionRequest Request body for updating a connection
     */
    public updateConnection(organizationId: string, connectionId: string, updateConnectionRequest: UpdateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnection(organizationId, connectionId, updateConnectionRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEnrichmentSandboxApi } from './ObservableAPI';

import { EnrichmentSandboxApiRequestFactory, EnrichmentSandboxApiResponseProcessor} from "../apis/EnrichmentSandboxApi";
export class PromiseEnrichmentSandboxApi {
    private api: ObservableEnrichmentSandboxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnrichmentSandboxApiRequestFactory,
        responseProcessor?: EnrichmentSandboxApiResponseProcessor
    ) {
        this.api = new ObservableEnrichmentSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param enrichmentSandboxRequest Enrichment configuration and record
     */
    public enrichmentSandboxWithHttpInfo(organizationId: string, enrichmentSandboxRequest: EnrichmentSandboxRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3EnrichmentSandboxResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enrichmentSandboxWithHttpInfo(organizationId, enrichmentSandboxRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param enrichmentSandboxRequest Enrichment configuration and record
     */
    public enrichmentSandbox(organizationId: string, enrichmentSandboxRequest: EnrichmentSandboxRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3EnrichmentSandboxResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enrichmentSandbox(organizationId, enrichmentSandboxRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEnrichmentsApi } from './ObservableAPI';

import { EnrichmentsApiRequestFactory, EnrichmentsApiResponseProcessor} from "../apis/EnrichmentsApi";
export class PromiseEnrichmentsApi {
    private api: ObservableEnrichmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnrichmentsApiRequestFactory,
        responseProcessor?: EnrichmentsApiResponseProcessor
    ) {
        this.api = new ObservableEnrichmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID
     * @param enrichmentTypeId Enrichment type ID
     */
    public getEnrichmentTypeMetaWithHttpInfo(organizationId: string, enrichmentTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EnrichmentConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEnrichmentTypeMetaWithHttpInfo(organizationId, enrichmentTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID
     * @param enrichmentTypeId Enrichment type ID
     */
    public getEnrichmentTypeMeta(organizationId: string, enrichmentTypeId: string, _options?: PromiseConfigurationOptions): Promise<EnrichmentConnectorMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEnrichmentTypeMeta(organizationId, enrichmentTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public listEnrichmentTypesWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<EnrichmentConnectorMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEnrichmentTypesWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public listEnrichmentTypes(organizationId: string, _options?: PromiseConfigurationOptions): Promise<Array<EnrichmentConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEnrichmentTypes(organizationId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFeatureFlagsApi } from './ObservableAPI';

import { FeatureFlagsApiRequestFactory, FeatureFlagsApiResponseProcessor} from "../apis/FeatureFlagsApi";
export class PromiseFeatureFlagsApi {
    private api: ObservableFeatureFlagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FeatureFlagsApiRequestFactory,
        responseProcessor?: FeatureFlagsApiResponseProcessor
    ) {
        this.api = new ObservableFeatureFlagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     */
    public getFeatureFlagsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3GetFeatureFlagResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeatureFlagsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     */
    public getFeatureFlags(_options?: PromiseConfigurationOptions): Promise<RoutesV3GetFeatureFlagResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeatureFlags(observableOptions);
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
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public getInputTypeMetaWithHttpInfo(inputTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getInputTypeMetaWithHttpInfo(inputTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public getInputTypeMeta(inputTypeId: string, _options?: PromiseConfigurationOptions): Promise<ModelsConnectorMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getInputTypeMeta(inputTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     */
    public listInputTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<InputsConnectorMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listInputTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List inputs
     * List inputs
     */
    public listInputTypes(_options?: PromiseConfigurationOptions): Promise<Array<InputsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listInputTypes(observableOptions);
        return result.toPromise();
    }


}



import { ObservableKeyValueStoreApi } from './ObservableAPI';

import { KeyValueStoreApiRequestFactory, KeyValueStoreApiResponseProcessor} from "../apis/KeyValueStoreApi";
export class PromiseKeyValueStoreApi {
    private api: ObservableKeyValueStoreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KeyValueStoreApiRequestFactory,
        responseProcessor?: KeyValueStoreApiResponseProcessor
    ) {
        this.api = new ObservableKeyValueStoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param organizationId Organization ID
     * @param componentId Component ID
     */
    public getKVLookupMetadataWithHttpInfo(organizationId: string, componentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<KvlookupGetMetadataResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getKVLookupMetadataWithHttpInfo(organizationId, componentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param organizationId Organization ID
     * @param componentId Component ID
     */
    public getKVLookupMetadata(organizationId: string, componentId: string, _options?: PromiseConfigurationOptions): Promise<KvlookupGetMetadataResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getKVLookupMetadata(organizationId, componentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param numEntries Number of sample entries to return
     */
    public getKVLookupSampleEntriesWithHttpInfo(organizationId: string, componentId: string, numEntries: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<KvlookupKVEntry>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getKVLookupSampleEntriesWithHttpInfo(organizationId, componentId, numEntries, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param numEntries Number of sample entries to return
     */
    public getKVLookupSampleEntries(organizationId: string, componentId: string, numEntries: number, _options?: PromiseConfigurationOptions): Promise<Array<KvlookupKVEntry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getKVLookupSampleEntries(organizationId, componentId, numEntries, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param key Key to look up
     */
    public getValueFromKvStoreWithHttpInfo(organizationId: string, componentId: string, key: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<KvlookupKVEntry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValueFromKvStoreWithHttpInfo(organizationId, componentId, key, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param key Key to look up
     */
    public getValueFromKvStore(organizationId: string, componentId: string, key: string, _options?: PromiseConfigurationOptions): Promise<KvlookupKVEntry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValueFromKvStore(organizationId, componentId, key, observableOptions);
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
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public streamNodeDataWithHttpInfo(organizationId: string, nodeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamNodeDataWithHttpInfo(organizationId, nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public streamNodeData(organizationId: string, nodeId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamNodeData(organizationId, nodeId, observableOptions);
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
    public streamNodeLogsWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamNodeLogsWithHttpInfo(organizationId, pipelineId, nodeId, since, last, observableOptions);
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
    public streamNodeLogs(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamNodeLogs(organizationId, pipelineId, nodeId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationAPILogsWithHttpInfo(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamOrganizationAPILogsWithHttpInfo(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationAPILogs(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamOrganizationAPILogs(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public streamOrganizationLogsWithHttpInfo(organizationId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamOrganizationLogsWithHttpInfo(organizationId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public streamOrganizationLogs(organizationId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamOrganizationLogs(organizationId, since, last, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationPipelinesLogsWithHttpInfo(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamOrganizationPipelinesLogsWithHttpInfo(organizationId, since, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationPipelinesLogs(organizationId: string, since?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamOrganizationPipelinesLogs(organizationId, since, observableOptions);
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
    public streamPipelineLogsWithHttpInfo(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamPipelineLogsWithHttpInfo(organizationId, pipelineId, since, last, observableOptions);
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
    public streamPipelineLogs(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamPipelineLogs(organizationId, pipelineId, since, last, observableOptions);
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
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public getOAuthRedirectWithHttpInfo(typeId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOAuthRedirectWithHttpInfo(typeId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public getOAuthRedirect(typeId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOAuthRedirect(typeId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public oAuthCallbackWithHttpInfo(typeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.oAuthCallbackWithHttpInfo(typeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public oAuthCallback(typeId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.oAuthCallback(typeId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationAPIKeysApi } from './ObservableAPI';

import { OrganizationAPIKeysApiRequestFactory, OrganizationAPIKeysApiResponseProcessor} from "../apis/OrganizationAPIKeysApi";
export class PromiseOrganizationAPIKeysApi {
    private api: ObservableOrganizationAPIKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationAPIKeysApiRequestFactory,
        responseProcessor?: OrganizationAPIKeysApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationAPIKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param createAPIKeyRequest Request body for creating an API key
     */
    public createAPIKeyWithHttpInfo(organizationId: string, createAPIKeyRequest: CreateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAPIKeyWithHttpInfo(organizationId, createAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param createAPIKeyRequest Request body for creating an API key
     */
    public createAPIKey(organizationId: string, createAPIKeyRequest: CreateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAPIKey(organizationId, createAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public deleteAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAPIKeyWithHttpInfo(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public deleteAPIKey(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAPIKey(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public getAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAPIKeyWithHttpInfo(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public getAPIKey(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKey> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAPIKey(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAPIKeysWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAPIKeysWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAPIKeys(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAPIKeys(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public regenerateAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAPIKeyWithHttpInfo(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public regenerateAPIKey(organizationId: string, apiKeyId: string, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.regenerateAPIKey(organizationId, apiKeyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param updateAPIKeyRequest Request body for updating an API key
     */
    public updateAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, updateAPIKeyRequest: UpdateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAPIKeyWithHttpInfo(organizationId, apiKeyId, updateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param updateAPIKeyRequest Request body for updating an API key
     */
    public updateAPIKey(organizationId: string, apiKeyId: string, updateAPIKeyRequest: UpdateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKey> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAPIKey(organizationId, apiKeyId, updateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationEnrichmentsApi } from './ObservableAPI';

import { OrganizationEnrichmentsApiRequestFactory, OrganizationEnrichmentsApiResponseProcessor} from "../apis/OrganizationEnrichmentsApi";
export class PromiseOrganizationEnrichmentsApi {
    private api: ObservableOrganizationEnrichmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationEnrichmentsApiRequestFactory,
        responseProcessor?: OrganizationEnrichmentsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationEnrichmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param createEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public createEnrichmentWithHttpInfo(organizationId: string, createEnrichmentRequest: CreateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEnrichmentWithHttpInfo(organizationId, createEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param createEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public createEnrichment(organizationId: string, createEnrichmentRequest: CreateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEnrichment(organizationId, createEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public deleteEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEnrichmentWithHttpInfo(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public deleteEnrichment(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEnrichment(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public getEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3GetEnrichmentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEnrichmentWithHttpInfo(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public getEnrichment(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3GetEnrichmentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEnrichment(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param [limit] Number of results to return (default 100)
     * @param [offset] Number of results to skip (default 0)
     */
    public listEnrichmentsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichmentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEnrichmentsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param [limit] Number of results to return (default 100)
     * @param [offset] Number of results to skip (default 0)
     */
    public listEnrichments(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichmentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEnrichments(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param replaceEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public replaceEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, replaceEnrichmentRequest: ReplaceEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceEnrichmentWithHttpInfo(organizationId, enrichmentId, replaceEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param replaceEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public replaceEnrichment(organizationId: string, enrichmentId: string, replaceEnrichmentRequest: ReplaceEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceEnrichment(organizationId, enrichmentId, replaceEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param testEnrichmentConnectionRequest Enrichment configuration to test
     */
    public testEnrichmentConnectionWithHttpInfo(organizationId: string, testEnrichmentConnectionRequest: TestEnrichmentConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testEnrichmentConnectionWithHttpInfo(organizationId, testEnrichmentConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param testEnrichmentConnectionRequest Enrichment configuration to test
     */
    public testEnrichmentConnection(organizationId: string, testEnrichmentConnectionRequest: TestEnrichmentConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testEnrichmentConnection(organizationId, testEnrichmentConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param updateEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public updateEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, updateEnrichmentRequest: UpdateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEnrichmentWithHttpInfo(organizationId, enrichmentId, updateEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param updateEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public updateEnrichment(organizationId: string, enrichmentId: string, updateEnrichmentRequest: UpdateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEnrichment(organizationId, enrichmentId, updateEnrichmentRequest, testConnection, observableOptions);
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
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param createInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createInputWithHttpInfo(organizationId: string, createInputRequest: CreateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createInputWithHttpInfo(organizationId, createInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param createInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createInput(organizationId: string, createInputRequest: CreateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createInput(organizationId, createInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public deleteOrganizationInputWithHttpInfo(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationInputWithHttpInfo(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public deleteOrganizationInput(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationInput(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a configured input in organization
     * Get organization input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public getOrganizationInputWithHttpInfo(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesGetInputResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationInputWithHttpInfo(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a configured input in organization
     * Get organization input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public getOrganizationInput(organizationId: string, inputId: string, _options?: PromiseConfigurationOptions): Promise<RoutesGetInputResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationInput(organizationId, inputId, observableOptions);
        return result.toPromise();
    }

    /**
     * List configured inputs in organization
     * List organization inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public listOrganizationInputsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInputList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationInputsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List configured inputs in organization
     * List organization inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public listOrganizationInputs(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsInputList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationInputs(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param replaceInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceInputWithHttpInfo(organizationId: string, inputId: string, replaceInputRequest: ReplaceInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceInputWithHttpInfo(organizationId, inputId, replaceInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param replaceInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceInput(organizationId: string, inputId: string, replaceInputRequest: ReplaceInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceInput(organizationId, inputId, replaceInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param testInputConnectionRequest Input configuration to test
     */
    public testInputConnectionWithHttpInfo(organizationId: string, testInputConnectionRequest: TestInputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testInputConnectionWithHttpInfo(organizationId, testInputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param testInputConnectionRequest Input configuration to test
     */
    public testInputConnection(organizationId: string, testInputConnectionRequest: TestInputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testInputConnection(organizationId, testInputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param updateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateInputWithHttpInfo(organizationId: string, inputId: string, updateInputRequest: UpdateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateInputWithHttpInfo(organizationId, inputId, updateInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param updateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateInput(organizationId: string, inputId: string, updateInputRequest: UpdateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateInput(organizationId, inputId, updateInputRequest, testConnection, observableOptions);
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
    public inviteUserWithHttpInfo(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.inviteUserWithHttpInfo(organizationId, routesInviteUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public inviteUser(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.inviteUser(organizationId, routesInviteUserToOrganizationRequest, observableOptions);
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
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param createOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createOutputWithHttpInfo(organizationId: string, createOutputRequest: CreateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOutputWithHttpInfo(organizationId, createOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param createOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createOutput(organizationId: string, createOutputRequest: CreateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOutput(organizationId, createOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public deleteOrganizationOutputWithHttpInfo(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationOutputWithHttpInfo(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public deleteOrganizationOutput(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationOutput(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a configured output in organization
     * Get a output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public getOrganizationOutputWithHttpInfo(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesGetOutputResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationOutputWithHttpInfo(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a configured output in organization
     * Get a output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public getOrganizationOutput(organizationId: string, outputId: string, _options?: PromiseConfigurationOptions): Promise<RoutesGetOutputResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationOutput(organizationId, outputId, observableOptions);
        return result.toPromise();
    }

    /**
     * List outputs
     * List configured outputs in organization
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationOutputsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutputList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationOutputsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List outputs
     * List configured outputs in organization
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationOutputs(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsOutputList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationOutputs(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param replaceOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceOutputWithHttpInfo(organizationId: string, outputId: string, replaceOutputRequest: ReplaceOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceOutputWithHttpInfo(organizationId, outputId, replaceOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param replaceOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceOutput(organizationId: string, outputId: string, replaceOutputRequest: ReplaceOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceOutput(organizationId, outputId, replaceOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param testOutputConnectionRequest Output configuration to test
     */
    public testOutputConnectionWithHttpInfo(organizationId: string, testOutputConnectionRequest: TestOutputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testOutputConnectionWithHttpInfo(organizationId, testOutputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param testOutputConnectionRequest Output configuration to test
     */
    public testOutputConnection(organizationId: string, testOutputConnectionRequest: TestOutputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testOutputConnection(organizationId, testOutputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param updateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateOutputWithHttpInfo(organizationId: string, outputId: string, updateOutputRequest: UpdateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOutputWithHttpInfo(organizationId, outputId, updateOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param updateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateOutput(organizationId: string, outputId: string, updateOutputRequest: UpdateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOutput(organizationId, outputId, updateOutputRequest, testConnection, observableOptions);
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
    public getQuotasByOrganizationIDWithHttpInfo(organizationId: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getQuotasByOrganizationIDWithHttpInfo(organizationId, limit, offset, body, observableOptions);
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
    public getQuotasByOrganizationID(organizationId: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<ModelsQuotaList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getQuotasByOrganizationID(organizationId, limit, offset, body, observableOptions);
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
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param createTransformRequest Request body for creating a transform
     */
    public createTransformWithHttpInfo(organizationId: string, createTransformRequest: CreateTransformRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransformWithHttpInfo(organizationId, createTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param createTransformRequest Request body for creating a transform
     */
    public createTransform(organizationId: string, createTransformRequest: CreateTransformRequest, _options?: PromiseConfigurationOptions): Promise<ModelsTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransform(organizationId, createTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public deleteOrganizationTransformWithHttpInfo(organizationId: string, transformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationTransformWithHttpInfo(organizationId, transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public deleteOrganizationTransform(organizationId: string, transformId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationTransform(organizationId, transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public getOrganizationTransformWithHttpInfo(transformId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesGetTransformResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationTransformWithHttpInfo(transformId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public getOrganizationTransform(transformId: string, organizationId: string, _options?: PromiseConfigurationOptions): Promise<RoutesGetTransformResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationTransform(transformId, organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List configured transforms in a transform
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationTransformsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransformList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationTransformsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List configured transforms in a transform
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationTransforms(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsTransformList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrganizationTransforms(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public updateOrganizationTransformWithHttpInfo(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrganizationTransformWithHttpInfo(organizationId, transformId, routesUpdateTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public updateOrganizationTransform(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: PromiseConfigurationOptions): Promise<ModelsTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrganizationTransform(organizationId, transformId, routesUpdateTransformRequest, observableOptions);
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
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public addUserWithHttpInfo(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUserWithHttpInfo(organizationId, routesAddUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public addUser(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addUser(organizationId, routesAddUserToOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listUsersWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUserList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUsersWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listUsers(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationUserList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUsers(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param userAuthProviderId User Auth Provider ID
     */
    public removeUserWithHttpInfo(organizationId: string, userId: string, userAuthProviderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeUserWithHttpInfo(organizationId, userId, userAuthProviderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param userAuthProviderId User Auth Provider ID
     */
    public removeUser(organizationId: string, userId: string, userAuthProviderId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeUser(organizationId, userId, userAuthProviderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public updateUserWithHttpInfo(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserWithHttpInfo(organizationId, userId, routesUpdateUserInOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public updateUser(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUser(organizationId, userId, routesUpdateUserInOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Leave organization (self-service removal)
     * Leave organization
     * @param organizationId Organization ID
     */
    public v1OrganizationIdUsersLeavePostWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersLeavePostWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Leave organization (self-service removal)
     * Leave organization
     * @param organizationId Organization ID
     */
    public v1OrganizationIdUsersLeavePost(organizationId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersLeavePost(organizationId, observableOptions);
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
     * Create a new child organization under the given parent organization. Known as a \"team\" in the UI.
     * Create child organization (team)
     * @param organizationId Parent Organization ID
     * @param createChildOrganizationRequest Request body
     */
    public createChildOrganizationWithHttpInfo(organizationId: string, createChildOrganizationRequest: CreateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createChildOrganizationWithHttpInfo(organizationId, createChildOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new child organization under the given parent organization. Known as a \"team\" in the UI.
     * Create child organization (team)
     * @param organizationId Parent Organization ID
     * @param createChildOrganizationRequest Request body
     */
    public createChildOrganization(organizationId: string, createChildOrganizationRequest: CreateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createChildOrganization(organizationId, createChildOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public createOrganizationWithHttpInfo(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrganizationWithHttpInfo(routesCreateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public createOrganization(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrganization(routesCreateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Delete child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     */
    public deleteChildOrganizationWithHttpInfo(organizationId: string, childOrganizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteChildOrganizationWithHttpInfo(organizationId, childOrganizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Delete child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     */
    public deleteChildOrganization(organizationId: string, childOrganizationId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteChildOrganization(organizationId, childOrganizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public deleteOrganizationWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganizationWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public deleteOrganization(organizationId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrganization(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated cost and usage summary for a specific storage type
     * Get storage type cost summary by type
     * @param organizationId Organization ID
     * @param storageType Storage type (e.g., s3, dev-null, bigquery)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeSummaryByTypeWithHttpInfo(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeSummaryByTypeWithHttpInfo(organizationId, storageType, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated cost and usage summary for a specific storage type
     * Get storage type cost summary by type
     * @param organizationId Organization ID
     * @param storageType Storage type (e.g., s3, dev-null, bigquery)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeSummaryByType(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeSummaryByType(organizationId, storageType, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.
     * List child organizations (teams)
     * @param organizationId Parent Organization ID
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     * @param [nameSearch] If provided, only return organizations with names that contain the search string
     */
    public listChildOrganizationsWithHttpInfo(organizationId: string, limit?: number, offset?: number, nameSearch?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsUserOrganizationList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listChildOrganizationsWithHttpInfo(organizationId, limit, offset, nameSearch, observableOptions);
        return result.toPromise();
    }

    /**
     * List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.
     * List child organizations (teams)
     * @param organizationId Parent Organization ID
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     * @param [nameSearch] If provided, only return organizations with names that contain the search string
     */
    public listChildOrganizations(organizationId: string, limit?: number, offset?: number, nameSearch?: string, _options?: PromiseConfigurationOptions): Promise<ModelsUserOrganizationList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listChildOrganizations(organizationId, limit, offset, nameSearch, observableOptions);
        return result.toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     * @param [noChildren] If true, only return organizations that are directly associated with the user, not child organizations (default: false)
     * @param [parentOrganizationId] If provided, only return organizations that are children of the specified parent organization
     * @param [nameSearch] If provided, only return organizations with names that contain the search string
     */
    public listUserOrganizationsWithHttpInfo(limit?: number, offset?: number, noChildren?: boolean, parentOrganizationId?: string, nameSearch?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOrganizationList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUserOrganizationsWithHttpInfo(limit, offset, noChildren, parentOrganizationId, nameSearch, observableOptions);
        return result.toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     * @param [noChildren] If true, only return organizations that are directly associated with the user, not child organizations (default: false)
     * @param [parentOrganizationId] If provided, only return organizations that are children of the specified parent organization
     * @param [nameSearch] If provided, only return organizations with names that contain the search string
     */
    public listUserOrganizations(limit?: number, offset?: number, noChildren?: boolean, parentOrganizationId?: string, nameSearch?: string, _options?: PromiseConfigurationOptions): Promise<ModelsOrganizationList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUserOrganizations(limit, offset, noChildren, parentOrganizationId, nameSearch, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Update child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     * @param updateChildOrganizationRequest Request body
     */
    public updateChildOrganizationWithHttpInfo(organizationId: string, childOrganizationId: string, updateChildOrganizationRequest: UpdateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateChildOrganizationWithHttpInfo(organizationId, childOrganizationId, updateChildOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Update child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     * @param updateChildOrganizationRequest Request body
     */
    public updateChildOrganization(organizationId: string, childOrganizationId: string, updateChildOrganizationRequest: UpdateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateChildOrganization(organizationId, childOrganizationId, updateChildOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public updateOrganizationWithHttpInfo(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrganizationWithHttpInfo(organizationId, routesUpdateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public updateOrganization(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrganization(organizationId, routesUpdateOrganizationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationsMetricsApi } from './ObservableAPI';

import { OrganizationsMetricsApiRequestFactory, OrganizationsMetricsApiResponseProcessor} from "../apis/OrganizationsMetricsApi";
export class PromiseOrganizationsMetricsApi {
    private api: ObservableOrganizationsMetricsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsMetricsApiRequestFactory,
        responseProcessor?: OrganizationsMetricsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get time series metrics for an organization
     * Get organization metrics
     * @param organizationId Organization ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getOrganizationMetricsWithHttpInfo(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationMetricsWithHttpInfo(organizationId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get time series metrics for an organization
     * Get organization metrics
     * @param organizationId Organization ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getOrganizationMetrics(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationMetrics(organizationId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrganizationsStorageCostApi } from './ObservableAPI';

import { OrganizationsStorageCostApiRequestFactory, OrganizationsStorageCostApiResponseProcessor} from "../apis/OrganizationsStorageCostApi";
export class PromiseOrganizationsStorageCostApi {
    private api: ObservableOrganizationsStorageCostApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsStorageCostApiRequestFactory,
        responseProcessor?: OrganizationsStorageCostApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsStorageCostApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param organizationId Organization ID
     */
    public getStorageTypeCostWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeCostWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param organizationId Organization ID
     */
    public getStorageTypeCost(organizationId: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeCost(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed metrics for each individual output, including egress and associated input
     * Get storage type output details
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeDetailsWithHttpInfo(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeDetailsWithHttpInfo(organizationId, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed metrics for each individual output, including egress and associated input
     * Get storage type output details
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeDetails(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2StorageTypeDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeDetails(organizationId, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get time series metrics grouped by storage type for an organization
     * Get storage type metrics
     * @param organizationId Organization ID
     * @param metric Metric to retrieve (egress_bytes|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeMetricsWithHttpInfo(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeTimeSeriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeMetricsWithHttpInfo(organizationId, metric, start, end, resolution, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get time series metrics grouped by storage type for an organization
     * Get storage type metrics
     * @param organizationId Organization ID
     * @param metric Metric to retrieve (egress_bytes|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeMetrics(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeTimeSeriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeMetrics(organizationId, metric, start, end, resolution, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated cost and usage summary by storage type
     * Get storage type cost summary
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeSummaryWithHttpInfo(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeSummaryWithHttpInfo(organizationId, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated cost and usage summary by storage type
     * Get storage type cost summary
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public getStorageTypeSummary(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getStorageTypeSummary(organizationId, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param setStorageTypeCostRequest Cost configuration
     */
    public setStorageTypeCostWithHttpInfo(organizationId: string, setStorageTypeCostRequest: SetStorageTypeCostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setStorageTypeCostWithHttpInfo(organizationId, setStorageTypeCostRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param setStorageTypeCostRequest Cost configuration
     */
    public setStorageTypeCost(organizationId: string, setStorageTypeCostRequest: SetStorageTypeCostRequest, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setStorageTypeCost(organizationId, setStorageTypeCostRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed metrics for each individual output of a specific storage type
     * Get storage type output details by type
     * @param organizationId Organization ID
     * @param storageType Storage type (e.g., s3, dev-null, bigquery)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(organizationId, storageType, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed metrics for each individual output of a specific storage type
     * Get storage type output details by type
     * @param organizationId Organization ID
     * @param storageType Storage type (e.g., s3, dev-null, bigquery)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [billingType] Filter by billing type (billable|non_billable)
     * @param [pipelineId] Filter to specific pipeline
     */
    public v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2StorageTypeDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(organizationId, storageType, start, end, billingType, pipelineId, observableOptions);
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
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public getOutputTypeMetaWithHttpInfo(outputTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOutputTypeMetaWithHttpInfo(outputTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public getOutputTypeMeta(outputTypeId: string, _options?: PromiseConfigurationOptions): Promise<ModelsConnectorMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOutputTypeMeta(outputTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List outputs
     * List outputs
     */
    public listOutputTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<OutputsConnectorMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOutputTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List outputs
     * List outputs
     */
    public listOutputTypes(_options?: PromiseConfigurationOptions): Promise<Array<OutputsConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOutputTypes(observableOptions);
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
    public listPermissionsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPermissionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPermissionsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param organizationId Organization ID
     * @param [limit] Limit the number of permissions returned (default: 10)
     * @param [offset] Offset the permissions returned (default: 0)
     */
    public listPermissions(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsPermissionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPermissions(organizationId, limit, offset, observableOptions);
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
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param createPipelineRequest Request body for creating a pipeline
     */
    public createPipelineWithHttpInfo(organizationId: string, createPipelineRequest: CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPipelineWithHttpInfo(organizationId, createPipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param createPipelineRequest Request body for creating a pipeline
     */
    public createPipeline(organizationId: string, createPipelineRequest: CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPipeline(organizationId, createPipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePipelineWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipeline(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePipeline(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipelineV1WithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePipelineV1WithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipelineV1(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePipelineV1(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Force an edge in learning mode to immediately graduate to detection mode
     * Force graduate schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public forceGraduateSchemaStateWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.forceGraduateSchemaStateWithHttpInfo(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Force an edge in learning mode to immediately graduate to detection mode
     * Force graduate schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public forceGraduateSchemaState(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.forceGraduateSchemaState(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param [resolution] Resolution for metrics (default: 5m)
     */
    public getMetricsForPipelinesWithHttpInfo(organizationId: string, pipelineIds: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2MetricsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMetricsForPipelinesWithHttpInfo(organizationId, pipelineIds, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param [resolution] Resolution for metrics (default: 5m)
     */
    public getMetricsForPipelines(organizationId: string, pipelineIds: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2MetricsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMetricsForPipelines(organizationId, pipelineIds, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getOrganizationSummaryWithHttpInfo(organizationId: string, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationSummaryWithHttpInfo(organizationId, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getOrganizationSummary(organizationId: string, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2GetOrganizationSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrganizationSummary(organizationId, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public getPipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public getPipeline(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipeline(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public getPipelineConfigWithHttpInfo(organizationId: string, pipelineId: string, includeStatus?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineConfigWithHttpInfo(organizationId, pipelineId, includeStatus, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public getPipelineConfig(organizationId: string, pipelineId: string, includeStatus?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineConfig(organizationId, pipelineId, includeStatus, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     */
    public getPipelineEdgeConditionOperatorTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineEdgeConditionOperatorTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     */
    public getPipelineEdgeConditionOperatorTypes(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineEdgeConditionOperatorTypes(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     */
    public getPipelineEdgeConditionRulesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineEdgeConditionRulesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     */
    public getPipelineEdgeConditionRules(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineEdgeConditionRules(observableOptions);
        return result.toPromise();
    }

    /**
     * Get time series metrics for a pipeline
     * Get pipeline metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getPipelineMetricsWithHttpInfo(organizationId: string, pipelineId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineMetricsWithHttpInfo(organizationId, pipelineId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get time series metrics for a pipeline
     * Get pipeline metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getPipelineMetrics(organizationId: string, pipelineId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineMetrics(organizationId, pipelineId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getPipelineNodeMetricsWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineNodeMetricsWithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getPipelineNodeMetrics(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineNodeMetrics(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getPipelineNodeMetricsV2WithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineNodeMetricsV2WithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public getPipelineNodeMetricsV2(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineNodeMetricsV2(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getPipelineNodeStatusWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineNodeStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineNodeStatusWithHttpInfo(organizationId, pipelineId, nodeId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getPipelineNodeStatus(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineNodeStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineNodeStatus(organizationId, pipelineId, nodeId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getPipelineStatusWithHttpInfo(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineStatusWithHttpInfo(organizationId, pipelineId, metrics, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getPipelineStatus(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelineStatus(organizationId, pipelineId, metrics, start, end, observableOptions);
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
    public getPipelinesStatusesWithHttpInfo(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelinesStatusesWithHttpInfo(organizationId, limit, offset, start, end, observableOptions);
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
    public getPipelinesStatuses(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: PromiseConfigurationOptions): Promise<Array<RoutesV2PipelineWithStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPipelinesStatuses(organizationId, limit, offset, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current schema state for a pipeline edge
     * Get schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public getSchemaStateWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SchemaStateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchemaStateWithHttpInfo(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current schema state for a pipeline edge
     * Get schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public getSchemaState(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3SchemaStateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSchemaState(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public listPipelinesWithHttpInfo(organizationId: string, limit?: number, offset?: number, includeStatus?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPipelinesWithHttpInfo(organizationId, limit, offset, includeStatus, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public listPipelines(organizationId: string, limit?: number, offset?: number, includeStatus?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPipelines(organizationId, limit, offset, includeStatus, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listPipelinesV1WithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPipelinesV1WithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listPipelinesV1(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPipelinesV1(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List schema drift events for a pipeline edge
     * List schema history
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public listSchemaHistoryWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoutesV3SchemaHistoryEntryResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSchemaHistoryWithHttpInfo(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List schema drift events for a pipeline edge
     * List schema history
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public listSchemaHistory(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<Array<RoutesV3SchemaHistoryEntryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSchemaHistory(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Purge all messages from a pipeline\'s NATS stream
     * Purge pipeline data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public purgePipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelinePurgeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.purgePipelineWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Purge all messages from a pipeline\'s NATS stream
     * Purge pipeline data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public purgePipeline(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelinePurgeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.purgePipeline(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Purge messages destined for a specific pipeline node
     * Purge pipeline node data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     */
    public purgePipelineNodeWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelinePurgeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.purgePipelineNodeWithHttpInfo(organizationId, pipelineId, nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Purge messages destined for a specific pipeline node
     * Purge pipeline node data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     */
    public purgePipelineNode(organizationId: string, pipelineId: string, nodeId: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelinePurgeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.purgePipelineNode(organizationId, pipelineId, nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the current schema state for an edge and signal the sidecar to restart in learning mode
     * Reset schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public resetSchemaStateWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.resetSchemaStateWithHttpInfo(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the current schema state for an edge and signal the sidecar to restart in learning mode
     * Reset schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public resetSchemaState(organizationId: string, pipelineId: string, edgeId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.resetSchemaState(organizationId, pipelineId, edgeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public triggerPipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.triggerPipelineWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public triggerPipeline(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.triggerPipeline(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineRequest Request body for updating a pipeline
     */
    public updatePipelineWithHttpInfo(organizationId: string, pipelineId: string, updatePipelineRequest: UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineWithHttpInfo(organizationId, pipelineId, updatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineRequest Request body for updating a pipeline
     */
    public updatePipeline(organizationId: string, pipelineId: string, updatePipelineRequest: UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipeline(organizationId, pipelineId, updatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     * @param updatePipelineEdgeRequest Request body
     */
    public updatePipelineEdgeWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, updatePipelineEdgeRequest: UpdatePipelineEdgeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineEdgeWithHttpInfo(organizationId, pipelineId, edgeId, updatePipelineEdgeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     * @param updatePipelineEdgeRequest Request body
     */
    public updatePipelineEdge(organizationId: string, pipelineId: string, edgeId: string, updatePipelineEdgeRequest: UpdatePipelineEdgeRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineEdge(organizationId, pipelineId, edgeId, updatePipelineEdgeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineV1Request Request body for updating a pipeline
     */
    public updatePipelineV1WithHttpInfo(organizationId: string, pipelineId: string, updatePipelineV1Request: UpdatePipelineV1Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineV1WithHttpInfo(organizationId, pipelineId, updatePipelineV1Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineV1Request Request body for updating a pipeline
     */
    public updatePipelineV1(organizationId: string, pipelineId: string, updatePipelineV1Request: UpdatePipelineV1Request, _options?: PromiseConfigurationOptions): Promise<ModelsPipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineV1(organizationId, pipelineId, updatePipelineV1Request, observableOptions);
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
    public listQuotasWithHttpInfo(billingAccountId?: string, organizationId?: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listQuotasWithHttpInfo(billingAccountId, organizationId, limit, offset, body, observableOptions);
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
    public listQuotas(billingAccountId?: string, organizationId?: string, limit?: number, offset?: number, body?: any, _options?: PromiseConfigurationOptions): Promise<ModelsQuotaList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listQuotas(billingAccountId, organizationId, limit, offset, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableResourceSharesApi } from './ObservableAPI';

import { ResourceSharesApiRequestFactory, ResourceSharesApiResponseProcessor} from "../apis/ResourceSharesApi";
export class PromiseResourceSharesApi {
    private api: ObservableResourceSharesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ResourceSharesApiRequestFactory,
        responseProcessor?: ResourceSharesApiResponseProcessor
    ) {
        this.api = new ObservableResourceSharesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share request
     */
    public createResourceSharesWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsResourceShareChangeSet>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createResourceSharesWithHttpInfo(organizationId, resourceType, resourceId, createResourceSharesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share request
     */
    public createResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: PromiseConfigurationOptions): Promise<ModelsResourceShareChangeSet> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI\'s per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.
     * List a resource\'s share targets (all direct child orgs)
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param [search] Case-insensitive substring filter on child org name, slug, or id
     * @param [shared] Filter by share state: true &#x3D; only shared, false &#x3D; only not shared
     * @param [sortBy] Column to sort by; default puts shared rows first
     * @param [order] Sort direction (used with sort_by)
     * @param [limit] Page size
     * @param [offset] Rows to skip
     */
    public listResourceShareTargetsWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, search?: string, shared?: boolean, sortBy?: 'name' | 'shared' | 'shared_at' | 'in_use', order?: 'asc' | 'desc', limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsResourceShareTargetList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourceShareTargetsWithHttpInfo(organizationId, resourceType, resourceId, search, shared, sortBy, order, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI\'s per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.
     * List a resource\'s share targets (all direct child orgs)
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param [search] Case-insensitive substring filter on child org name, slug, or id
     * @param [shared] Filter by share state: true &#x3D; only shared, false &#x3D; only not shared
     * @param [sortBy] Column to sort by; default puts shared rows first
     * @param [order] Sort direction (used with sort_by)
     * @param [limit] Page size
     * @param [offset] Rows to skip
     */
    public listResourceShareTargets(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, search?: string, shared?: boolean, sortBy?: 'name' | 'shared' | 'shared_at' | 'in_use', order?: 'asc' | 'desc', limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsResourceShareTargetList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourceShareTargets(organizationId, resourceType, resourceId, search, shared, sortBy, order, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public listResourceSharesWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsResourceShareWithUsageList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourceSharesWithHttpInfo(organizationId, resourceType, resourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public listResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: PromiseConfigurationOptions): Promise<ModelsResourceShareWithUsageList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourceShares(organizationId, resourceType, resourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * List, paginated, everywhere a shared secret or component owned by this org is consumed by OTHER (child) organizations — the remediation view. For a secret, consumers are the child-org components referencing it; for a component, the child-org pipelines binding it. Each row carries the child org and the consuming resource; rows are ordered so an org\'s usages are contiguous.
     * List a shared resource\'s consumers in other orgs
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param [limit] Page size
     * @param [offset] Rows to skip
     */
    public listResourceUsageWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3ResourceUsageListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourceUsageWithHttpInfo(organizationId, resourceType, resourceId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List, paginated, everywhere a shared secret or component owned by this org is consumed by OTHER (child) organizations — the remediation view. For a secret, consumers are the child-org components referencing it; for a component, the child-org pipelines binding it. Each row carries the child org and the consuming resource; rows are ordered so an org\'s usages are contiguous.
     * List a shared resource\'s consumers in other orgs
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param [limit] Page size
     * @param [offset] Rows to skip
     */
    public listResourceUsage(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<RoutesV3ResourceUsageListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourceUsage(organizationId, resourceType, resourceId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param organizationId Owner organization ID
     * @param [limit] Page size (default: 10)
     * @param [offset] Offset (default: 0)
     * @param [resourceType] Filter by resource type
     */
    public listSharedResourcesWithHttpInfo(organizationId: string, limit?: number, offset?: number, resourceType?: 'secret' | 'component', _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SharedResourceListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSharedResourcesWithHttpInfo(organizationId, limit, offset, resourceType, observableOptions);
        return result.toPromise();
    }

    /**
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param organizationId Owner organization ID
     * @param [limit] Page size (default: 10)
     * @param [offset] Offset (default: 0)
     * @param [resourceType] Filter by resource type
     */
    public listSharedResources(organizationId: string, limit?: number, offset?: number, resourceType?: 'secret' | 'component', _options?: PromiseConfigurationOptions): Promise<RoutesV3SharedResourceListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSharedResources(organizationId, limit, offset, resourceType, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public unshareResourceWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsResourceShareChangeSet>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unshareResourceWithHttpInfo(organizationId, resourceType, resourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public unshareResource(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: PromiseConfigurationOptions): Promise<ModelsResourceShareChangeSet> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unshareResource(organizationId, resourceType, resourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a named share (revoke_organization_ids) that the target organization is actively using is rejected with 409. Set revoke_all_not_in_use to instead revoke every current share the target is NOT using and leave the in-use ones in place (returned in skipped_in_use).
     * Update a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share delta request
     */
    public updateResourceSharesWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsResourceShareChangeSet>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateResourceSharesWithHttpInfo(organizationId, resourceType, resourceId, createResourceSharesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a named share (revoke_organization_ids) that the target organization is actively using is rejected with 409. Set revoke_all_not_in_use to instead revoke every current share the target is NOT using and leave the in-use ones in place (returned in skipped_in_use).
     * Update a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share delta request
     */
    public updateResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: PromiseConfigurationOptions): Promise<ModelsResourceShareChangeSet> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest, observableOptions);
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
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param createRoleRequest Request body for creating a role
     */
    public createRoleWithHttpInfo(organizationId: string, createRoleRequest: CreateRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRoleWithHttpInfo(organizationId, createRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param createRoleRequest Request body for creating a role
     */
    public createRole(organizationId: string, createRoleRequest: CreateRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRole(organizationId, createRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public deleteRoleWithHttpInfo(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRoleWithHttpInfo(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public deleteRole(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRole(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public getRoleWithHttpInfo(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRoleWithHttpInfo(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public getRole(organizationId: string, roleId: string, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRole(organizationId, roleId, observableOptions);
        return result.toPromise();
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public listRolesWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissionsList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRolesWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public listRoles(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissionsList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRoles(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param updateRoleRequest Request body for updating a role
     */
    public updateRoleWithHttpInfo(organizationId: string, roleId: string, updateRoleRequest: UpdateRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRoleWithHttpInfo(organizationId, roleId, updateRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param updateRoleRequest Request body for updating a role
     */
    public updateRole(organizationId: string, roleId: string, updateRoleRequest: UpdateRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRole(organizationId, roleId, updateRoleRequest, observableOptions);
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
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param createSecretRequest Secret to create
     */
    public createSecretWithHttpInfo(organizationId: string, createSecretRequest: CreateSecretRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSecretWithHttpInfo(organizationId, createSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param createSecretRequest Secret to create
     */
    public createSecret(organizationId: string, createSecretRequest: CreateSecretRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SecretResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSecret(organizationId, createSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public deleteSecretWithHttpInfo(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSecretWithHttpInfo(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public deleteSecret(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSecret(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public getSecretWithHttpInfo(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponents>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecretWithHttpInfo(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public getSecret(organizationId: string, secretId: string, _options?: PromiseConfigurationOptions): Promise<ModelsSecretWithComponents> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecret(organizationId, secretId, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public listSecretsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponentsList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSecretsWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public listSecrets(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsSecretWithComponentsList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSecrets(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param createSecretRequest Secret updates
     */
    public updateSecretWithHttpInfo(organizationId: string, secretId: string, createSecretRequest: CreateSecretRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSecretWithHttpInfo(organizationId, secretId, createSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param createSecretRequest Secret updates
     */
    public updateSecret(organizationId: string, secretId: string, createSecretRequest: CreateSecretRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SecretResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSecret(organizationId, secretId, createSecretRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSessionsApi } from './ObservableAPI';

import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";
export class PromiseSessionsApi {
    private api: ObservableSessionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionsApiRequestFactory,
        responseProcessor?: SessionsApiResponseProcessor
    ) {
        this.api = new ObservableSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.
     * Mint a short-lived API token, optionally scoped to a single org
     * @param [createSessionRequest] Session options
     */
    public createSessionWithHttpInfo(createSessionRequest?: CreateSessionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3CreateSessionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSessionWithHttpInfo(createSessionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.
     * Mint a short-lived API token, optionally scoped to a single org
     * @param [createSessionRequest] Session options
     */
    public createSession(createSessionRequest?: CreateSessionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3CreateSessionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSession(createSessionRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTransformSandboxApi } from './ObservableAPI';

import { TransformSandboxApiRequestFactory, TransformSandboxApiResponseProcessor} from "../apis/TransformSandboxApi";
export class PromiseTransformSandboxApi {
    private api: ObservableTransformSandboxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformSandboxApiRequestFactory,
        responseProcessor?: TransformSandboxApiResponseProcessor
    ) {
        this.api = new ObservableTransformSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param organizationId Organization ID
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformationWithHttpInfo(organizationId: string, applyTransformationV2Request: ApplyTransformationV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformationWithHttpInfo(organizationId, applyTransformationV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param organizationId Organization ID
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformation(organizationId: string, applyTransformationV2Request: ApplyTransformationV2Request, _options?: PromiseConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformation(organizationId, applyTransformationV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformationV2WithHttpInfo(applyTransformationV2Request: ApplyTransformationV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformationV2WithHttpInfo(applyTransformationV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformationV2(applyTransformationV2Request: ApplyTransformationV2Request, _options?: PromiseConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformationV2(applyTransformationV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param generateRecordRequest Record generation parameters
     */
    public generateRecordWithHttpInfo(generateRecordRequest: GenerateRecordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2GenerateRecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateRecordWithHttpInfo(generateRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param generateRecordRequest Record generation parameters
     */
    public generateRecord(generateRecordRequest: GenerateRecordRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2GenerateRecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateRecord(generateRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public listTemplatesWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ListTemplatesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplatesWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public listTemplates(body?: any, _options?: PromiseConfigurationOptions): Promise<RoutesV2ListTemplatesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplates(body, observableOptions);
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
     * Get transform metadata
     * Get transform metadata
     * @param operationTypeId Transform type ID
     * @param [body]
     */
    public getTransformTypeMetaWithHttpInfo(operationTypeId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformTypeMetaWithHttpInfo(operationTypeId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param operationTypeId Transform type ID
     * @param [body]
     */
    public getTransformTypeMeta(operationTypeId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformTypeMeta(operationTypeId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public listTransformTypesWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<OperationInformation>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTransformTypesWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public listTransformTypes(body?: any, _options?: PromiseConfigurationOptions): Promise<Array<OperationInformation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTransformTypes(body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTransformsRecommendationsApi } from './ObservableAPI';

import { TransformsRecommendationsApiRequestFactory, TransformsRecommendationsApiResponseProcessor} from "../apis/TransformsRecommendationsApi";
export class PromiseTransformsRecommendationsApi {
    private api: ObservableTransformsRecommendationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformsRecommendationsApiRequestFactory,
        responseProcessor?: TransformsRecommendationsApiResponseProcessor
    ) {
        this.api = new ObservableTransformsRecommendationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param createTransformRecommendationRequest Security data to analyze
     */
    public createTransformRecommendationWithHttpInfo(organizationId: string, createTransformRecommendationRequest: CreateTransformRecommendationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SecurityDataAnalysis>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransformRecommendationWithHttpInfo(organizationId, createTransformRecommendationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param createTransformRecommendationRequest Security data to analyze
     */
    public createTransformRecommendation(organizationId: string, createTransformRecommendationRequest: CreateTransformRecommendationRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3SecurityDataAnalysis> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransformRecommendation(organizationId, createTransformRecommendationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param organizationId Organization ID
     */
    public listAvailableOptimizersWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoutesV3OptimizerType>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAvailableOptimizersWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param organizationId Organization ID
     */
    public listAvailableOptimizers(organizationId: string, _options?: PromiseConfigurationOptions): Promise<Array<RoutesV3OptimizerType>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAvailableOptimizers(organizationId, observableOptions);
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
     * Export transform to YAML format
     * Export transform to YAML
     * @param exportTransformRequest Transform to export and optional metadata
     */
    public exportTransformWithHttpInfo(exportTransformRequest: ExportTransformRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.exportTransformWithHttpInfo(exportTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param exportTransformRequest Transform to export and optional metadata
     */
    public exportTransform(exportTransformRequest: ExportTransformRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.exportTransform(exportTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformDetailsFromRepositoryWithHttpInfo(transformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformDetailsFromRepositoryWithHttpInfo(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformDetailsFromRepository(transformId: string, _options?: PromiseConfigurationOptions): Promise<CommunityTransformsInternalTransformConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformDetailsFromRepository(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformRepositoryDetailsWithHttpInfo(transformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformRepositoryDetailsWithHttpInfo(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformRepositoryDetails(transformId: string, _options?: PromiseConfigurationOptions): Promise<ModelsTransformsRepositoryTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformRepositoryDetails(transformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public importTransformWithHttpInfo(body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3ImportTransformResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.importTransformWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public importTransform(body: any, _options?: PromiseConfigurationOptions): Promise<RoutesV3ImportTransformResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.importTransform(body, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     */
    public listCommunityTransformsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformsIndex>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCommunityTransformsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     */
    public listCommunityTransforms(_options?: PromiseConfigurationOptions): Promise<CommunityTransformsInternalTransformsIndex> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCommunityTransforms(observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param [limit] Number of items to return (default: 10)
     * @param [offset] Number of items to skip (default: 0)
     */
    public listTransformRepositoryWithHttpInfo(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTransformRepositoryWithHttpInfo(limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param [limit] Number of items to return (default: 10)
     * @param [offset] Number of items to skip (default: 0)
     */
    public listTransformRepository(limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsTransformsRepositoryList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTransformRepository(limit, offset, observableOptions);
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
     * Create user
     * Create user
     * @param [body]
     */
    public createUserWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUserWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public createUser(body?: any, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUser(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     */
    public enableMFAWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthenticationtypesMFAEnrollmentTicket>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enableMFAWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     */
    public enableMFA(_options?: PromiseConfigurationOptions): Promise<AuthenticationtypesMFAEnrollmentTicket> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enableMFA(observableOptions);
        return result.toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     * @param organizationId Organization ID
     */
    public getActiveUserWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesUserWithRoles>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActiveUserWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     * @param organizationId Organization ID
     */
    public getActiveUser(organizationId: string, _options?: PromiseConfigurationOptions): Promise<RoutesUserWithRoles> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActiveUser(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     */
    public getMFAStatusWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3MFAStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMFAStatusWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     */
    public getMFAStatus(_options?: PromiseConfigurationOptions): Promise<RoutesV3MFAStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMFAStatus(observableOptions);
        return result.toPromise();
    }


}



