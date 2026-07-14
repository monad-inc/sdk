import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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
import { ModelsResourceUsage } from '../models/ModelsResourceUsage';
import { ModelsResourceUsageList } from '../models/ModelsResourceUsageList';
import { ModelsRoleWithPermissions } from '../models/ModelsRoleWithPermissions';
import { ModelsRoleWithPermissionsList } from '../models/ModelsRoleWithPermissionsList';
import { ModelsSchemaDetection } from '../models/ModelsSchemaDetection';
import { ModelsSecret } from '../models/ModelsSecret';
import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { ModelsSecretWithComponentsList } from '../models/ModelsSecretWithComponentsList';
import { ModelsShareDetails } from '../models/ModelsShareDetails';
import { ModelsSharedResource } from '../models/ModelsSharedResource';
import { ModelsSharedResourceList } from '../models/ModelsSharedResourceList';
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
import { RoutesV3SchemaHistoryEntryResponse } from '../models/RoutesV3SchemaHistoryEntryResponse';
import { RoutesV3SchemaStateResponse } from '../models/RoutesV3SchemaStateResponse';
import { RoutesV3SecurityDataAnalysis } from '../models/RoutesV3SecurityDataAnalysis';
import { RoutesV3ShareChangesRequest } from '../models/RoutesV3ShareChangesRequest';
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

import { ObservableAlertRulesApi } from "./ObservableAPI";
import { AlertRulesApiRequestFactory, AlertRulesApiResponseProcessor} from "../apis/AlertRulesApi";

export interface AlertRulesApiCreateAlertRuleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApicreateAlertRule
     */
    organizationId: string
    /**
     * Request body for creating an alert rule
     * @type CreateAlertRuleRequest
     * @memberof AlertRulesApicreateAlertRule
     */
    createAlertRuleRequest: CreateAlertRuleRequest
}

export interface AlertRulesApiDeleteAlertRuleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApideleteAlertRule
     */
    organizationId: string
    /**
     * Alert Rule ID to delete
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApideleteAlertRule
     */
    alertRuleId: string
}

export interface AlertRulesApiGetAlertRuleByIDRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApigetAlertRuleByID
     */
    organizationId: string
    /**
     * Alert Rule ID to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApigetAlertRuleByID
     */
    alertRuleId: string
}

export interface AlertRulesApiGetAlertRuleConfigMetaRequest {
    /**
     * Alert Rule Type ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApigetAlertRuleConfigMeta
     */
    alertRuleTypeId: string
}

export interface AlertRulesApiListAlertRuleTypesRequest {
}

export interface AlertRulesApiListAlertRulesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApilistAlertRules
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof AlertRulesApilistAlertRules
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof AlertRulesApilistAlertRules
     */
    offset?: number
}

export interface AlertRulesApiUpdateAlertRuleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApiupdateAlertRule
     */
    organizationId: string
    /**
     * Alert Rule ID to update
     * Defaults to: undefined
     * @type string
     * @memberof AlertRulesApiupdateAlertRule
     */
    alertRuleId: string
    /**
     * Request body for updating an alert rule
     * @type UpdateAlertRuleRequest
     * @memberof AlertRulesApiupdateAlertRule
     */
    updateAlertRuleRequest: UpdateAlertRuleRequest
}

export class ObjectAlertRulesApi {
    private api: ObservableAlertRulesApi

    public constructor(configuration: Configuration, requestFactory?: AlertRulesApiRequestFactory, responseProcessor?: AlertRulesApiResponseProcessor) {
        this.api = new ObservableAlertRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param param the request object
     */
    public createAlertRuleWithHttpInfo(param: AlertRulesApiCreateAlertRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        return this.api.createAlertRuleWithHttpInfo(param.organizationId, param.createAlertRuleRequest,  options).toPromise();
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param param the request object
     */
    public createAlertRule(param: AlertRulesApiCreateAlertRuleRequest, options?: ConfigurationOptions): Promise<ModelsAlertRule> {
        return this.api.createAlertRule(param.organizationId, param.createAlertRuleRequest,  options).toPromise();
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param param the request object
     */
    public deleteAlertRuleWithHttpInfo(param: AlertRulesApiDeleteAlertRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAlertRuleWithHttpInfo(param.organizationId, param.alertRuleId,  options).toPromise();
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param param the request object
     */
    public deleteAlertRule(param: AlertRulesApiDeleteAlertRuleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAlertRule(param.organizationId, param.alertRuleId,  options).toPromise();
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param param the request object
     */
    public getAlertRuleByIDWithHttpInfo(param: AlertRulesApiGetAlertRuleByIDRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        return this.api.getAlertRuleByIDWithHttpInfo(param.organizationId, param.alertRuleId,  options).toPromise();
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param param the request object
     */
    public getAlertRuleByID(param: AlertRulesApiGetAlertRuleByIDRequest, options?: ConfigurationOptions): Promise<ModelsAlertRule> {
        return this.api.getAlertRuleByID(param.organizationId, param.alertRuleId,  options).toPromise();
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param param the request object
     */
    public getAlertRuleConfigMetaWithHttpInfo(param: AlertRulesApiGetAlertRuleConfigMetaRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlertsAlertMeta>> {
        return this.api.getAlertRuleConfigMetaWithHttpInfo(param.alertRuleTypeId,  options).toPromise();
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param param the request object
     */
    public getAlertRuleConfigMeta(param: AlertRulesApiGetAlertRuleConfigMetaRequest, options?: ConfigurationOptions): Promise<AlertsAlertMeta> {
        return this.api.getAlertRuleConfigMeta(param.alertRuleTypeId,  options).toPromise();
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     * @param param the request object
     */
    public listAlertRuleTypesWithHttpInfo(param: AlertRulesApiListAlertRuleTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlertsAlertMeta>>> {
        return this.api.listAlertRuleTypesWithHttpInfo( options).toPromise();
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     * @param param the request object
     */
    public listAlertRuleTypes(param: AlertRulesApiListAlertRuleTypesRequest = {}, options?: ConfigurationOptions): Promise<Array<AlertsAlertMeta>> {
        return this.api.listAlertRuleTypes( options).toPromise();
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param param the request object
     */
    public listAlertRulesWithHttpInfo(param: AlertRulesApiListAlertRulesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAlertRuleList>> {
        return this.api.listAlertRulesWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param param the request object
     */
    public listAlertRules(param: AlertRulesApiListAlertRulesRequest, options?: ConfigurationOptions): Promise<ModelsAlertRuleList> {
        return this.api.listAlertRules(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param param the request object
     */
    public updateAlertRuleWithHttpInfo(param: AlertRulesApiUpdateAlertRuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        return this.api.updateAlertRuleWithHttpInfo(param.organizationId, param.alertRuleId, param.updateAlertRuleRequest,  options).toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param param the request object
     */
    public updateAlertRule(param: AlertRulesApiUpdateAlertRuleRequest, options?: ConfigurationOptions): Promise<ModelsAlertRule> {
        return this.api.updateAlertRule(param.organizationId, param.alertRuleId, param.updateAlertRuleRequest,  options).toPromise();
    }

}

import { ObservableAlertsApi } from "./ObservableAPI";
import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi";

export interface AlertsApiListAlertsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    organizationId: string
    /**
     * Comma-separated alert rule IDs
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    ruleIds?: string
    /**
     * Comma-separated severity levels
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    severities?: string
    /**
     * Comma-separated pipeline IDs
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    pipelineIds?: string
    /**
     * Resource type filter
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    resourceType?: string
    /**
     * Specific resource ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    resourceId?: string
    /**
     * RFC3339 timestamp for start time
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    since?: string
    /**
     * RFC3339 timestamp for end time
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApilistAlerts
     */
    until?: string
}

export interface AlertsApiStreamAlertsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5m\&#39;, \&#39;1h\&#39;, \&#39;24h\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    last?: string
    /**
     * Comma-separated alert rule IDs
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    ruleIds?: string
    /**
     * Comma-separated severity levels
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    severities?: string
    /**
     * Comma-separated resource IDs
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    resourceIds?: string
    /**
     * Resource type filter
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApistreamAlerts
     */
    resourceType?: string
}

export class ObjectAlertsApi {
    private api: ObservableAlertsApi

    public constructor(configuration: Configuration, requestFactory?: AlertsApiRequestFactory, responseProcessor?: AlertsApiResponseProcessor) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of recent historical alerts for an organization
     * List alerts with pagination
     * @param param the request object
     */
    public listAlertsWithHttpInfo(param: AlertsApiListAlertsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3AlertList>> {
        return this.api.listAlertsWithHttpInfo(param.organizationId, param.ruleIds, param.severities, param.pipelineIds, param.resourceType, param.resourceId, param.since, param.until,  options).toPromise();
    }

    /**
     * Get list of recent historical alerts for an organization
     * List alerts with pagination
     * @param param the request object
     */
    public listAlerts(param: AlertsApiListAlertsRequest, options?: ConfigurationOptions): Promise<RoutesV3AlertList> {
        return this.api.listAlerts(param.organizationId, param.ruleIds, param.severities, param.pipelineIds, param.resourceType, param.resourceId, param.since, param.until,  options).toPromise();
    }

    /**
     * Stream alerts for an organization using Server-Sent Events
     * Stream alerts in real-time
     * @param param the request object
     */
    public streamAlertsWithHttpInfo(param: AlertsApiStreamAlertsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamAlertsWithHttpInfo(param.organizationId, param.since, param.last, param.ruleIds, param.severities, param.resourceIds, param.resourceType,  options).toPromise();
    }

    /**
     * Stream alerts for an organization using Server-Sent Events
     * Stream alerts in real-time
     * @param param the request object
     */
    public streamAlerts(param: AlertsApiStreamAlertsRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamAlerts(param.organizationId, param.since, param.last, param.ruleIds, param.severities, param.resourceIds, param.resourceType,  options).toPromise();
    }

}

import { ObservableAuditLogsApi } from "./ObservableAPI";
import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";

export interface AuditLogsApiGetOrganizationAuditLogHistogramRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    organizationId: string
    /**
     * Bucket window start (inclusive), RFC3339
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    _from: string
    /**
     * Bucket window end (exclusive), RFC3339
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    to: string
    /**
     * Number of equal-width buckets (default 100, max 500)
     * Defaults to: undefined
     * @type number
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    buckets?: number
    /**
     * Filter by resource type; with resource_id selects the merged feed
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    resourceType?: string
    /**
     * Filter by resource ID; requires resource_type
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    resourceId?: string
    /**
     * Filter by actor ID
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    actorId?: string
    /**
     * Filter by action (insert, update, delete)
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApigetOrganizationAuditLogHistogram
     */
    action?: string
}

export interface AuditLogsApiListOrganizationAuditLogsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    organizationId: string
    /**
     * Page size (default 50, max 100)
     * Defaults to: undefined
     * @type number
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    limit?: number
    /**
     * Opaque cursor from a previous response; filters are carried by the cursor
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    cursor?: string
    /**
     * Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    resourceType?: string
    /**
     * Filter by resource ID; requires resource_type
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    resourceId?: string
    /**
     * Filter by actor ID
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    actorId?: string
    /**
     * Filter by action (insert, update, delete)
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    action?: string
    /**
     * Only rows at or after this RFC3339 timestamp
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    _from?: string
    /**
     * Only rows before this RFC3339 timestamp
     * Defaults to: undefined
     * @type string
     * @memberof AuditLogsApilistOrganizationAuditLogs
     */
    to?: string
}

export class ObjectAuditLogsApi {
    private api: ObservableAuditLogsApi

    public constructor(configuration: Configuration, requestFactory?: AuditLogsApiRequestFactory, responseProcessor?: AuditLogsApiResponseProcessor) {
        this.api = new ObservableAuditLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bucketed change counts over [from, to) for the audit timeline. For resource_type=pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.
     * Audit log change histogram
     * @param param the request object
     */
    public getOrganizationAuditLogHistogramWithHttpInfo(param: AuditLogsApiGetOrganizationAuditLogHistogramRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationAuditLogHistogram>> {
        return this.api.getOrganizationAuditLogHistogramWithHttpInfo(param.organizationId, param._from, param.to, param.buckets, param.resourceType, param.resourceId, param.actorId, param.action,  options).toPromise();
    }

    /**
     * Bucketed change counts over [from, to) for the audit timeline. For resource_type=pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.
     * Audit log change histogram
     * @param param the request object
     */
    public getOrganizationAuditLogHistogram(param: AuditLogsApiGetOrganizationAuditLogHistogramRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationAuditLogHistogram> {
        return this.api.getOrganizationAuditLogHistogram(param.organizationId, param._from, param.to, param.buckets, param.resourceType, param.resourceId, param.actorId, param.action,  options).toPromise();
    }

    /**
     * List the organization\'s audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline\'s merged history: the pipeline\'s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.
     * List organization audit logs
     * @param param the request object
     */
    public listOrganizationAuditLogsWithHttpInfo(param: AuditLogsApiListOrganizationAuditLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationAuditLogList>> {
        return this.api.listOrganizationAuditLogsWithHttpInfo(param.organizationId, param.limit, param.cursor, param.resourceType, param.resourceId, param.actorId, param.action, param._from, param.to,  options).toPromise();
    }

    /**
     * List the organization\'s audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline\'s merged history: the pipeline\'s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.
     * List organization audit logs
     * @param param the request object
     */
    public listOrganizationAuditLogs(param: AuditLogsApiListOrganizationAuditLogsRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationAuditLogList> {
        return this.api.listOrganizationAuditLogs(param.organizationId, param.limit, param.cursor, param.resourceType, param.resourceId, param.actorId, param.action, param._from, param.to,  options).toPromise();
    }

}

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiGetTokenRequest {
    /**
     * Login request
     * @type GetTokenRequest
     * @memberof AuthenticationApigetToken
     */
    getTokenRequest: GetTokenRequest
}

export interface AuthenticationApiLoginCallbackHandlerRequest {
}

export interface AuthenticationApiLoginHandlerRequest {
}

export interface AuthenticationApiResendVerificationHandlerRequest {
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param param the request object
     */
    public getTokenWithHttpInfo(param: AuthenticationApiGetTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<AuthenticationtypesTokenResponse>> {
        return this.api.getTokenWithHttpInfo(param.getTokenRequest,  options).toPromise();
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param param the request object
     */
    public getToken(param: AuthenticationApiGetTokenRequest, options?: ConfigurationOptions): Promise<AuthenticationtypesTokenResponse> {
        return this.api.getToken(param.getTokenRequest,  options).toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     * @param param the request object
     */
    public loginCallbackHandlerWithHttpInfo(param: AuthenticationApiLoginCallbackHandlerRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.loginCallbackHandlerWithHttpInfo( options).toPromise();
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     * @param param the request object
     */
    public loginCallbackHandler(param: AuthenticationApiLoginCallbackHandlerRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.loginCallbackHandler( options).toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     * @param param the request object
     */
    public loginHandlerWithHttpInfo(param: AuthenticationApiLoginHandlerRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.loginHandlerWithHttpInfo( options).toPromise();
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     * @param param the request object
     */
    public loginHandler(param: AuthenticationApiLoginHandlerRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.loginHandler( options).toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     * @param param the request object
     */
    public resendVerificationHandlerWithHttpInfo(param: AuthenticationApiResendVerificationHandlerRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.resendVerificationHandlerWithHttpInfo( options).toPromise();
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     * @param param the request object
     */
    public resendVerificationHandler(param: AuthenticationApiResendVerificationHandlerRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.resendVerificationHandler( options).toPromise();
    }

}

import { ObservableBillingAccountsApi } from "./ObservableAPI";
import { BillingAccountsApiRequestFactory, BillingAccountsApiResponseProcessor} from "../apis/BillingAccountsApi";

export interface BillingAccountsApiCreateBillingAccountRequest {
    /**
     * Request body for creating a billing account
     * @type CreateBillingAccountRequest
     * @memberof BillingAccountsApicreateBillingAccount
     */
    createBillingAccountRequest: CreateBillingAccountRequest
}

export interface BillingAccountsApiDeleteBillingAccountRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsApideleteBillingAccount
     */
    billingAccountId: string
}

export interface BillingAccountsApiGetBillingAccountRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsApigetBillingAccount
     */
    billingAccountId: string
}

export interface BillingAccountsApiGetBillingAccountsRequest {
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof BillingAccountsApigetBillingAccounts
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof BillingAccountsApigetBillingAccounts
     */
    offset?: number
}

export interface BillingAccountsApiUpdateBillingAccountRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsApiupdateBillingAccount
     */
    billingAccountId: string
    /**
     * Request body for updating a billing account
     * @type UpdateBillingAccountRequest
     * @memberof BillingAccountsApiupdateBillingAccount
     */
    updateBillingAccountRequest: UpdateBillingAccountRequest
}

export class ObjectBillingAccountsApi {
    private api: ObservableBillingAccountsApi

    public constructor(configuration: Configuration, requestFactory?: BillingAccountsApiRequestFactory, responseProcessor?: BillingAccountsApiResponseProcessor) {
        this.api = new ObservableBillingAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param param the request object
     */
    public createBillingAccountWithHttpInfo(param: BillingAccountsApiCreateBillingAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        return this.api.createBillingAccountWithHttpInfo(param.createBillingAccountRequest,  options).toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param param the request object
     */
    public createBillingAccount(param: BillingAccountsApiCreateBillingAccountRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccount> {
        return this.api.createBillingAccount(param.createBillingAccountRequest,  options).toPromise();
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param param the request object
     */
    public deleteBillingAccountWithHttpInfo(param: BillingAccountsApiDeleteBillingAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteBillingAccountWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param param the request object
     */
    public deleteBillingAccount(param: BillingAccountsApiDeleteBillingAccountRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteBillingAccount(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param param the request object
     */
    public getBillingAccountWithHttpInfo(param: BillingAccountsApiGetBillingAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        return this.api.getBillingAccountWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param param the request object
     */
    public getBillingAccount(param: BillingAccountsApiGetBillingAccountRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccount> {
        return this.api.getBillingAccount(param.billingAccountId,  options).toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param param the request object
     */
    public getBillingAccountsWithHttpInfo(param: BillingAccountsApiGetBillingAccountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountList>> {
        return this.api.getBillingAccountsWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param param the request object
     */
    public getBillingAccounts(param: BillingAccountsApiGetBillingAccountsRequest = {}, options?: ConfigurationOptions): Promise<ModelsBillingAccountList> {
        return this.api.getBillingAccounts(param.limit, param.offset,  options).toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param param the request object
     */
    public updateBillingAccountWithHttpInfo(param: BillingAccountsApiUpdateBillingAccountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        return this.api.updateBillingAccountWithHttpInfo(param.billingAccountId, param.updateBillingAccountRequest,  options).toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param param the request object
     */
    public updateBillingAccount(param: BillingAccountsApiUpdateBillingAccountRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccount> {
        return this.api.updateBillingAccount(param.billingAccountId, param.updateBillingAccountRequest,  options).toPromise();
    }

}

import { ObservableBillingAccountsRBACApi } from "./ObservableAPI";
import { BillingAccountsRBACApiRequestFactory, BillingAccountsRBACApiResponseProcessor} from "../apis/BillingAccountsRBACApi";

export interface BillingAccountsRBACApiCreateBillingAccountRoleRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApicreateBillingAccountRole
     */
    billingAccountId: string
    /**
     * Create Billing Account Role Request
     * @type CreateBillingAccountRoleRequest
     * @memberof BillingAccountsRBACApicreateBillingAccountRole
     */
    createBillingAccountRoleRequest: CreateBillingAccountRoleRequest
}

export interface BillingAccountsRBACApiCreateBillingAccountUserRoleRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApicreateBillingAccountUserRole
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApicreateBillingAccountUserRole
     */
    roleId: string
    /**
     * Create Billing Account User Role Request
     * @type CreateBillingAccountUserRoleRequest
     * @memberof BillingAccountsRBACApicreateBillingAccountUserRole
     */
    createBillingAccountUserRoleRequest: CreateBillingAccountUserRoleRequest
}

export interface BillingAccountsRBACApiDeleteBillingAccountRoleRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApideleteBillingAccountRole
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApideleteBillingAccountRole
     */
    roleId: string
}

export interface BillingAccountsRBACApiDeleteBillingAccountUserRoleRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApideleteBillingAccountUserRole
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApideleteBillingAccountUserRole
     */
    roleId: string
    /**
     * User ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApideleteBillingAccountUserRole
     */
    userId: string
}

export interface BillingAccountsRBACApiGetBillingAccountRoleRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApigetBillingAccountRole
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApigetBillingAccountRole
     */
    roleId: string
}

export interface BillingAccountsRBACApiGetBillingAccountRolesRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApigetBillingAccountRoles
     */
    billingAccountId: string
}

export interface BillingAccountsRBACApiGetBillingPermissionsRequest {
}

export interface BillingAccountsRBACApiUpdateBillingAccountRoleRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApiupdateBillingAccountRole
     */
    billingAccountId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingAccountsRBACApiupdateBillingAccountRole
     */
    roleId: string
    /**
     * Update Billing Account Role Request
     * @type UpdateBillingAccountRoleRequest
     * @memberof BillingAccountsRBACApiupdateBillingAccountRole
     */
    updateBillingAccountRoleRequest: UpdateBillingAccountRoleRequest
}

export class ObjectBillingAccountsRBACApi {
    private api: ObservableBillingAccountsRBACApi

    public constructor(configuration: Configuration, requestFactory?: BillingAccountsRBACApiRequestFactory, responseProcessor?: BillingAccountsRBACApiResponseProcessor) {
        this.api = new ObservableBillingAccountsRBACApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param param the request object
     */
    public createBillingAccountRoleWithHttpInfo(param: BillingAccountsRBACApiCreateBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        return this.api.createBillingAccountRoleWithHttpInfo(param.billingAccountId, param.createBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param param the request object
     */
    public createBillingAccountRole(param: BillingAccountsRBACApiCreateBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccountRole> {
        return this.api.createBillingAccountRole(param.billingAccountId, param.createBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param param the request object
     */
    public createBillingAccountUserRoleWithHttpInfo(param: BillingAccountsRBACApiCreateBillingAccountUserRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.createBillingAccountUserRoleWithHttpInfo(param.billingAccountId, param.roleId, param.createBillingAccountUserRoleRequest,  options).toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param param the request object
     */
    public createBillingAccountUserRole(param: BillingAccountsRBACApiCreateBillingAccountUserRoleRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.createBillingAccountUserRole(param.billingAccountId, param.roleId, param.createBillingAccountUserRoleRequest,  options).toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param param the request object
     */
    public deleteBillingAccountRoleWithHttpInfo(param: BillingAccountsRBACApiDeleteBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.deleteBillingAccountRoleWithHttpInfo(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param param the request object
     */
    public deleteBillingAccountRole(param: BillingAccountsRBACApiDeleteBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.deleteBillingAccountRole(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param param the request object
     */
    public deleteBillingAccountUserRoleWithHttpInfo(param: BillingAccountsRBACApiDeleteBillingAccountUserRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.deleteBillingAccountUserRoleWithHttpInfo(param.billingAccountId, param.roleId, param.userId,  options).toPromise();
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param param the request object
     */
    public deleteBillingAccountUserRole(param: BillingAccountsRBACApiDeleteBillingAccountUserRoleRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.deleteBillingAccountUserRole(param.billingAccountId, param.roleId, param.userId,  options).toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param param the request object
     */
    public getBillingAccountRoleWithHttpInfo(param: BillingAccountsRBACApiGetBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        return this.api.getBillingAccountRoleWithHttpInfo(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param param the request object
     */
    public getBillingAccountRole(param: BillingAccountsRBACApiGetBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccountRole> {
        return this.api.getBillingAccountRole(param.billingAccountId, param.roleId,  options).toPromise();
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param param the request object
     */
    public getBillingAccountRolesWithHttpInfo(param: BillingAccountsRBACApiGetBillingAccountRolesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountRole>>> {
        return this.api.getBillingAccountRolesWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param param the request object
     */
    public getBillingAccountRoles(param: BillingAccountsRBACApiGetBillingAccountRolesRequest, options?: ConfigurationOptions): Promise<Array<ModelsBillingAccountRole>> {
        return this.api.getBillingAccountRoles(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     * @param param the request object
     */
    public getBillingPermissionsWithHttpInfo(param: BillingAccountsRBACApiGetBillingPermissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ModelsBillingAccountPermission>>> {
        return this.api.getBillingPermissionsWithHttpInfo( options).toPromise();
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     * @param param the request object
     */
    public getBillingPermissions(param: BillingAccountsRBACApiGetBillingPermissionsRequest = {}, options?: ConfigurationOptions): Promise<Array<ModelsBillingAccountPermission>> {
        return this.api.getBillingPermissions( options).toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param param the request object
     */
    public updateBillingAccountRoleWithHttpInfo(param: BillingAccountsRBACApiUpdateBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        return this.api.updateBillingAccountRoleWithHttpInfo(param.billingAccountId, param.roleId, param.updateBillingAccountRoleRequest,  options).toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param param the request object
     */
    public updateBillingAccountRole(param: BillingAccountsRBACApiUpdateBillingAccountRoleRequest, options?: ConfigurationOptions): Promise<ModelsBillingAccountRole> {
        return this.api.updateBillingAccountRole(param.billingAccountId, param.roleId, param.updateBillingAccountRoleRequest,  options).toPromise();
    }

}

import { ObservableBillingProductsApi } from "./ObservableAPI";
import { BillingProductsApiRequestFactory, BillingProductsApiResponseProcessor} from "../apis/BillingProductsApi";

export interface BillingProductsApiCancelBillingAccountSubscriptionRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingProductsApicancelBillingAccountSubscription
     */
    billingAccountId: string
}

export interface BillingProductsApiCreateBillingAccountSubscriptionRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingProductsApicreateBillingAccountSubscription
     */
    billingAccountId: string
    /**
     * Request body for creating a billing subscription
     * @type CreateBillingAccountSubscriptionRequest
     * @memberof BillingProductsApicreateBillingAccountSubscription
     */
    createBillingAccountSubscriptionRequest: CreateBillingAccountSubscriptionRequest
}

export interface BillingProductsApiGetBillingAccountSubscriptionRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingProductsApigetBillingAccountSubscription
     */
    billingAccountId: string
}

export interface BillingProductsApiGetBillingProductsRequest {
    /**
     * Show inactive products
     * Defaults to: undefined
     * @type boolean
     * @memberof BillingProductsApigetBillingProducts
     */
    showInactive?: boolean
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof BillingProductsApigetBillingProducts
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof BillingProductsApigetBillingProducts
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
    public cancelBillingAccountSubscriptionWithHttpInfo(param: BillingProductsApiCancelBillingAccountSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelBillingAccountSubscriptionWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param param the request object
     */
    public cancelBillingAccountSubscription(param: BillingProductsApiCancelBillingAccountSubscriptionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelBillingAccountSubscription(param.billingAccountId,  options).toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param param the request object
     */
    public createBillingAccountSubscriptionWithHttpInfo(param: BillingProductsApiCreateBillingAccountSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>> {
        return this.api.createBillingAccountSubscriptionWithHttpInfo(param.billingAccountId, param.createBillingAccountSubscriptionRequest,  options).toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param param the request object
     */
    public createBillingAccountSubscription(param: BillingProductsApiCreateBillingAccountSubscriptionRequest, options?: ConfigurationOptions): Promise<RoutesV2CreateBillingAccountSubscriptionResponse> {
        return this.api.createBillingAccountSubscription(param.billingAccountId, param.createBillingAccountSubscriptionRequest,  options).toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param param the request object
     */
    public getBillingAccountSubscriptionWithHttpInfo(param: BillingProductsApiGetBillingAccountSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingProduct>> {
        return this.api.getBillingAccountSubscriptionWithHttpInfo(param.billingAccountId,  options).toPromise();
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param param the request object
     */
    public getBillingAccountSubscription(param: BillingProductsApiGetBillingAccountSubscriptionRequest, options?: ConfigurationOptions): Promise<ModelsBillingProduct> {
        return this.api.getBillingAccountSubscription(param.billingAccountId,  options).toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param param the request object
     */
    public getBillingProductsWithHttpInfo(param: BillingProductsApiGetBillingProductsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsBillingProductList>> {
        return this.api.getBillingProductsWithHttpInfo(param.showInactive, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param param the request object
     */
    public getBillingProducts(param: BillingProductsApiGetBillingProductsRequest = {}, options?: ConfigurationOptions): Promise<ModelsBillingProductList> {
        return this.api.getBillingProducts(param.showInactive, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableConditionSandboxApi } from "./ObservableAPI";
import { ConditionSandboxApiRequestFactory, ConditionSandboxApiResponseProcessor} from "../apis/ConditionSandboxApi";

export interface ConditionSandboxApiApplyConditionV2Request {
    /**
     * Condition and record
     * @type ApplyConditionV2Request
     * @memberof ConditionSandboxApiapplyConditionV2
     */
    applyConditionV2Request: ApplyConditionV2Request
}

export class ObjectConditionSandboxApi {
    private api: ObservableConditionSandboxApi

    public constructor(configuration: Configuration, requestFactory?: ConditionSandboxApiRequestFactory, responseProcessor?: ConditionSandboxApiResponseProcessor) {
        this.api = new ObservableConditionSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply a condition to a JSON record
     * Apply condition to record
     * @param param the request object
     */
    public applyConditionV2WithHttpInfo(param: ConditionSandboxApiApplyConditionV2Request, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyConditionResponse>> {
        return this.api.applyConditionV2WithHttpInfo(param.applyConditionV2Request,  options).toPromise();
    }

    /**
     * Apply a condition to a JSON record
     * Apply condition to record
     * @param param the request object
     */
    public applyConditionV2(param: ConditionSandboxApiApplyConditionV2Request, options?: ConfigurationOptions): Promise<RoutesV2ApplyConditionResponse> {
        return this.api.applyConditionV2(param.applyConditionV2Request,  options).toPromise();
    }

}

import { ObservableConditionsApi } from "./ObservableAPI";
import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";

export interface ConditionsApiListConditionsRequest {
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
    public listConditionsWithHttpInfo(param: ConditionsApiListConditionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<LeafconditionsInfo>>> {
        return this.api.listConditionsWithHttpInfo( options).toPromise();
    }

    /**
     * List conditions
     * List conditions
     * @param param the request object
     */
    public listConditions(param: ConditionsApiListConditionsRequest = {}, options?: ConfigurationOptions): Promise<Array<LeafconditionsInfo>> {
        return this.api.listConditions( options).toPromise();
    }

}

import { ObservableConnectionsApi } from "./ObservableAPI";
import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi";

export interface ConnectionsApiCreateConnectionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApicreateConnection
     */
    organizationId: string
    /**
     * Request body for creating a connection
     * @type CreateConnectionRequest
     * @memberof ConnectionsApicreateConnection
     */
    createConnectionRequest: CreateConnectionRequest
}

export interface ConnectionsApiDeleteConnectionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApideleteConnection
     */
    organizationId: string
    /**
     * Connection ID to delete
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApideleteConnection
     */
    connectionId: string
}

export interface ConnectionsApiGetConnectionByIDRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApigetConnectionByID
     */
    organizationId: string
    /**
     * Connection ID to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApigetConnectionByID
     */
    connectionId: string
}

export interface ConnectionsApiListConnectionsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApilistConnections
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof ConnectionsApilistConnections
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof ConnectionsApilistConnections
     */
    offset?: number
}

export interface ConnectionsApiUpdateConnectionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApiupdateConnection
     */
    organizationId: string
    /**
     * Connection ID to update
     * Defaults to: undefined
     * @type string
     * @memberof ConnectionsApiupdateConnection
     */
    connectionId: string
    /**
     * Request body for updating a connection
     * @type UpdateConnectionRequest
     * @memberof ConnectionsApiupdateConnection
     */
    updateConnectionRequest: UpdateConnectionRequest
}

export class ObjectConnectionsApi {
    private api: ObservableConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: ConnectionsApiRequestFactory, responseProcessor?: ConnectionsApiResponseProcessor) {
        this.api = new ObservableConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param param the request object
     */
    public createConnectionWithHttpInfo(param: ConnectionsApiCreateConnectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        return this.api.createConnectionWithHttpInfo(param.organizationId, param.createConnectionRequest,  options).toPromise();
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param param the request object
     */
    public createConnection(param: ConnectionsApiCreateConnectionRequest, options?: ConfigurationOptions): Promise<ModelsConnection> {
        return this.api.createConnection(param.organizationId, param.createConnectionRequest,  options).toPromise();
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param param the request object
     */
    public deleteConnectionWithHttpInfo(param: ConnectionsApiDeleteConnectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteConnectionWithHttpInfo(param.organizationId, param.connectionId,  options).toPromise();
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param param the request object
     */
    public deleteConnection(param: ConnectionsApiDeleteConnectionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteConnection(param.organizationId, param.connectionId,  options).toPromise();
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param param the request object
     */
    public getConnectionByIDWithHttpInfo(param: ConnectionsApiGetConnectionByIDRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        return this.api.getConnectionByIDWithHttpInfo(param.organizationId, param.connectionId,  options).toPromise();
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param param the request object
     */
    public getConnectionByID(param: ConnectionsApiGetConnectionByIDRequest, options?: ConfigurationOptions): Promise<ModelsConnection> {
        return this.api.getConnectionByID(param.organizationId, param.connectionId,  options).toPromise();
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param param the request object
     */
    public listConnectionsWithHttpInfo(param: ConnectionsApiListConnectionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnectionList>> {
        return this.api.listConnectionsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param param the request object
     */
    public listConnections(param: ConnectionsApiListConnectionsRequest, options?: ConfigurationOptions): Promise<ModelsConnectionList> {
        return this.api.listConnections(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param param the request object
     */
    public updateConnectionWithHttpInfo(param: ConnectionsApiUpdateConnectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        return this.api.updateConnectionWithHttpInfo(param.organizationId, param.connectionId, param.updateConnectionRequest,  options).toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param param the request object
     */
    public updateConnection(param: ConnectionsApiUpdateConnectionRequest, options?: ConfigurationOptions): Promise<ModelsConnection> {
        return this.api.updateConnection(param.organizationId, param.connectionId, param.updateConnectionRequest,  options).toPromise();
    }

}

import { ObservableEnrichmentSandboxApi } from "./ObservableAPI";
import { EnrichmentSandboxApiRequestFactory, EnrichmentSandboxApiResponseProcessor} from "../apis/EnrichmentSandboxApi";

export interface EnrichmentSandboxApiEnrichmentSandboxRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentSandboxApienrichmentSandbox
     */
    organizationId: string
    /**
     * Enrichment configuration and record
     * @type EnrichmentSandboxRequest
     * @memberof EnrichmentSandboxApienrichmentSandbox
     */
    enrichmentSandboxRequest: EnrichmentSandboxRequest
}

export class ObjectEnrichmentSandboxApi {
    private api: ObservableEnrichmentSandboxApi

    public constructor(configuration: Configuration, requestFactory?: EnrichmentSandboxApiRequestFactory, responseProcessor?: EnrichmentSandboxApiResponseProcessor) {
        this.api = new ObservableEnrichmentSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param param the request object
     */
    public enrichmentSandboxWithHttpInfo(param: EnrichmentSandboxApiEnrichmentSandboxRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3EnrichmentSandboxResponse>> {
        return this.api.enrichmentSandboxWithHttpInfo(param.organizationId, param.enrichmentSandboxRequest,  options).toPromise();
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param param the request object
     */
    public enrichmentSandbox(param: EnrichmentSandboxApiEnrichmentSandboxRequest, options?: ConfigurationOptions): Promise<RoutesV3EnrichmentSandboxResponse> {
        return this.api.enrichmentSandbox(param.organizationId, param.enrichmentSandboxRequest,  options).toPromise();
    }

}

import { ObservableEnrichmentsApi } from "./ObservableAPI";
import { EnrichmentsApiRequestFactory, EnrichmentsApiResponseProcessor} from "../apis/EnrichmentsApi";

export interface EnrichmentsApiGetEnrichmentTypeMetaRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentsApigetEnrichmentTypeMeta
     */
    organizationId: string
    /**
     * Enrichment type ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentsApigetEnrichmentTypeMeta
     */
    enrichmentTypeId: string
}

export interface EnrichmentsApiListEnrichmentTypesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentsApilistEnrichmentTypes
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
    public getEnrichmentTypeMetaWithHttpInfo(param: EnrichmentsApiGetEnrichmentTypeMetaRequest, options?: ConfigurationOptions): Promise<HttpInfo<EnrichmentConnectorMeta>> {
        return this.api.getEnrichmentTypeMetaWithHttpInfo(param.organizationId, param.enrichmentTypeId,  options).toPromise();
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param param the request object
     */
    public getEnrichmentTypeMeta(param: EnrichmentsApiGetEnrichmentTypeMetaRequest, options?: ConfigurationOptions): Promise<EnrichmentConnectorMeta> {
        return this.api.getEnrichmentTypeMeta(param.organizationId, param.enrichmentTypeId,  options).toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param param the request object
     */
    public listEnrichmentTypesWithHttpInfo(param: EnrichmentsApiListEnrichmentTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<EnrichmentConnectorMeta>>> {
        return this.api.listEnrichmentTypesWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param param the request object
     */
    public listEnrichmentTypes(param: EnrichmentsApiListEnrichmentTypesRequest, options?: ConfigurationOptions): Promise<Array<EnrichmentConnectorMeta>> {
        return this.api.listEnrichmentTypes(param.organizationId,  options).toPromise();
    }

}

import { ObservableFeatureFlagsApi } from "./ObservableAPI";
import { FeatureFlagsApiRequestFactory, FeatureFlagsApiResponseProcessor} from "../apis/FeatureFlagsApi";

export interface FeatureFlagsApiGetFeatureFlagsRequest {
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
    public getFeatureFlagsWithHttpInfo(param: FeatureFlagsApiGetFeatureFlagsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3GetFeatureFlagResponse>> {
        return this.api.getFeatureFlagsWithHttpInfo( options).toPromise();
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     * @param param the request object
     */
    public getFeatureFlags(param: FeatureFlagsApiGetFeatureFlagsRequest = {}, options?: ConfigurationOptions): Promise<RoutesV3GetFeatureFlagResponse> {
        return this.api.getFeatureFlags( options).toPromise();
    }

}

import { ObservableInputsApi } from "./ObservableAPI";
import { InputsApiRequestFactory, InputsApiResponseProcessor} from "../apis/InputsApi";

export interface InputsApiGetInputTypeMetaRequest {
    /**
     * Input type ID
     * Defaults to: undefined
     * @type string
     * @memberof InputsApigetInputTypeMeta
     */
    inputTypeId: string
}

export interface InputsApiListInputTypesRequest {
}

export class ObjectInputsApi {
    private api: ObservableInputsApi

    public constructor(configuration: Configuration, requestFactory?: InputsApiRequestFactory, responseProcessor?: InputsApiResponseProcessor) {
        this.api = new ObservableInputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param param the request object
     */
    public getInputTypeMetaWithHttpInfo(param: InputsApiGetInputTypeMetaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        return this.api.getInputTypeMetaWithHttpInfo(param.inputTypeId,  options).toPromise();
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param param the request object
     */
    public getInputTypeMeta(param: InputsApiGetInputTypeMetaRequest, options?: ConfigurationOptions): Promise<ModelsConnectorMeta> {
        return this.api.getInputTypeMeta(param.inputTypeId,  options).toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param param the request object
     */
    public listInputTypesWithHttpInfo(param: InputsApiListInputTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<InputsConnectorMeta>>> {
        return this.api.listInputTypesWithHttpInfo( options).toPromise();
    }

    /**
     * List inputs
     * List inputs
     * @param param the request object
     */
    public listInputTypes(param: InputsApiListInputTypesRequest = {}, options?: ConfigurationOptions): Promise<Array<InputsConnectorMeta>> {
        return this.api.listInputTypes( options).toPromise();
    }

}

import { ObservableKeyValueStoreApi } from "./ObservableAPI";
import { KeyValueStoreApiRequestFactory, KeyValueStoreApiResponseProcessor} from "../apis/KeyValueStoreApi";

export interface KeyValueStoreApiGetKVLookupMetadataRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetKVLookupMetadata
     */
    organizationId: string
    /**
     * Component ID
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetKVLookupMetadata
     */
    componentId: string
}

export interface KeyValueStoreApiGetKVLookupSampleEntriesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetKVLookupSampleEntries
     */
    organizationId: string
    /**
     * Component ID
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetKVLookupSampleEntries
     */
    componentId: string
    /**
     * Number of sample entries to return
     * Defaults to: undefined
     * @type number
     * @memberof KeyValueStoreApigetKVLookupSampleEntries
     */
    numEntries: number
}

export interface KeyValueStoreApiGetValueFromKvStoreRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetValueFromKvStore
     */
    organizationId: string
    /**
     * Component ID
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetValueFromKvStore
     */
    componentId: string
    /**
     * Key to look up
     * Defaults to: undefined
     * @type string
     * @memberof KeyValueStoreApigetValueFromKvStore
     */
    key: string
}

export class ObjectKeyValueStoreApi {
    private api: ObservableKeyValueStoreApi

    public constructor(configuration: Configuration, requestFactory?: KeyValueStoreApiRequestFactory, responseProcessor?: KeyValueStoreApiResponseProcessor) {
        this.api = new ObservableKeyValueStoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param param the request object
     */
    public getKVLookupMetadataWithHttpInfo(param: KeyValueStoreApiGetKVLookupMetadataRequest, options?: ConfigurationOptions): Promise<HttpInfo<KvlookupGetMetadataResponse>> {
        return this.api.getKVLookupMetadataWithHttpInfo(param.organizationId, param.componentId,  options).toPromise();
    }

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param param the request object
     */
    public getKVLookupMetadata(param: KeyValueStoreApiGetKVLookupMetadataRequest, options?: ConfigurationOptions): Promise<KvlookupGetMetadataResponse> {
        return this.api.getKVLookupMetadata(param.organizationId, param.componentId,  options).toPromise();
    }

    /**
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param param the request object
     */
    public getKVLookupSampleEntriesWithHttpInfo(param: KeyValueStoreApiGetKVLookupSampleEntriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<KvlookupKVEntry>>> {
        return this.api.getKVLookupSampleEntriesWithHttpInfo(param.organizationId, param.componentId, param.numEntries,  options).toPromise();
    }

    /**
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param param the request object
     */
    public getKVLookupSampleEntries(param: KeyValueStoreApiGetKVLookupSampleEntriesRequest, options?: ConfigurationOptions): Promise<Array<KvlookupKVEntry>> {
        return this.api.getKVLookupSampleEntries(param.organizationId, param.componentId, param.numEntries,  options).toPromise();
    }

    /**
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param param the request object
     */
    public getValueFromKvStoreWithHttpInfo(param: KeyValueStoreApiGetValueFromKvStoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<KvlookupKVEntry>> {
        return this.api.getValueFromKvStoreWithHttpInfo(param.organizationId, param.componentId, param.key,  options).toPromise();
    }

    /**
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param param the request object
     */
    public getValueFromKvStore(param: KeyValueStoreApiGetValueFromKvStoreRequest, options?: ConfigurationOptions): Promise<KvlookupKVEntry> {
        return this.api.getValueFromKvStore(param.organizationId, param.componentId, param.key,  options).toPromise();
    }

}

import { ObservableLogsApi } from "./ObservableAPI";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";

export interface LogsApiStreamNodeDataRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeData
     */
    organizationId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeData
     */
    nodeId: string
}

export interface LogsApiStreamNodeLogsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeLogs
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeLogs
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeLogs
     */
    nodeId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeLogs
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamNodeLogs
     */
    last?: string
}

export interface LogsApiStreamOrganizationAPILogsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationAPILogs
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationAPILogs
     */
    since?: string
}

export interface LogsApiStreamOrganizationLogsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationLogs
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationLogs
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationLogs
     */
    last?: string
}

export interface LogsApiStreamOrganizationPipelinesLogsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationPipelinesLogs
     */
    organizationId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamOrganizationPipelinesLogs
     */
    since?: string
}

export interface LogsApiStreamPipelineLogsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamPipelineLogs
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamPipelineLogs
     */
    pipelineId: string
    /**
     * RFC3339 timestamp to start streaming from
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamPipelineLogs
     */
    since?: string
    /**
     * Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof LogsApistreamPipelineLogs
     */
    last?: string
}

export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param param the request object
     */
    public streamNodeDataWithHttpInfo(param: LogsApiStreamNodeDataRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamNodeDataWithHttpInfo(param.organizationId, param.nodeId,  options).toPromise();
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param param the request object
     */
    public streamNodeData(param: LogsApiStreamNodeDataRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamNodeData(param.organizationId, param.nodeId,  options).toPromise();
    }

    /**
     * Stream logs for a specific node within a pipeline and organization
     * Stream node logs
     * @param param the request object
     */
    public streamNodeLogsWithHttpInfo(param: LogsApiStreamNodeLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamNodeLogsWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for a specific node within a pipeline and organization
     * Stream node logs
     * @param param the request object
     */
    public streamNodeLogs(param: LogsApiStreamNodeLogsRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamNodeLogs(param.organizationId, param.pipelineId, param.nodeId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param param the request object
     */
    public streamOrganizationAPILogsWithHttpInfo(param: LogsApiStreamOrganizationAPILogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamOrganizationAPILogsWithHttpInfo(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param param the request object
     */
    public streamOrganizationAPILogs(param: LogsApiStreamOrganizationAPILogsRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamOrganizationAPILogs(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param param the request object
     */
    public streamOrganizationLogsWithHttpInfo(param: LogsApiStreamOrganizationLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamOrganizationLogsWithHttpInfo(param.organizationId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param param the request object
     */
    public streamOrganizationLogs(param: LogsApiStreamOrganizationLogsRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamOrganizationLogs(param.organizationId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param param the request object
     */
    public streamOrganizationPipelinesLogsWithHttpInfo(param: LogsApiStreamOrganizationPipelinesLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamOrganizationPipelinesLogsWithHttpInfo(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param param the request object
     */
    public streamOrganizationPipelinesLogs(param: LogsApiStreamOrganizationPipelinesLogsRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamOrganizationPipelinesLogs(param.organizationId, param.since,  options).toPromise();
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param param the request object
     */
    public streamPipelineLogsWithHttpInfo(param: LogsApiStreamPipelineLogsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.streamPipelineLogsWithHttpInfo(param.organizationId, param.pipelineId, param.since, param.last,  options).toPromise();
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param param the request object
     */
    public streamPipelineLogs(param: LogsApiStreamPipelineLogsRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.streamPipelineLogs(param.organizationId, param.pipelineId, param.since, param.last,  options).toPromise();
    }

}

import { ObservableOauthApi } from "./ObservableAPI";
import { OauthApiRequestFactory, OauthApiResponseProcessor} from "../apis/OauthApi";

export interface OauthApiGetOAuthRedirectRequest {
    /**
     * component type ID
     * Defaults to: undefined
     * @type string
     * @memberof OauthApigetOAuthRedirect
     */
    typeId: string
    /**
     * organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OauthApigetOAuthRedirect
     */
    organizationId: string
}

export interface OauthApiOAuthCallbackRequest {
    /**
     * component type ID
     * Defaults to: undefined
     * @type string
     * @memberof OauthApioAuthCallback
     */
    typeId: string
}

export class ObjectOauthApi {
    private api: ObservableOauthApi

    public constructor(configuration: Configuration, requestFactory?: OauthApiRequestFactory, responseProcessor?: OauthApiResponseProcessor) {
        this.api = new ObservableOauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param param the request object
     */
    public getOAuthRedirectWithHttpInfo(param: OauthApiGetOAuthRedirectRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getOAuthRedirectWithHttpInfo(param.typeId, param.organizationId,  options).toPromise();
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param param the request object
     */
    public getOAuthRedirect(param: OauthApiGetOAuthRedirectRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getOAuthRedirect(param.typeId, param.organizationId,  options).toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param param the request object
     */
    public oAuthCallbackWithHttpInfo(param: OauthApiOAuthCallbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.oAuthCallbackWithHttpInfo(param.typeId,  options).toPromise();
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param param the request object
     */
    public oAuthCallback(param: OauthApiOAuthCallbackRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.oAuthCallback(param.typeId,  options).toPromise();
    }

}

import { ObservableOrganizationAPIKeysApi } from "./ObservableAPI";
import { OrganizationAPIKeysApiRequestFactory, OrganizationAPIKeysApiResponseProcessor} from "../apis/OrganizationAPIKeysApi";

export interface OrganizationAPIKeysApiCreateAPIKeyRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApicreateAPIKey
     */
    organizationId: string
    /**
     * Request body for creating an API key
     * @type CreateAPIKeyRequest
     * @memberof OrganizationAPIKeysApicreateAPIKey
     */
    createAPIKeyRequest: CreateAPIKeyRequest
}

export interface OrganizationAPIKeysApiDeleteAPIKeyRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApideleteAPIKey
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApideleteAPIKey
     */
    apiKeyId: string
}

export interface OrganizationAPIKeysApiGetAPIKeyRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApigetAPIKey
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApigetAPIKey
     */
    apiKeyId: string
}

export interface OrganizationAPIKeysApiListAPIKeysRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApilistAPIKeys
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationAPIKeysApilistAPIKeys
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationAPIKeysApilistAPIKeys
     */
    offset?: number
}

export interface OrganizationAPIKeysApiRegenerateAPIKeyRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApiregenerateAPIKey
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApiregenerateAPIKey
     */
    apiKeyId: string
}

export interface OrganizationAPIKeysApiUpdateAPIKeyRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApiupdateAPIKey
     */
    organizationId: string
    /**
     * API Key ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationAPIKeysApiupdateAPIKey
     */
    apiKeyId: string
    /**
     * Request body for updating an API key
     * @type UpdateAPIKeyRequest
     * @memberof OrganizationAPIKeysApiupdateAPIKey
     */
    updateAPIKeyRequest: UpdateAPIKeyRequest
}

export class ObjectOrganizationAPIKeysApi {
    private api: ObservableOrganizationAPIKeysApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationAPIKeysApiRequestFactory, responseProcessor?: OrganizationAPIKeysApiResponseProcessor) {
        this.api = new ObservableOrganizationAPIKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create API key
     * Create API key
     * @param param the request object
     */
    public createAPIKeyWithHttpInfo(param: OrganizationAPIKeysApiCreateAPIKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        return this.api.createAPIKeyWithHttpInfo(param.organizationId, param.createAPIKeyRequest,  options).toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param param the request object
     */
    public createAPIKey(param: OrganizationAPIKeysApiCreateAPIKeyRequest, options?: ConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        return this.api.createAPIKey(param.organizationId, param.createAPIKeyRequest,  options).toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param param the request object
     */
    public deleteAPIKeyWithHttpInfo(param: OrganizationAPIKeysApiDeleteAPIKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.deleteAPIKeyWithHttpInfo(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Delete API key
     * Delete API key
     * @param param the request object
     */
    public deleteAPIKey(param: OrganizationAPIKeysApiDeleteAPIKeyRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.deleteAPIKey(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param param the request object
     */
    public getAPIKeyWithHttpInfo(param: OrganizationAPIKeysApiGetAPIKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        return this.api.getAPIKeyWithHttpInfo(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Get API key
     * Get API key
     * @param param the request object
     */
    public getAPIKey(param: OrganizationAPIKeysApiGetAPIKeyRequest, options?: ConfigurationOptions): Promise<ModelsAPIKey> {
        return this.api.getAPIKey(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param param the request object
     */
    public listAPIKeysWithHttpInfo(param: OrganizationAPIKeysApiListAPIKeysRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyList>> {
        return this.api.listAPIKeysWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List API keys
     * List API keys
     * @param param the request object
     */
    public listAPIKeys(param: OrganizationAPIKeysApiListAPIKeysRequest, options?: ConfigurationOptions): Promise<ModelsAPIKeyList> {
        return this.api.listAPIKeys(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param param the request object
     */
    public regenerateAPIKeyWithHttpInfo(param: OrganizationAPIKeysApiRegenerateAPIKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        return this.api.regenerateAPIKeyWithHttpInfo(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param param the request object
     */
    public regenerateAPIKey(param: OrganizationAPIKeysApiRegenerateAPIKeyRequest, options?: ConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        return this.api.regenerateAPIKey(param.organizationId, param.apiKeyId,  options).toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param param the request object
     */
    public updateAPIKeyWithHttpInfo(param: OrganizationAPIKeysApiUpdateAPIKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        return this.api.updateAPIKeyWithHttpInfo(param.organizationId, param.apiKeyId, param.updateAPIKeyRequest,  options).toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param param the request object
     */
    public updateAPIKey(param: OrganizationAPIKeysApiUpdateAPIKeyRequest, options?: ConfigurationOptions): Promise<ModelsAPIKey> {
        return this.api.updateAPIKey(param.organizationId, param.apiKeyId, param.updateAPIKeyRequest,  options).toPromise();
    }

}

import { ObservableOrganizationEnrichmentsApi } from "./ObservableAPI";
import { OrganizationEnrichmentsApiRequestFactory, OrganizationEnrichmentsApiResponseProcessor} from "../apis/OrganizationEnrichmentsApi";

export interface OrganizationEnrichmentsApiCreateEnrichmentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApicreateEnrichment
     */
    organizationId: string
    /**
     * Enrichment configuration
     * @type CreateEnrichmentRequest
     * @memberof OrganizationEnrichmentsApicreateEnrichment
     */
    createEnrichmentRequest: CreateEnrichmentRequest
    /**
     * Test connection before creating the enrichment
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationEnrichmentsApicreateEnrichment
     */
    testConnection?: boolean
}

export interface OrganizationEnrichmentsApiDeleteEnrichmentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApideleteEnrichment
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApideleteEnrichment
     */
    enrichmentId: string
}

export interface OrganizationEnrichmentsApiGetEnrichmentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApigetEnrichment
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApigetEnrichment
     */
    enrichmentId: string
}

export interface OrganizationEnrichmentsApiListEnrichmentsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApilistEnrichments
     */
    organizationId: string
    /**
     * Number of results to return (default 100)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationEnrichmentsApilistEnrichments
     */
    limit?: number
    /**
     * Number of results to skip (default 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationEnrichmentsApilistEnrichments
     */
    offset?: number
}

export interface OrganizationEnrichmentsApiReplaceEnrichmentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApireplaceEnrichment
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApireplaceEnrichment
     */
    enrichmentId: string
    /**
     * Enrichment configuration update
     * @type ReplaceEnrichmentRequest
     * @memberof OrganizationEnrichmentsApireplaceEnrichment
     */
    replaceEnrichmentRequest: ReplaceEnrichmentRequest
    /**
     * Test connection before updating the enrichment
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationEnrichmentsApireplaceEnrichment
     */
    testConnection?: boolean
}

export interface OrganizationEnrichmentsApiTestEnrichmentConnectionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApitestEnrichmentConnection
     */
    organizationId: string
    /**
     * Enrichment configuration to test
     * @type TestEnrichmentConnectionRequest
     * @memberof OrganizationEnrichmentsApitestEnrichmentConnection
     */
    testEnrichmentConnectionRequest: TestEnrichmentConnectionRequest
}

export interface OrganizationEnrichmentsApiUpdateEnrichmentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiupdateEnrichment
     */
    organizationId: string
    /**
     * Enrichment ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationEnrichmentsApiupdateEnrichment
     */
    enrichmentId: string
    /**
     * Enrichment configuration update
     * @type UpdateEnrichmentRequest
     * @memberof OrganizationEnrichmentsApiupdateEnrichment
     */
    updateEnrichmentRequest: UpdateEnrichmentRequest
    /**
     * Test connection before updating the enrichment
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationEnrichmentsApiupdateEnrichment
     */
    testConnection?: boolean
}

export class ObjectOrganizationEnrichmentsApi {
    private api: ObservableOrganizationEnrichmentsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationEnrichmentsApiRequestFactory, responseProcessor?: OrganizationEnrichmentsApiResponseProcessor) {
        this.api = new ObservableOrganizationEnrichmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param param the request object
     */
    public createEnrichmentWithHttpInfo(param: OrganizationEnrichmentsApiCreateEnrichmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        return this.api.createEnrichmentWithHttpInfo(param.organizationId, param.createEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param param the request object
     */
    public createEnrichment(param: OrganizationEnrichmentsApiCreateEnrichmentRequest, options?: ConfigurationOptions): Promise<ModelsEnrichment> {
        return this.api.createEnrichment(param.organizationId, param.createEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param param the request object
     */
    public deleteEnrichmentWithHttpInfo(param: OrganizationEnrichmentsApiDeleteEnrichmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        return this.api.deleteEnrichmentWithHttpInfo(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param param the request object
     */
    public deleteEnrichment(param: OrganizationEnrichmentsApiDeleteEnrichmentRequest, options?: ConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        return this.api.deleteEnrichment(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param param the request object
     */
    public getEnrichmentWithHttpInfo(param: OrganizationEnrichmentsApiGetEnrichmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3GetEnrichmentResponse>> {
        return this.api.getEnrichmentWithHttpInfo(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param param the request object
     */
    public getEnrichment(param: OrganizationEnrichmentsApiGetEnrichmentRequest, options?: ConfigurationOptions): Promise<RoutesV3GetEnrichmentResponse> {
        return this.api.getEnrichment(param.organizationId, param.enrichmentId,  options).toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param param the request object
     */
    public listEnrichmentsWithHttpInfo(param: OrganizationEnrichmentsApiListEnrichmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichmentList>> {
        return this.api.listEnrichmentsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param param the request object
     */
    public listEnrichments(param: OrganizationEnrichmentsApiListEnrichmentsRequest, options?: ConfigurationOptions): Promise<ModelsEnrichmentList> {
        return this.api.listEnrichments(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param param the request object
     */
    public replaceEnrichmentWithHttpInfo(param: OrganizationEnrichmentsApiReplaceEnrichmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        return this.api.replaceEnrichmentWithHttpInfo(param.organizationId, param.enrichmentId, param.replaceEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param param the request object
     */
    public replaceEnrichment(param: OrganizationEnrichmentsApiReplaceEnrichmentRequest, options?: ConfigurationOptions): Promise<ModelsEnrichment> {
        return this.api.replaceEnrichment(param.organizationId, param.enrichmentId, param.replaceEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param param the request object
     */
    public testEnrichmentConnectionWithHttpInfo(param: OrganizationEnrichmentsApiTestEnrichmentConnectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        return this.api.testEnrichmentConnectionWithHttpInfo(param.organizationId, param.testEnrichmentConnectionRequest,  options).toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param param the request object
     */
    public testEnrichmentConnection(param: OrganizationEnrichmentsApiTestEnrichmentConnectionRequest, options?: ConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        return this.api.testEnrichmentConnection(param.organizationId, param.testEnrichmentConnectionRequest,  options).toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param param the request object
     */
    public updateEnrichmentWithHttpInfo(param: OrganizationEnrichmentsApiUpdateEnrichmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        return this.api.updateEnrichmentWithHttpInfo(param.organizationId, param.enrichmentId, param.updateEnrichmentRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param param the request object
     */
    public updateEnrichment(param: OrganizationEnrichmentsApiUpdateEnrichmentRequest, options?: ConfigurationOptions): Promise<ModelsEnrichment> {
        return this.api.updateEnrichment(param.organizationId, param.enrichmentId, param.updateEnrichmentRequest, param.testConnection,  options).toPromise();
    }

}

import { ObservableOrganizationInputsApi } from "./ObservableAPI";
import { OrganizationInputsApiRequestFactory, OrganizationInputsApiResponseProcessor} from "../apis/OrganizationInputsApi";

export interface OrganizationInputsApiCreateInputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApicreateInput
     */
    organizationId: string
    /**
     * Input configuration
     * @type CreateInputRequest
     * @memberof OrganizationInputsApicreateInput
     */
    createInputRequest: CreateInputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationInputsApicreateInput
     */
    testConnection?: boolean
}

export interface OrganizationInputsApiDeleteOrganizationInputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApideleteOrganizationInput
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApideleteOrganizationInput
     */
    inputId: string
}

export interface OrganizationInputsApiGetOrganizationInputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApigetOrganizationInput
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApigetOrganizationInput
     */
    inputId: string
}

export interface OrganizationInputsApiListOrganizationInputsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApilistOrganizationInputs
     */
    organizationId: string
    /**
     * Limit the number of organizations returned (default: DefaultLimit)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationInputsApilistOrganizationInputs
     */
    limit?: number
    /**
     * Offset the organizations returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationInputsApilistOrganizationInputs
     */
    offset?: number
}

export interface OrganizationInputsApiReplaceInputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApireplaceInput
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApireplaceInput
     */
    inputId: string
    /**
     * Input configuration update
     * @type ReplaceInputRequest
     * @memberof OrganizationInputsApireplaceInput
     */
    replaceInputRequest: ReplaceInputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationInputsApireplaceInput
     */
    testConnection?: boolean
}

export interface OrganizationInputsApiTestInputConnectionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApitestInputConnection
     */
    organizationId: string
    /**
     * Input configuration to test
     * @type TestInputConnectionRequest
     * @memberof OrganizationInputsApitestInputConnection
     */
    testInputConnectionRequest: TestInputConnectionRequest
}

export interface OrganizationInputsApiUpdateInputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiupdateInput
     */
    organizationId: string
    /**
     * Input ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInputsApiupdateInput
     */
    inputId: string
    /**
     * Input configuration update
     * @type UpdateInputRequest
     * @memberof OrganizationInputsApiupdateInput
     */
    updateInputRequest: UpdateInputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationInputsApiupdateInput
     */
    testConnection?: boolean
}

export class ObjectOrganizationInputsApi {
    private api: ObservableOrganizationInputsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationInputsApiRequestFactory, responseProcessor?: OrganizationInputsApiResponseProcessor) {
        this.api = new ObservableOrganizationInputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param param the request object
     */
    public createInputWithHttpInfo(param: OrganizationInputsApiCreateInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        return this.api.createInputWithHttpInfo(param.organizationId, param.createInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param param the request object
     */
    public createInput(param: OrganizationInputsApiCreateInputRequest, options?: ConfigurationOptions): Promise<ModelsInput> {
        return this.api.createInput(param.organizationId, param.createInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param param the request object
     */
    public deleteOrganizationInputWithHttpInfo(param: OrganizationInputsApiDeleteOrganizationInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteOrganizationInputWithHttpInfo(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Delete input
     * Delete input
     * @param param the request object
     */
    public deleteOrganizationInput(param: OrganizationInputsApiDeleteOrganizationInputRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.deleteOrganizationInput(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Get a configured input in organization
     * Get organization input
     * @param param the request object
     */
    public getOrganizationInputWithHttpInfo(param: OrganizationInputsApiGetOrganizationInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesGetInputResponse>> {
        return this.api.getOrganizationInputWithHttpInfo(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * Get a configured input in organization
     * Get organization input
     * @param param the request object
     */
    public getOrganizationInput(param: OrganizationInputsApiGetOrganizationInputRequest, options?: ConfigurationOptions): Promise<RoutesGetInputResponse> {
        return this.api.getOrganizationInput(param.organizationId, param.inputId,  options).toPromise();
    }

    /**
     * List configured inputs in organization
     * List organization inputs
     * @param param the request object
     */
    public listOrganizationInputsWithHttpInfo(param: OrganizationInputsApiListOrganizationInputsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInputList>> {
        return this.api.listOrganizationInputsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List configured inputs in organization
     * List organization inputs
     * @param param the request object
     */
    public listOrganizationInputs(param: OrganizationInputsApiListOrganizationInputsRequest, options?: ConfigurationOptions): Promise<ModelsInputList> {
        return this.api.listOrganizationInputs(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param param the request object
     */
    public replaceInputWithHttpInfo(param: OrganizationInputsApiReplaceInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        return this.api.replaceInputWithHttpInfo(param.organizationId, param.inputId, param.replaceInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param param the request object
     */
    public replaceInput(param: OrganizationInputsApiReplaceInputRequest, options?: ConfigurationOptions): Promise<ModelsInput> {
        return this.api.replaceInput(param.organizationId, param.inputId, param.replaceInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param param the request object
     */
    public testInputConnectionWithHttpInfo(param: OrganizationInputsApiTestInputConnectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        return this.api.testInputConnectionWithHttpInfo(param.organizationId, param.testInputConnectionRequest,  options).toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param param the request object
     */
    public testInputConnection(param: OrganizationInputsApiTestInputConnectionRequest, options?: ConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        return this.api.testInputConnection(param.organizationId, param.testInputConnectionRequest,  options).toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param param the request object
     */
    public updateInputWithHttpInfo(param: OrganizationInputsApiUpdateInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        return this.api.updateInputWithHttpInfo(param.organizationId, param.inputId, param.updateInputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param param the request object
     */
    public updateInput(param: OrganizationInputsApiUpdateInputRequest, options?: ConfigurationOptions): Promise<ModelsInput> {
        return this.api.updateInput(param.organizationId, param.inputId, param.updateInputRequest, param.testConnection,  options).toPromise();
    }

}

import { ObservableOrganizationInvitesApi } from "./ObservableAPI";
import { OrganizationInvitesApiRequestFactory, OrganizationInvitesApiResponseProcessor} from "../apis/OrganizationInvitesApi";

export interface OrganizationInvitesApiInviteUserRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationInvitesApiinviteUser
     */
    organizationId: string
    /**
     * Request body for inviting a user to an organization
     * @type RoutesInviteUserToOrganizationRequest
     * @memberof OrganizationInvitesApiinviteUser
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
    public inviteUserWithHttpInfo(param: OrganizationInvitesApiInviteUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.inviteUserWithHttpInfo(param.organizationId, param.routesInviteUserToOrganizationRequest,  options).toPromise();
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param param the request object
     */
    public inviteUser(param: OrganizationInvitesApiInviteUserRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.inviteUser(param.organizationId, param.routesInviteUserToOrganizationRequest,  options).toPromise();
    }

}

import { ObservableOrganizationOutputsApi } from "./ObservableAPI";
import { OrganizationOutputsApiRequestFactory, OrganizationOutputsApiResponseProcessor} from "../apis/OrganizationOutputsApi";

export interface OrganizationOutputsApiCreateOutputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApicreateOutput
     */
    organizationId: string
    /**
     * Output configuration
     * @type CreateOutputRequest
     * @memberof OrganizationOutputsApicreateOutput
     */
    createOutputRequest: CreateOutputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationOutputsApicreateOutput
     */
    testConnection?: boolean
}

export interface OrganizationOutputsApiDeleteOrganizationOutputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApideleteOrganizationOutput
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApideleteOrganizationOutput
     */
    outputId: string
}

export interface OrganizationOutputsApiGetOrganizationOutputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApigetOrganizationOutput
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApigetOrganizationOutput
     */
    outputId: string
}

export interface OrganizationOutputsApiListOrganizationOutputsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApilistOrganizationOutputs
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationOutputsApilistOrganizationOutputs
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationOutputsApilistOrganizationOutputs
     */
    offset?: number
}

export interface OrganizationOutputsApiReplaceOutputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApireplaceOutput
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApireplaceOutput
     */
    outputId: string
    /**
     * Output configuration update
     * @type ReplaceOutputRequest
     * @memberof OrganizationOutputsApireplaceOutput
     */
    replaceOutputRequest: ReplaceOutputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationOutputsApireplaceOutput
     */
    testConnection?: boolean
}

export interface OrganizationOutputsApiTestOutputConnectionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApitestOutputConnection
     */
    organizationId: string
    /**
     * Output configuration to test
     * @type TestOutputConnectionRequest
     * @memberof OrganizationOutputsApitestOutputConnection
     */
    testOutputConnectionRequest: TestOutputConnectionRequest
}

export interface OrganizationOutputsApiUpdateOutputRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiupdateOutput
     */
    organizationId: string
    /**
     * Output ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationOutputsApiupdateOutput
     */
    outputId: string
    /**
     * Output configuration update
     * @type UpdateOutputRequest
     * @memberof OrganizationOutputsApiupdateOutput
     */
    updateOutputRequest: UpdateOutputRequest
    /**
     * Test connection before creating the input
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationOutputsApiupdateOutput
     */
    testConnection?: boolean
}

export class ObjectOrganizationOutputsApi {
    private api: ObservableOrganizationOutputsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationOutputsApiRequestFactory, responseProcessor?: OrganizationOutputsApiResponseProcessor) {
        this.api = new ObservableOrganizationOutputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param param the request object
     */
    public createOutputWithHttpInfo(param: OrganizationOutputsApiCreateOutputRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        return this.api.createOutputWithHttpInfo(param.organizationId, param.createOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param param the request object
     */
    public createOutput(param: OrganizationOutputsApiCreateOutputRequest, options?: ConfigurationOptions): Promise<ModelsOutput> {
        return this.api.createOutput(param.organizationId, param.createOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param param the request object
     */
    public deleteOrganizationOutputWithHttpInfo(param: OrganizationOutputsApiDeleteOrganizationOutputRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.deleteOrganizationOutputWithHttpInfo(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Delete output
     * Delete output
     * @param param the request object
     */
    public deleteOrganizationOutput(param: OrganizationOutputsApiDeleteOrganizationOutputRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.deleteOrganizationOutput(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Get a configured output in organization
     * Get a output
     * @param param the request object
     */
    public getOrganizationOutputWithHttpInfo(param: OrganizationOutputsApiGetOrganizationOutputRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesGetOutputResponse>> {
        return this.api.getOrganizationOutputWithHttpInfo(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * Get a configured output in organization
     * Get a output
     * @param param the request object
     */
    public getOrganizationOutput(param: OrganizationOutputsApiGetOrganizationOutputRequest, options?: ConfigurationOptions): Promise<RoutesGetOutputResponse> {
        return this.api.getOrganizationOutput(param.organizationId, param.outputId,  options).toPromise();
    }

    /**
     * List outputs
     * List configured outputs in organization
     * @param param the request object
     */
    public listOrganizationOutputsWithHttpInfo(param: OrganizationOutputsApiListOrganizationOutputsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutputList>> {
        return this.api.listOrganizationOutputsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List outputs
     * List configured outputs in organization
     * @param param the request object
     */
    public listOrganizationOutputs(param: OrganizationOutputsApiListOrganizationOutputsRequest, options?: ConfigurationOptions): Promise<ModelsOutputList> {
        return this.api.listOrganizationOutputs(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param param the request object
     */
    public replaceOutputWithHttpInfo(param: OrganizationOutputsApiReplaceOutputRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        return this.api.replaceOutputWithHttpInfo(param.organizationId, param.outputId, param.replaceOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param param the request object
     */
    public replaceOutput(param: OrganizationOutputsApiReplaceOutputRequest, options?: ConfigurationOptions): Promise<ModelsOutput> {
        return this.api.replaceOutput(param.organizationId, param.outputId, param.replaceOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param param the request object
     */
    public testOutputConnectionWithHttpInfo(param: OrganizationOutputsApiTestOutputConnectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        return this.api.testOutputConnectionWithHttpInfo(param.organizationId, param.testOutputConnectionRequest,  options).toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param param the request object
     */
    public testOutputConnection(param: OrganizationOutputsApiTestOutputConnectionRequest, options?: ConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        return this.api.testOutputConnection(param.organizationId, param.testOutputConnectionRequest,  options).toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param param the request object
     */
    public updateOutputWithHttpInfo(param: OrganizationOutputsApiUpdateOutputRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        return this.api.updateOutputWithHttpInfo(param.organizationId, param.outputId, param.updateOutputRequest, param.testConnection,  options).toPromise();
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param param the request object
     */
    public updateOutput(param: OrganizationOutputsApiUpdateOutputRequest, options?: ConfigurationOptions): Promise<ModelsOutput> {
        return this.api.updateOutput(param.organizationId, param.outputId, param.updateOutputRequest, param.testConnection,  options).toPromise();
    }

}

import { ObservableOrganizationQuotasApi } from "./ObservableAPI";
import { OrganizationQuotasApiRequestFactory, OrganizationQuotasApiResponseProcessor} from "../apis/OrganizationQuotasApi";

export interface OrganizationQuotasApiGetQuotasByOrganizationIDRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationQuotasApigetQuotasByOrganizationID
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationQuotasApigetQuotasByOrganizationID
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationQuotasApigetQuotasByOrganizationID
     */
    offset?: number
    /**
     * 
     * @type any
     * @memberof OrganizationQuotasApigetQuotasByOrganizationID
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
    public getQuotasByOrganizationIDWithHttpInfo(param: OrganizationQuotasApiGetQuotasByOrganizationIDRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        return this.api.getQuotasByOrganizationIDWithHttpInfo(param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

    /**
     * Returns a paginated list of quotas with their latest usage for a given organization
     * Get Organization Quotas
     * @param param the request object
     */
    public getQuotasByOrganizationID(param: OrganizationQuotasApiGetQuotasByOrganizationIDRequest, options?: ConfigurationOptions): Promise<ModelsQuotaList> {
        return this.api.getQuotasByOrganizationID(param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

}

import { ObservableOrganizationTransformsApi } from "./ObservableAPI";
import { OrganizationTransformsApiRequestFactory, OrganizationTransformsApiResponseProcessor} from "../apis/OrganizationTransformsApi";

export interface OrganizationTransformsApiCreateTransformRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApicreateTransform
     */
    organizationId: string
    /**
     * Request body for creating a transform
     * @type CreateTransformRequest
     * @memberof OrganizationTransformsApicreateTransform
     */
    createTransformRequest: CreateTransformRequest
}

export interface OrganizationTransformsApiDeleteOrganizationTransformRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApideleteOrganizationTransform
     */
    organizationId: string
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApideleteOrganizationTransform
     */
    transformId: string
}

export interface OrganizationTransformsApiGetOrganizationTransformRequest {
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApigetOrganizationTransform
     */
    transformId: string
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApigetOrganizationTransform
     */
    organizationId: string
}

export interface OrganizationTransformsApiListOrganizationTransformsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApilistOrganizationTransforms
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationTransformsApilistOrganizationTransforms
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationTransformsApilistOrganizationTransforms
     */
    offset?: number
}

export interface OrganizationTransformsApiUpdateOrganizationTransformRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiupdateOrganizationTransform
     */
    organizationId: string
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationTransformsApiupdateOrganizationTransform
     */
    transformId: string
    /**
     * Request body for updating a transform
     * @type RoutesUpdateTransformRequest
     * @memberof OrganizationTransformsApiupdateOrganizationTransform
     */
    routesUpdateTransformRequest: RoutesUpdateTransformRequest
}

export class ObjectOrganizationTransformsApi {
    private api: ObservableOrganizationTransformsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationTransformsApiRequestFactory, responseProcessor?: OrganizationTransformsApiResponseProcessor) {
        this.api = new ObservableOrganizationTransformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create transform
     * Create transform
     * @param param the request object
     */
    public createTransformWithHttpInfo(param: OrganizationTransformsApiCreateTransformRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        return this.api.createTransformWithHttpInfo(param.organizationId, param.createTransformRequest,  options).toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param param the request object
     */
    public createTransform(param: OrganizationTransformsApiCreateTransformRequest, options?: ConfigurationOptions): Promise<ModelsTransform> {
        return this.api.createTransform(param.organizationId, param.createTransformRequest,  options).toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param param the request object
     */
    public deleteOrganizationTransformWithHttpInfo(param: OrganizationTransformsApiDeleteOrganizationTransformRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteOrganizationTransformWithHttpInfo(param.organizationId, param.transformId,  options).toPromise();
    }

    /**
     * Delete transform
     * Delete transform
     * @param param the request object
     */
    public deleteOrganizationTransform(param: OrganizationTransformsApiDeleteOrganizationTransformRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.deleteOrganizationTransform(param.organizationId, param.transformId,  options).toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param param the request object
     */
    public getOrganizationTransformWithHttpInfo(param: OrganizationTransformsApiGetOrganizationTransformRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesGetTransformResponse>> {
        return this.api.getOrganizationTransformWithHttpInfo(param.transformId, param.organizationId,  options).toPromise();
    }

    /**
     * Get transform
     * Get transform
     * @param param the request object
     */
    public getOrganizationTransform(param: OrganizationTransformsApiGetOrganizationTransformRequest, options?: ConfigurationOptions): Promise<RoutesGetTransformResponse> {
        return this.api.getOrganizationTransform(param.transformId, param.organizationId,  options).toPromise();
    }

    /**
     * List transforms
     * List configured transforms in a transform
     * @param param the request object
     */
    public listOrganizationTransformsWithHttpInfo(param: OrganizationTransformsApiListOrganizationTransformsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransformList>> {
        return this.api.listOrganizationTransformsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List transforms
     * List configured transforms in a transform
     * @param param the request object
     */
    public listOrganizationTransforms(param: OrganizationTransformsApiListOrganizationTransformsRequest, options?: ConfigurationOptions): Promise<ModelsTransformList> {
        return this.api.listOrganizationTransforms(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param param the request object
     */
    public updateOrganizationTransformWithHttpInfo(param: OrganizationTransformsApiUpdateOrganizationTransformRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        return this.api.updateOrganizationTransformWithHttpInfo(param.organizationId, param.transformId, param.routesUpdateTransformRequest,  options).toPromise();
    }

    /**
     * Update transform
     * Update transform
     * @param param the request object
     */
    public updateOrganizationTransform(param: OrganizationTransformsApiUpdateOrganizationTransformRequest, options?: ConfigurationOptions): Promise<ModelsTransform> {
        return this.api.updateOrganizationTransform(param.organizationId, param.transformId, param.routesUpdateTransformRequest,  options).toPromise();
    }

}

import { ObservableOrganizationUsersApi } from "./ObservableAPI";
import { OrganizationUsersApiRequestFactory, OrganizationUsersApiResponseProcessor} from "../apis/OrganizationUsersApi";

export interface OrganizationUsersApiAddUserRequest {
    /**
     * organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiaddUser
     */
    organizationId: string
    /**
     * Request body for adding a user to an organization
     * @type RoutesAddUserToOrganizationRequest
     * @memberof OrganizationUsersApiaddUser
     */
    routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest
}

export interface OrganizationUsersApiListUsersRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApilistUsers
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationUsersApilistUsers
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationUsersApilistUsers
     */
    offset?: number
}

export interface OrganizationUsersApiRemoveUserRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiremoveUser
     */
    organizationId: string
    /**
     * User ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiremoveUser
     */
    userId: string
    /**
     * User Auth Provider ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiremoveUser
     */
    userAuthProviderId: string
}

export interface OrganizationUsersApiUpdateUserRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiupdateUser
     */
    organizationId: string
    /**
     * User ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiupdateUser
     */
    userId: string
    /**
     * Request body for updating a user in an organization
     * @type RoutesUpdateUserInOrganizationRequest
     * @memberof OrganizationUsersApiupdateUser
     */
    routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest
}

export interface OrganizationUsersApiV1OrganizationIdUsersLeavePostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationUsersApiv1OrganizationIdUsersLeavePost
     */
    organizationId: string
}

export class ObjectOrganizationUsersApi {
    private api: ObservableOrganizationUsersApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationUsersApiRequestFactory, responseProcessor?: OrganizationUsersApiResponseProcessor) {
        this.api = new ObservableOrganizationUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param param the request object
     */
    public addUserWithHttpInfo(param: OrganizationUsersApiAddUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        return this.api.addUserWithHttpInfo(param.organizationId, param.routesAddUserToOrganizationRequest,  options).toPromise();
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param param the request object
     */
    public addUser(param: OrganizationUsersApiAddUserRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationUser> {
        return this.api.addUser(param.organizationId, param.routesAddUserToOrganizationRequest,  options).toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param param the request object
     */
    public listUsersWithHttpInfo(param: OrganizationUsersApiListUsersRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUserList>> {
        return this.api.listUsersWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List organization users
     * List organization users
     * @param param the request object
     */
    public listUsers(param: OrganizationUsersApiListUsersRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationUserList> {
        return this.api.listUsers(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param param the request object
     */
    public removeUserWithHttpInfo(param: OrganizationUsersApiRemoveUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.removeUserWithHttpInfo(param.organizationId, param.userId, param.userAuthProviderId,  options).toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param param the request object
     */
    public removeUser(param: OrganizationUsersApiRemoveUserRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.removeUser(param.organizationId, param.userId, param.userAuthProviderId,  options).toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: OrganizationUsersApiUpdateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationUser>> {
        return this.api.updateUserWithHttpInfo(param.organizationId, param.userId, param.routesUpdateUserInOrganizationRequest,  options).toPromise();
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param param the request object
     */
    public updateUser(param: OrganizationUsersApiUpdateUserRequest, options?: ConfigurationOptions): Promise<ModelsOrganizationUser> {
        return this.api.updateUser(param.organizationId, param.userId, param.routesUpdateUserInOrganizationRequest,  options).toPromise();
    }

    /**
     * Leave organization (self-service removal)
     * Leave organization
     * @param param the request object
     */
    public v1OrganizationIdUsersLeavePostWithHttpInfo(param: OrganizationUsersApiV1OrganizationIdUsersLeavePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1OrganizationIdUsersLeavePostWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * Leave organization (self-service removal)
     * Leave organization
     * @param param the request object
     */
    public v1OrganizationIdUsersLeavePost(param: OrganizationUsersApiV1OrganizationIdUsersLeavePostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1OrganizationIdUsersLeavePost(param.organizationId,  options).toPromise();
    }

}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";

export interface OrganizationsApiCreateChildOrganizationRequest {
    /**
     * Parent Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApicreateChildOrganization
     */
    organizationId: string
    /**
     * Request body
     * @type CreateChildOrganizationRequest
     * @memberof OrganizationsApicreateChildOrganization
     */
    createChildOrganizationRequest: CreateChildOrganizationRequest
}

export interface OrganizationsApiCreateOrganizationRequest {
    /**
     * Request body for creating an organization
     * @type RoutesCreateOrganizationRequest
     * @memberof OrganizationsApicreateOrganization
     */
    routesCreateOrganizationRequest: RoutesCreateOrganizationRequest
}

export interface OrganizationsApiDeleteChildOrganizationRequest {
    /**
     * Parent Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApideleteChildOrganization
     */
    organizationId: string
    /**
     * Child Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApideleteChildOrganization
     */
    childOrganizationId: string
}

export interface OrganizationsApiDeleteOrganizationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApideleteOrganization
     */
    organizationId: string
}

export interface OrganizationsApiGetStorageTypeSummaryByTypeRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApigetStorageTypeSummaryByType
     */
    organizationId: string
    /**
     * Storage type (e.g., s3, dev-null, bigquery)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApigetStorageTypeSummaryByType
     */
    storageType: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApigetStorageTypeSummaryByType
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApigetStorageTypeSummaryByType
     */
    end?: string
    /**
     * Filter by billing type (billable|non_billable)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApigetStorageTypeSummaryByType
     */
    billingType?: string
    /**
     * Filter to specific pipeline
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApigetStorageTypeSummaryByType
     */
    pipelineId?: string
}

export interface OrganizationsApiListChildOrganizationsRequest {
    /**
     * Parent Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApilistChildOrganizations
     */
    organizationId: string
    /**
     * Limit the number of organizations returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationsApilistChildOrganizations
     */
    limit?: number
    /**
     * Offset the organizations returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationsApilistChildOrganizations
     */
    offset?: number
    /**
     * If provided, only return organizations with names that contain the search string
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApilistChildOrganizations
     */
    nameSearch?: string
}

export interface OrganizationsApiListUserOrganizationsRequest {
    /**
     * Limit the number of organizations returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationsApilistUserOrganizations
     */
    limit?: number
    /**
     * Offset the organizations returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof OrganizationsApilistUserOrganizations
     */
    offset?: number
    /**
     * If true, only return organizations that are directly associated with the user, not child organizations (default: false)
     * Defaults to: undefined
     * @type boolean
     * @memberof OrganizationsApilistUserOrganizations
     */
    noChildren?: boolean
    /**
     * If provided, only return organizations that are children of the specified parent organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApilistUserOrganizations
     */
    parentOrganizationId?: string
    /**
     * If provided, only return organizations with names that contain the search string
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApilistUserOrganizations
     */
    nameSearch?: string
}

export interface OrganizationsApiUpdateChildOrganizationRequest {
    /**
     * Parent Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApiupdateChildOrganization
     */
    organizationId: string
    /**
     * Child Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApiupdateChildOrganization
     */
    childOrganizationId: string
    /**
     * Request body
     * @type UpdateChildOrganizationRequest
     * @memberof OrganizationsApiupdateChildOrganization
     */
    updateChildOrganizationRequest: UpdateChildOrganizationRequest
}

export interface OrganizationsApiUpdateOrganizationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsApiupdateOrganization
     */
    organizationId: string
    /**
     * Request body for updating an organization
     * @type RoutesUpdateOrganizationRequest
     * @memberof OrganizationsApiupdateOrganization
     */
    routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new child organization under the given parent organization. Known as a \"team\" in the UI.
     * Create child organization (team)
     * @param param the request object
     */
    public createChildOrganizationWithHttpInfo(param: OrganizationsApiCreateChildOrganizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        return this.api.createChildOrganizationWithHttpInfo(param.organizationId, param.createChildOrganizationRequest,  options).toPromise();
    }

    /**
     * Create a new child organization under the given parent organization. Known as a \"team\" in the UI.
     * Create child organization (team)
     * @param param the request object
     */
    public createChildOrganization(param: OrganizationsApiCreateChildOrganizationRequest, options?: ConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.api.createChildOrganization(param.organizationId, param.createChildOrganizationRequest,  options).toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param param the request object
     */
    public createOrganizationWithHttpInfo(param: OrganizationsApiCreateOrganizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        return this.api.createOrganizationWithHttpInfo(param.routesCreateOrganizationRequest,  options).toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param param the request object
     */
    public createOrganization(param: OrganizationsApiCreateOrganizationRequest, options?: ConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.api.createOrganization(param.routesCreateOrganizationRequest,  options).toPromise();
    }

    /**
     * Delete a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Delete child organization (team)
     * @param param the request object
     */
    public deleteChildOrganizationWithHttpInfo(param: OrganizationsApiDeleteChildOrganizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteChildOrganizationWithHttpInfo(param.organizationId, param.childOrganizationId,  options).toPromise();
    }

    /**
     * Delete a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Delete child organization (team)
     * @param param the request object
     */
    public deleteChildOrganization(param: OrganizationsApiDeleteChildOrganizationRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteChildOrganization(param.organizationId, param.childOrganizationId,  options).toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param param the request object
     */
    public deleteOrganizationWithHttpInfo(param: OrganizationsApiDeleteOrganizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteOrganizationWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * Delete organization
     * Delete organization
     * @param param the request object
     */
    public deleteOrganization(param: OrganizationsApiDeleteOrganizationRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.deleteOrganization(param.organizationId,  options).toPromise();
    }

    /**
     * Get aggregated cost and usage summary for a specific storage type
     * Get storage type cost summary by type
     * @param param the request object
     */
    public getStorageTypeSummaryByTypeWithHttpInfo(param: OrganizationsApiGetStorageTypeSummaryByTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        return this.api.getStorageTypeSummaryByTypeWithHttpInfo(param.organizationId, param.storageType, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get aggregated cost and usage summary for a specific storage type
     * Get storage type cost summary by type
     * @param param the request object
     */
    public getStorageTypeSummaryByType(param: OrganizationsApiGetStorageTypeSummaryByTypeRequest, options?: ConfigurationOptions): Promise<ModelsStorageTypeSummaryResponse> {
        return this.api.getStorageTypeSummaryByType(param.organizationId, param.storageType, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.
     * List child organizations (teams)
     * @param param the request object
     */
    public listChildOrganizationsWithHttpInfo(param: OrganizationsApiListChildOrganizationsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsUserOrganizationList>> {
        return this.api.listChildOrganizationsWithHttpInfo(param.organizationId, param.limit, param.offset, param.nameSearch,  options).toPromise();
    }

    /**
     * List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.
     * List child organizations (teams)
     * @param param the request object
     */
    public listChildOrganizations(param: OrganizationsApiListChildOrganizationsRequest, options?: ConfigurationOptions): Promise<ModelsUserOrganizationList> {
        return this.api.listChildOrganizations(param.organizationId, param.limit, param.offset, param.nameSearch,  options).toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param param the request object
     */
    public listUserOrganizationsWithHttpInfo(param: OrganizationsApiListUserOrganizationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsOrganizationList>> {
        return this.api.listUserOrganizationsWithHttpInfo(param.limit, param.offset, param.noChildren, param.parentOrganizationId, param.nameSearch,  options).toPromise();
    }

    /**
     * List organizations for user
     * List organizations for user
     * @param param the request object
     */
    public listUserOrganizations(param: OrganizationsApiListUserOrganizationsRequest = {}, options?: ConfigurationOptions): Promise<ModelsOrganizationList> {
        return this.api.listUserOrganizations(param.limit, param.offset, param.noChildren, param.parentOrganizationId, param.nameSearch,  options).toPromise();
    }

    /**
     * Update a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Update child organization (team)
     * @param param the request object
     */
    public updateChildOrganizationWithHttpInfo(param: OrganizationsApiUpdateChildOrganizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        return this.api.updateChildOrganizationWithHttpInfo(param.organizationId, param.childOrganizationId, param.updateChildOrganizationRequest,  options).toPromise();
    }

    /**
     * Update a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Update child organization (team)
     * @param param the request object
     */
    public updateChildOrganization(param: OrganizationsApiUpdateChildOrganizationRequest, options?: ConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.api.updateChildOrganization(param.organizationId, param.childOrganizationId, param.updateChildOrganizationRequest,  options).toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param param the request object
     */
    public updateOrganizationWithHttpInfo(param: OrganizationsApiUpdateOrganizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        return this.api.updateOrganizationWithHttpInfo(param.organizationId, param.routesUpdateOrganizationRequest,  options).toPromise();
    }

    /**
     * Update organization
     * Update organization
     * @param param the request object
     */
    public updateOrganization(param: OrganizationsApiUpdateOrganizationRequest, options?: ConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.api.updateOrganization(param.organizationId, param.routesUpdateOrganizationRequest,  options).toPromise();
    }

}

import { ObservableOrganizationsMetricsApi } from "./ObservableAPI";
import { OrganizationsMetricsApiRequestFactory, OrganizationsMetricsApiResponseProcessor} from "../apis/OrganizationsMetricsApi";

export interface OrganizationsMetricsApiGetOrganizationMetricsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsMetricsApigetOrganizationMetrics
     */
    organizationId: string
    /**
     * Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsMetricsApigetOrganizationMetrics
     */
    metric: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsMetricsApigetOrganizationMetrics
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsMetricsApigetOrganizationMetrics
     */
    end?: string
    /**
     * Resolution of the data, default determined by time window
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsMetricsApigetOrganizationMetrics
     */
    resolution?: string
}

export class ObjectOrganizationsMetricsApi {
    private api: ObservableOrganizationsMetricsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsMetricsApiRequestFactory, responseProcessor?: OrganizationsMetricsApiResponseProcessor) {
        this.api = new ObservableOrganizationsMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get time series metrics for an organization
     * Get organization metrics
     * @param param the request object
     */
    public getOrganizationMetricsWithHttpInfo(param: OrganizationsMetricsApiGetOrganizationMetricsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        return this.api.getOrganizationMetricsWithHttpInfo(param.organizationId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get time series metrics for an organization
     * Get organization metrics
     * @param param the request object
     */
    public getOrganizationMetrics(param: OrganizationsMetricsApiGetOrganizationMetricsRequest, options?: ConfigurationOptions): Promise<ModelsPipelineMetrics> {
        return this.api.getOrganizationMetrics(param.organizationId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

}

import { ObservableOrganizationsStorageCostApi } from "./ObservableAPI";
import { OrganizationsStorageCostApiRequestFactory, OrganizationsStorageCostApiResponseProcessor} from "../apis/OrganizationsStorageCostApi";

export interface OrganizationsStorageCostApiGetStorageTypeCostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeCost
     */
    organizationId: string
}

export interface OrganizationsStorageCostApiGetStorageTypeDetailsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeDetails
     */
    organizationId: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeDetails
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeDetails
     */
    end?: string
    /**
     * Filter by billing type (billable|non_billable)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeDetails
     */
    billingType?: string
    /**
     * Filter to specific pipeline
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeDetails
     */
    pipelineId?: string
}

export interface OrganizationsStorageCostApiGetStorageTypeMetricsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    organizationId: string
    /**
     * Metric to retrieve (egress_bytes|egress_records|errors)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    metric: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    end?: string
    /**
     * Resolution of the data, default determined by time window
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    resolution?: string
    /**
     * Filter by billing type (billable|non_billable)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    billingType?: string
    /**
     * Filter to specific pipeline
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeMetrics
     */
    pipelineId?: string
}

export interface OrganizationsStorageCostApiGetStorageTypeSummaryRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeSummary
     */
    organizationId: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeSummary
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeSummary
     */
    end?: string
    /**
     * Filter by billing type (billable|non_billable)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeSummary
     */
    billingType?: string
    /**
     * Filter to specific pipeline
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApigetStorageTypeSummary
     */
    pipelineId?: string
}

export interface OrganizationsStorageCostApiSetStorageTypeCostRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApisetStorageTypeCost
     */
    organizationId: string
    /**
     * Cost configuration
     * @type SetStorageTypeCostRequest
     * @memberof OrganizationsStorageCostApisetStorageTypeCost
     */
    setStorageTypeCostRequest: SetStorageTypeCostRequest
}

export interface OrganizationsStorageCostApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApiv2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet
     */
    organizationId: string
    /**
     * Storage type (e.g., s3, dev-null, bigquery)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApiv2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet
     */
    storageType: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApiv2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApiv2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet
     */
    end?: string
    /**
     * Filter by billing type (billable|non_billable)
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApiv2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet
     */
    billingType?: string
    /**
     * Filter to specific pipeline
     * Defaults to: undefined
     * @type string
     * @memberof OrganizationsStorageCostApiv2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet
     */
    pipelineId?: string
}

export class ObjectOrganizationsStorageCostApi {
    private api: ObservableOrganizationsStorageCostApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsStorageCostApiRequestFactory, responseProcessor?: OrganizationsStorageCostApiResponseProcessor) {
        this.api = new ObservableOrganizationsStorageCostApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param param the request object
     */
    public getStorageTypeCostWithHttpInfo(param: OrganizationsStorageCostApiGetStorageTypeCostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        return this.api.getStorageTypeCostWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param param the request object
     */
    public getStorageTypeCost(param: OrganizationsStorageCostApiGetStorageTypeCostRequest, options?: ConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        return this.api.getStorageTypeCost(param.organizationId,  options).toPromise();
    }

    /**
     * Get detailed metrics for each individual output, including egress and associated input
     * Get storage type output details
     * @param param the request object
     */
    public getStorageTypeDetailsWithHttpInfo(param: OrganizationsStorageCostApiGetStorageTypeDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        return this.api.getStorageTypeDetailsWithHttpInfo(param.organizationId, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get detailed metrics for each individual output, including egress and associated input
     * Get storage type output details
     * @param param the request object
     */
    public getStorageTypeDetails(param: OrganizationsStorageCostApiGetStorageTypeDetailsRequest, options?: ConfigurationOptions): Promise<RoutesV2StorageTypeDetailsResponse> {
        return this.api.getStorageTypeDetails(param.organizationId, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get time series metrics grouped by storage type for an organization
     * Get storage type metrics
     * @param param the request object
     */
    public getStorageTypeMetricsWithHttpInfo(param: OrganizationsStorageCostApiGetStorageTypeMetricsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeTimeSeriesResponse>> {
        return this.api.getStorageTypeMetricsWithHttpInfo(param.organizationId, param.metric, param.start, param.end, param.resolution, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get time series metrics grouped by storage type for an organization
     * Get storage type metrics
     * @param param the request object
     */
    public getStorageTypeMetrics(param: OrganizationsStorageCostApiGetStorageTypeMetricsRequest, options?: ConfigurationOptions): Promise<ModelsStorageTypeTimeSeriesResponse> {
        return this.api.getStorageTypeMetrics(param.organizationId, param.metric, param.start, param.end, param.resolution, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get aggregated cost and usage summary by storage type
     * Get storage type cost summary
     * @param param the request object
     */
    public getStorageTypeSummaryWithHttpInfo(param: OrganizationsStorageCostApiGetStorageTypeSummaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        return this.api.getStorageTypeSummaryWithHttpInfo(param.organizationId, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get aggregated cost and usage summary by storage type
     * Get storage type cost summary
     * @param param the request object
     */
    public getStorageTypeSummary(param: OrganizationsStorageCostApiGetStorageTypeSummaryRequest, options?: ConfigurationOptions): Promise<ModelsStorageTypeSummaryResponse> {
        return this.api.getStorageTypeSummary(param.organizationId, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param param the request object
     */
    public setStorageTypeCostWithHttpInfo(param: OrganizationsStorageCostApiSetStorageTypeCostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        return this.api.setStorageTypeCostWithHttpInfo(param.organizationId, param.setStorageTypeCostRequest,  options).toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param param the request object
     */
    public setStorageTypeCost(param: OrganizationsStorageCostApiSetStorageTypeCostRequest, options?: ConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        return this.api.setStorageTypeCost(param.organizationId, param.setStorageTypeCostRequest,  options).toPromise();
    }

    /**
     * Get detailed metrics for each individual output of a specific storage type
     * Get storage type output details by type
     * @param param the request object
     */
    public v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(param: OrganizationsStorageCostApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        return this.api.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(param.organizationId, param.storageType, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

    /**
     * Get detailed metrics for each individual output of a specific storage type
     * Get storage type output details by type
     * @param param the request object
     */
    public v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(param: OrganizationsStorageCostApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest, options?: ConfigurationOptions): Promise<RoutesV2StorageTypeDetailsResponse> {
        return this.api.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(param.organizationId, param.storageType, param.start, param.end, param.billingType, param.pipelineId,  options).toPromise();
    }

}

import { ObservableOutputsApi } from "./ObservableAPI";
import { OutputsApiRequestFactory, OutputsApiResponseProcessor} from "../apis/OutputsApi";

export interface OutputsApiGetOutputTypeMetaRequest {
    /**
     * Output type ID
     * Defaults to: undefined
     * @type string
     * @memberof OutputsApigetOutputTypeMeta
     */
    outputTypeId: string
}

export interface OutputsApiListOutputTypesRequest {
}

export class ObjectOutputsApi {
    private api: ObservableOutputsApi

    public constructor(configuration: Configuration, requestFactory?: OutputsApiRequestFactory, responseProcessor?: OutputsApiResponseProcessor) {
        this.api = new ObservableOutputsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param param the request object
     */
    public getOutputTypeMetaWithHttpInfo(param: OutputsApiGetOutputTypeMetaRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsConnectorMeta>> {
        return this.api.getOutputTypeMetaWithHttpInfo(param.outputTypeId,  options).toPromise();
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param param the request object
     */
    public getOutputTypeMeta(param: OutputsApiGetOutputTypeMetaRequest, options?: ConfigurationOptions): Promise<ModelsConnectorMeta> {
        return this.api.getOutputTypeMeta(param.outputTypeId,  options).toPromise();
    }

    /**
     * List outputs
     * List outputs
     * @param param the request object
     */
    public listOutputTypesWithHttpInfo(param: OutputsApiListOutputTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<OutputsConnectorMeta>>> {
        return this.api.listOutputTypesWithHttpInfo( options).toPromise();
    }

    /**
     * List outputs
     * List outputs
     * @param param the request object
     */
    public listOutputTypes(param: OutputsApiListOutputTypesRequest = {}, options?: ConfigurationOptions): Promise<Array<OutputsConnectorMeta>> {
        return this.api.listOutputTypes( options).toPromise();
    }

}

import { ObservablePermissionsApi } from "./ObservableAPI";
import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";

export interface PermissionsApiListPermissionsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PermissionsApilistPermissions
     */
    organizationId: string
    /**
     * Limit the number of permissions returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof PermissionsApilistPermissions
     */
    limit?: number
    /**
     * Offset the permissions returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof PermissionsApilistPermissions
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
    public listPermissionsWithHttpInfo(param: PermissionsApiListPermissionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPermissionList>> {
        return this.api.listPermissionsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param param the request object
     */
    public listPermissions(param: PermissionsApiListPermissionsRequest, options?: ConfigurationOptions): Promise<ModelsPermissionList> {
        return this.api.listPermissions(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservablePipelinesApi } from "./ObservableAPI";
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";

export interface PipelinesApiCreatePipelineRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApicreatePipeline
     */
    organizationId: string
    /**
     * Request body for creating a pipeline
     * @type CreatePipelineRequest
     * @memberof PipelinesApicreatePipeline
     */
    createPipelineRequest: CreatePipelineRequest
}

export interface PipelinesApiDeletePipelineRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApideletePipeline
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApideletePipeline
     */
    pipelineId: string
}

export interface PipelinesApiDeletePipelineV1Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApideletePipelineV1
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApideletePipelineV1
     */
    pipelineId: string
}

export interface PipelinesApiForceGraduateSchemaStateRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiforceGraduateSchemaState
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiforceGraduateSchemaState
     */
    pipelineId: string
    /**
     * Edge ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiforceGraduateSchemaState
     */
    edgeId: string
}

export interface PipelinesApiGetMetricsForPipelinesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetMetricsForPipelines
     */
    organizationId: string
    /**
     * Comma-separated list of pipeline IDs
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetMetricsForPipelines
     */
    pipelineIds: string
    /**
     * Resolution for metrics (default: 5m)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetMetricsForPipelines
     */
    resolution?: string
}

export interface PipelinesApiGetOrganizationSummaryRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOrganizationSummary
     */
    organizationId: string
    /**
     * ISO3339 start time, default 24 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOrganizationSummary
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOrganizationSummary
     */
    end?: string
}

export interface PipelinesApiGetPipelineRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipeline
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipeline
     */
    pipelineId: string
}

export interface PipelinesApiGetPipelineConfigRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineConfig
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineConfig
     */
    pipelineId: string
    /**
     * Include the status of the pipeline nodes
     * Defaults to: undefined
     * @type boolean
     * @memberof PipelinesApigetPipelineConfig
     */
    includeStatus?: boolean
}

export interface PipelinesApiGetPipelineEdgeConditionOperatorTypesRequest {
}

export interface PipelinesApiGetPipelineEdgeConditionRulesRequest {
}

export interface PipelinesApiGetPipelineMetricsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineMetrics
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineMetrics
     */
    pipelineId: string
    /**
     * Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineMetrics
     */
    metric: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineMetrics
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineMetrics
     */
    end?: string
    /**
     * Resolution of the data, default determined by time window
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineMetrics
     */
    resolution?: string
}

export interface PipelinesApiGetPipelineNodeMetricsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    nodeId: string
    /**
     * Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    metric: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    end?: string
    /**
     * Resolution of the data, default determined by time window
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetrics
     */
    resolution?: string
}

export interface PipelinesApiGetPipelineNodeMetricsV2Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    nodeId: string
    /**
     * Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    metric: string
    /**
     * ISO3339 start time, default 6 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    end?: string
    /**
     * Resolution of the data, default determined by time window
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeMetricsV2
     */
    resolution?: string
}

export interface PipelinesApiGetPipelineNodeStatusRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeStatus
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeStatus
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeStatus
     */
    nodeId: string
    /**
     * Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PipelinesApigetPipelineNodeStatus
     */
    metrics?: Array<string>
    /**
     * ISO3339 start time, default 24 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeStatus
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineNodeStatus
     */
    end?: string
}

export interface PipelinesApiGetPipelineStatusRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineStatus
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineStatus
     */
    pipelineId: string
    /**
     * Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PipelinesApigetPipelineStatus
     */
    metrics?: Array<string>
    /**
     * ISO3339 start time, default 24 hours ago
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineStatus
     */
    start?: string
    /**
     * ISO3339 end time, default now
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelineStatus
     */
    end?: string
}

export interface PipelinesApiGetPipelinesStatusesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelinesStatuses
     */
    organizationId: string
    /**
     * Maximum number of pipelines to return (default is 10)
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApigetPipelinesStatuses
     */
    limit?: number
    /**
     * Offset for pagination (default is 0)
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApigetPipelinesStatuses
     */
    offset?: number
    /**
     * Start time (RFC3339 format) for status metrics (default: 24 hours ago)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelinesStatuses
     */
    start?: string
    /**
     * End time (RFC3339 format) for status metrics (default: now)
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetPipelinesStatuses
     */
    end?: string
}

export interface PipelinesApiGetSchemaStateRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetSchemaState
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetSchemaState
     */
    pipelineId: string
    /**
     * Edge ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetSchemaState
     */
    edgeId: string
}

export interface PipelinesApiListPipelinesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistPipelines
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApilistPipelines
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApilistPipelines
     */
    offset?: number
    /**
     * Include the status of the pipeline nodes
     * Defaults to: undefined
     * @type boolean
     * @memberof PipelinesApilistPipelines
     */
    includeStatus?: boolean
}

export interface PipelinesApiListPipelinesV1Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistPipelinesV1
     */
    organizationId: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApilistPipelinesV1
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof PipelinesApilistPipelinesV1
     */
    offset?: number
}

export interface PipelinesApiListSchemaHistoryRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistSchemaHistory
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistSchemaHistory
     */
    pipelineId: string
    /**
     * Edge ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistSchemaHistory
     */
    edgeId: string
}

export interface PipelinesApiPurgePipelineRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApipurgePipeline
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApipurgePipeline
     */
    pipelineId: string
}

export interface PipelinesApiPurgePipelineNodeRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApipurgePipelineNode
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApipurgePipelineNode
     */
    pipelineId: string
    /**
     * Node ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApipurgePipelineNode
     */
    nodeId: string
}

export interface PipelinesApiResetSchemaStateRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiresetSchemaState
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiresetSchemaState
     */
    pipelineId: string
    /**
     * Edge ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiresetSchemaState
     */
    edgeId: string
}

export interface PipelinesApiTriggerPipelineRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApitriggerPipeline
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApitriggerPipeline
     */
    pipelineId: string
}

export interface PipelinesApiUpdatePipelineRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipeline
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipeline
     */
    pipelineId: string
    /**
     * Request body for updating a pipeline
     * @type UpdatePipelineRequest
     * @memberof PipelinesApiupdatePipeline
     */
    updatePipelineRequest: UpdatePipelineRequest
}

export interface PipelinesApiUpdatePipelineEdgeRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipelineEdge
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipelineEdge
     */
    pipelineId: string
    /**
     * Edge ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipelineEdge
     */
    edgeId: string
    /**
     * Request body
     * @type UpdatePipelineEdgeRequest
     * @memberof PipelinesApiupdatePipelineEdge
     */
    updatePipelineEdgeRequest: UpdatePipelineEdgeRequest
}

export interface PipelinesApiUpdatePipelineV1Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipelineV1
     */
    organizationId: string
    /**
     * Pipeline ID
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdatePipelineV1
     */
    pipelineId: string
    /**
     * Request body for updating a pipeline
     * @type UpdatePipelineV1Request
     * @memberof PipelinesApiupdatePipelineV1
     */
    updatePipelineV1Request: UpdatePipelineV1Request
}

export class ObjectPipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param param the request object
     */
    public createPipelineWithHttpInfo(param: PipelinesApiCreatePipelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        return this.api.createPipelineWithHttpInfo(param.organizationId, param.createPipelineRequest,  options).toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param param the request object
     */
    public createPipeline(param: PipelinesApiCreatePipelineRequest, options?: ConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        return this.api.createPipeline(param.organizationId, param.createPipelineRequest,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public deletePipelineWithHttpInfo(param: PipelinesApiDeletePipelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.deletePipelineWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public deletePipeline(param: PipelinesApiDeletePipelineRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.deletePipeline(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public deletePipelineV1WithHttpInfo(param: PipelinesApiDeletePipelineV1Request, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.deletePipelineV1WithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param param the request object
     */
    public deletePipelineV1(param: PipelinesApiDeletePipelineV1Request, options?: ConfigurationOptions): Promise<string> {
        return this.api.deletePipelineV1(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Force an edge in learning mode to immediately graduate to detection mode
     * Force graduate schema state
     * @param param the request object
     */
    public forceGraduateSchemaStateWithHttpInfo(param: PipelinesApiForceGraduateSchemaStateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.forceGraduateSchemaStateWithHttpInfo(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * Force an edge in learning mode to immediately graduate to detection mode
     * Force graduate schema state
     * @param param the request object
     */
    public forceGraduateSchemaState(param: PipelinesApiForceGraduateSchemaStateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.forceGraduateSchemaState(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param param the request object
     */
    public getMetricsForPipelinesWithHttpInfo(param: PipelinesApiGetMetricsForPipelinesRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2MetricsResponse>> {
        return this.api.getMetricsForPipelinesWithHttpInfo(param.organizationId, param.pipelineIds, param.resolution,  options).toPromise();
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param param the request object
     */
    public getMetricsForPipelines(param: PipelinesApiGetMetricsForPipelinesRequest, options?: ConfigurationOptions): Promise<RoutesV2MetricsResponse> {
        return this.api.getMetricsForPipelines(param.organizationId, param.pipelineIds, param.resolution,  options).toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param param the request object
     */
    public getOrganizationSummaryWithHttpInfo(param: PipelinesApiGetOrganizationSummaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        return this.api.getOrganizationSummaryWithHttpInfo(param.organizationId, param.start, param.end,  options).toPromise();
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param param the request object
     */
    public getOrganizationSummary(param: PipelinesApiGetOrganizationSummaryRequest, options?: ConfigurationOptions): Promise<RoutesV2GetOrganizationSummaryResponse> {
        return this.api.getOrganizationSummary(param.organizationId, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param param the request object
     */
    public getPipelineWithHttpInfo(param: PipelinesApiGetPipelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        return this.api.getPipelineWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param param the request object
     */
    public getPipeline(param: PipelinesApiGetPipelineRequest, options?: ConfigurationOptions): Promise<ModelsPipeline> {
        return this.api.getPipeline(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param param the request object
     */
    public getPipelineConfigWithHttpInfo(param: PipelinesApiGetPipelineConfigRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        return this.api.getPipelineConfigWithHttpInfo(param.organizationId, param.pipelineId, param.includeStatus,  options).toPromise();
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param param the request object
     */
    public getPipelineConfig(param: PipelinesApiGetPipelineConfigRequest, options?: ConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        return this.api.getPipelineConfig(param.organizationId, param.pipelineId, param.includeStatus,  options).toPromise();
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     * @param param the request object
     */
    public getPipelineEdgeConditionOperatorTypesWithHttpInfo(param: PipelinesApiGetPipelineEdgeConditionOperatorTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getPipelineEdgeConditionOperatorTypesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     * @param param the request object
     */
    public getPipelineEdgeConditionOperatorTypes(param: PipelinesApiGetPipelineEdgeConditionOperatorTypesRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.getPipelineEdgeConditionOperatorTypes( options).toPromise();
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     * @param param the request object
     */
    public getPipelineEdgeConditionRulesWithHttpInfo(param: PipelinesApiGetPipelineEdgeConditionRulesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getPipelineEdgeConditionRulesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     * @param param the request object
     */
    public getPipelineEdgeConditionRules(param: PipelinesApiGetPipelineEdgeConditionRulesRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.getPipelineEdgeConditionRules( options).toPromise();
    }

    /**
     * Get time series metrics for a pipeline
     * Get pipeline metrics
     * @param param the request object
     */
    public getPipelineMetricsWithHttpInfo(param: PipelinesApiGetPipelineMetricsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        return this.api.getPipelineMetricsWithHttpInfo(param.organizationId, param.pipelineId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get time series metrics for a pipeline
     * Get pipeline metrics
     * @param param the request object
     */
    public getPipelineMetrics(param: PipelinesApiGetPipelineMetricsRequest, options?: ConfigurationOptions): Promise<ModelsPipelineMetrics> {
        return this.api.getPipelineMetrics(param.organizationId, param.pipelineId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param param the request object
     */
    public getPipelineNodeMetricsWithHttpInfo(param: PipelinesApiGetPipelineNodeMetricsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        return this.api.getPipelineNodeMetricsWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param param the request object
     */
    public getPipelineNodeMetrics(param: PipelinesApiGetPipelineNodeMetricsRequest, options?: ConfigurationOptions): Promise<ModelsPipelineMetrics> {
        return this.api.getPipelineNodeMetrics(param.organizationId, param.pipelineId, param.nodeId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param param the request object
     */
    public getPipelineNodeMetricsV2WithHttpInfo(param: PipelinesApiGetPipelineNodeMetricsV2Request, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        return this.api.getPipelineNodeMetricsV2WithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get pipeline node metrics
     * Get pipeline node metrics
     * @param param the request object
     */
    public getPipelineNodeMetricsV2(param: PipelinesApiGetPipelineNodeMetricsV2Request, options?: ConfigurationOptions): Promise<ModelsPipelineMetrics> {
        return this.api.getPipelineNodeMetricsV2(param.organizationId, param.pipelineId, param.nodeId, param.metric, param.start, param.end, param.resolution,  options).toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param param the request object
     */
    public getPipelineNodeStatusWithHttpInfo(param: PipelinesApiGetPipelineNodeStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineNodeStatus>> {
        return this.api.getPipelineNodeStatusWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline node status
     * Get pipeline node status
     * @param param the request object
     */
    public getPipelineNodeStatus(param: PipelinesApiGetPipelineNodeStatusRequest, options?: ConfigurationOptions): Promise<ModelsPipelineNodeStatus> {
        return this.api.getPipelineNodeStatus(param.organizationId, param.pipelineId, param.nodeId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param param the request object
     */
    public getPipelineStatusWithHttpInfo(param: PipelinesApiGetPipelineStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineStatus>> {
        return this.api.getPipelineStatusWithHttpInfo(param.organizationId, param.pipelineId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Get pipeline status
     * Get pipeline status
     * @param param the request object
     */
    public getPipelineStatus(param: PipelinesApiGetPipelineStatusRequest, options?: ConfigurationOptions): Promise<ModelsPipelineStatus> {
        return this.api.getPipelineStatus(param.organizationId, param.pipelineId, param.metrics, param.start, param.end,  options).toPromise();
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param param the request object
     */
    public getPipelinesStatusesWithHttpInfo(param: PipelinesApiGetPipelinesStatusesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        return this.api.getPipelinesStatusesWithHttpInfo(param.organizationId, param.limit, param.offset, param.start, param.end,  options).toPromise();
    }

    /**
     * Retrieve the status of pipelines within an organization for a specified time period.
     * Get pipeline status
     * @param param the request object
     */
    public getPipelinesStatuses(param: PipelinesApiGetPipelinesStatusesRequest, options?: ConfigurationOptions): Promise<Array<RoutesV2PipelineWithStatus>> {
        return this.api.getPipelinesStatuses(param.organizationId, param.limit, param.offset, param.start, param.end,  options).toPromise();
    }

    /**
     * Get the current schema state for a pipeline edge
     * Get schema state
     * @param param the request object
     */
    public getSchemaStateWithHttpInfo(param: PipelinesApiGetSchemaStateRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3SchemaStateResponse>> {
        return this.api.getSchemaStateWithHttpInfo(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * Get the current schema state for a pipeline edge
     * Get schema state
     * @param param the request object
     */
    public getSchemaState(param: PipelinesApiGetSchemaStateRequest, options?: ConfigurationOptions): Promise<RoutesV3SchemaStateResponse> {
        return this.api.getSchemaState(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public listPipelinesWithHttpInfo(param: PipelinesApiListPipelinesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        return this.api.listPipelinesWithHttpInfo(param.organizationId, param.limit, param.offset, param.includeStatus,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public listPipelines(param: PipelinesApiListPipelinesRequest, options?: ConfigurationOptions): Promise<ModelsPipelineList> {
        return this.api.listPipelines(param.organizationId, param.limit, param.offset, param.includeStatus,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public listPipelinesV1WithHttpInfo(param: PipelinesApiListPipelinesV1Request, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineList>> {
        return this.api.listPipelinesV1WithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List pipelines
     * List pipelines
     * @param param the request object
     */
    public listPipelinesV1(param: PipelinesApiListPipelinesV1Request, options?: ConfigurationOptions): Promise<ModelsPipelineList> {
        return this.api.listPipelinesV1(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List schema drift events for a pipeline edge
     * List schema history
     * @param param the request object
     */
    public listSchemaHistoryWithHttpInfo(param: PipelinesApiListSchemaHistoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoutesV3SchemaHistoryEntryResponse>>> {
        return this.api.listSchemaHistoryWithHttpInfo(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * List schema drift events for a pipeline edge
     * List schema history
     * @param param the request object
     */
    public listSchemaHistory(param: PipelinesApiListSchemaHistoryRequest, options?: ConfigurationOptions): Promise<Array<RoutesV3SchemaHistoryEntryResponse>> {
        return this.api.listSchemaHistory(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * Purge all messages from a pipeline\'s NATS stream
     * Purge pipeline data
     * @param param the request object
     */
    public purgePipelineWithHttpInfo(param: PipelinesApiPurgePipelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelinePurgeResponse>> {
        return this.api.purgePipelineWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Purge all messages from a pipeline\'s NATS stream
     * Purge pipeline data
     * @param param the request object
     */
    public purgePipeline(param: PipelinesApiPurgePipelineRequest, options?: ConfigurationOptions): Promise<ModelsPipelinePurgeResponse> {
        return this.api.purgePipeline(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Purge messages destined for a specific pipeline node
     * Purge pipeline node data
     * @param param the request object
     */
    public purgePipelineNodeWithHttpInfo(param: PipelinesApiPurgePipelineNodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelinePurgeResponse>> {
        return this.api.purgePipelineNodeWithHttpInfo(param.organizationId, param.pipelineId, param.nodeId,  options).toPromise();
    }

    /**
     * Purge messages destined for a specific pipeline node
     * Purge pipeline node data
     * @param param the request object
     */
    public purgePipelineNode(param: PipelinesApiPurgePipelineNodeRequest, options?: ConfigurationOptions): Promise<ModelsPipelinePurgeResponse> {
        return this.api.purgePipelineNode(param.organizationId, param.pipelineId, param.nodeId,  options).toPromise();
    }

    /**
     * Delete the current schema state for an edge and signal the sidecar to restart in learning mode
     * Reset schema state
     * @param param the request object
     */
    public resetSchemaStateWithHttpInfo(param: PipelinesApiResetSchemaStateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.resetSchemaStateWithHttpInfo(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * Delete the current schema state for an edge and signal the sidecar to restart in learning mode
     * Reset schema state
     * @param param the request object
     */
    public resetSchemaState(param: PipelinesApiResetSchemaStateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.resetSchemaState(param.organizationId, param.pipelineId, param.edgeId,  options).toPromise();
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param param the request object
     */
    public triggerPipelineWithHttpInfo(param: PipelinesApiTriggerPipelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.triggerPipelineWithHttpInfo(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param param the request object
     */
    public triggerPipeline(param: PipelinesApiTriggerPipelineRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.triggerPipeline(param.organizationId, param.pipelineId,  options).toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param param the request object
     */
    public updatePipelineWithHttpInfo(param: PipelinesApiUpdatePipelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        return this.api.updatePipelineWithHttpInfo(param.organizationId, param.pipelineId, param.updatePipelineRequest,  options).toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param param the request object
     */
    public updatePipeline(param: PipelinesApiUpdatePipelineRequest, options?: ConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        return this.api.updatePipeline(param.organizationId, param.pipelineId, param.updatePipelineRequest,  options).toPromise();
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param param the request object
     */
    public updatePipelineEdgeWithHttpInfo(param: PipelinesApiUpdatePipelineEdgeRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updatePipelineEdgeWithHttpInfo(param.organizationId, param.pipelineId, param.edgeId, param.updatePipelineEdgeRequest,  options).toPromise();
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param param the request object
     */
    public updatePipelineEdge(param: PipelinesApiUpdatePipelineEdgeRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updatePipelineEdge(param.organizationId, param.pipelineId, param.edgeId, param.updatePipelineEdgeRequest,  options).toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param param the request object
     */
    public updatePipelineV1WithHttpInfo(param: PipelinesApiUpdatePipelineV1Request, options?: ConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        return this.api.updatePipelineV1WithHttpInfo(param.organizationId, param.pipelineId, param.updatePipelineV1Request,  options).toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param param the request object
     */
    public updatePipelineV1(param: PipelinesApiUpdatePipelineV1Request, options?: ConfigurationOptions): Promise<ModelsPipeline> {
        return this.api.updatePipelineV1(param.organizationId, param.pipelineId, param.updatePipelineV1Request,  options).toPromise();
    }

}

import { ObservableQuotasApi } from "./ObservableAPI";
import { QuotasApiRequestFactory, QuotasApiResponseProcessor} from "../apis/QuotasApi";

export interface QuotasApiListQuotasRequest {
    /**
     * Billing Account ID
     * Defaults to: undefined
     * @type string
     * @memberof QuotasApilistQuotas
     */
    billingAccountId?: string
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof QuotasApilistQuotas
     */
    organizationId?: string
    /**
     * Limit
     * Defaults to: undefined
     * @type number
     * @memberof QuotasApilistQuotas
     */
    limit?: number
    /**
     * Offset
     * Defaults to: undefined
     * @type number
     * @memberof QuotasApilistQuotas
     */
    offset?: number
    /**
     * 
     * @type any
     * @memberof QuotasApilistQuotas
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
    public listQuotasWithHttpInfo(param: QuotasApiListQuotasRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsQuotaList>> {
        return this.api.listQuotasWithHttpInfo(param.billingAccountId, param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

    /**
     * List quotas for a given billing account or organization id.
     * List quotas
     * @param param the request object
     */
    public listQuotas(param: QuotasApiListQuotasRequest = {}, options?: ConfigurationOptions): Promise<ModelsQuotaList> {
        return this.api.listQuotas(param.billingAccountId, param.organizationId, param.limit, param.offset, param.body,  options).toPromise();
    }

}

import { ObservableResourceSharesApi } from "./ObservableAPI";
import { ResourceSharesApiRequestFactory, ResourceSharesApiResponseProcessor} from "../apis/ResourceSharesApi";

export interface ResourceSharesApiCreateResourceSharesRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApicreateResourceShares
     */
    organizationId: string
    /**
     * Resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApicreateResourceShares
     */
    resourceType: 'secret' | 'component'
    /**
     * Resource ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApicreateResourceShares
     */
    resourceId: string
    /**
     * Share request
     * @type CreateResourceSharesRequest
     * @memberof ResourceSharesApicreateResourceShares
     */
    createResourceSharesRequest: CreateResourceSharesRequest
}

export interface ResourceSharesApiListResourceShareTargetsRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    organizationId: string
    /**
     * Resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    resourceType: 'secret' | 'component'
    /**
     * Resource ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    resourceId: string
    /**
     * Case-insensitive substring filter on child org name, slug, or id
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    search?: string
    /**
     * Filter by share state: true &#x3D; only shared, false &#x3D; only not shared
     * Defaults to: undefined
     * @type boolean
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    shared?: boolean
    /**
     * Column to sort by; default puts shared rows first
     * Defaults to: undefined
     * @type &#39;name&#39; | &#39;shared&#39; | &#39;shared_at&#39; | &#39;in_use&#39;
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    sortBy?: 'name' | 'shared' | 'shared_at' | 'in_use'
    /**
     * Sort direction (used with sort_by)
     * Defaults to: &#39;asc&#39;
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    order?: 'asc' | 'desc'
    /**
     * Page size
     * Defaults to: 10
     * @type number
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    limit?: number
    /**
     * Rows to skip
     * Defaults to: 0
     * @type number
     * @memberof ResourceSharesApilistResourceShareTargets
     */
    offset?: number
}

export interface ResourceSharesApiListResourceSharesRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceShares
     */
    organizationId: string
    /**
     * Resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApilistResourceShares
     */
    resourceType: 'secret' | 'component'
    /**
     * Resource ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceShares
     */
    resourceId: string
}

export interface ResourceSharesApiListResourceUsageRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceUsage
     */
    organizationId: string
    /**
     * Resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApilistResourceUsage
     */
    resourceType: 'secret' | 'component'
    /**
     * Resource ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistResourceUsage
     */
    resourceId: string
    /**
     * Page size
     * Defaults to: 10
     * @type number
     * @memberof ResourceSharesApilistResourceUsage
     */
    limit?: number
    /**
     * Rows to skip
     * Defaults to: 0
     * @type number
     * @memberof ResourceSharesApilistResourceUsage
     */
    offset?: number
}

export interface ResourceSharesApiListSharedResourcesRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApilistSharedResources
     */
    organizationId: string
    /**
     * Page size (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof ResourceSharesApilistSharedResources
     */
    limit?: number
    /**
     * Offset (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof ResourceSharesApilistSharedResources
     */
    offset?: number
    /**
     * Filter by resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApilistSharedResources
     */
    resourceType?: 'secret' | 'component'
}

export interface ResourceSharesApiUnshareResourceRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApiunshareResource
     */
    organizationId: string
    /**
     * Resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApiunshareResource
     */
    resourceType: 'secret' | 'component'
    /**
     * Resource ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApiunshareResource
     */
    resourceId: string
}

export interface ResourceSharesApiUpdateResourceSharesRequest {
    /**
     * Owner organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApiupdateResourceShares
     */
    organizationId: string
    /**
     * Resource type
     * Defaults to: undefined
     * @type &#39;secret&#39; | &#39;component&#39;
     * @memberof ResourceSharesApiupdateResourceShares
     */
    resourceType: 'secret' | 'component'
    /**
     * Resource ID
     * Defaults to: undefined
     * @type string
     * @memberof ResourceSharesApiupdateResourceShares
     */
    resourceId: string
    /**
     * Share delta request
     * @type CreateResourceSharesRequest
     * @memberof ResourceSharesApiupdateResourceShares
     */
    createResourceSharesRequest: CreateResourceSharesRequest
}

export class ObjectResourceSharesApi {
    private api: ObservableResourceSharesApi

    public constructor(configuration: Configuration, requestFactory?: ResourceSharesApiRequestFactory, responseProcessor?: ResourceSharesApiResponseProcessor) {
        this.api = new ObservableResourceSharesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param param the request object
     */
    public createResourceSharesWithHttpInfo(param: ResourceSharesApiCreateResourceSharesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsResourceShareChangeSet>> {
        return this.api.createResourceSharesWithHttpInfo(param.organizationId, param.resourceType, param.resourceId, param.createResourceSharesRequest,  options).toPromise();
    }

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param param the request object
     */
    public createResourceShares(param: ResourceSharesApiCreateResourceSharesRequest, options?: ConfigurationOptions): Promise<ModelsResourceShareChangeSet> {
        return this.api.createResourceShares(param.organizationId, param.resourceType, param.resourceId, param.createResourceSharesRequest,  options).toPromise();
    }

    /**
     * List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI\'s per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.
     * List a resource\'s share targets (all direct child orgs)
     * @param param the request object
     */
    public listResourceShareTargetsWithHttpInfo(param: ResourceSharesApiListResourceShareTargetsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsResourceShareTargetList>> {
        return this.api.listResourceShareTargetsWithHttpInfo(param.organizationId, param.resourceType, param.resourceId, param.search, param.shared, param.sortBy, param.order, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI\'s per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.
     * List a resource\'s share targets (all direct child orgs)
     * @param param the request object
     */
    public listResourceShareTargets(param: ResourceSharesApiListResourceShareTargetsRequest, options?: ConfigurationOptions): Promise<ModelsResourceShareTargetList> {
        return this.api.listResourceShareTargets(param.organizationId, param.resourceType, param.resourceId, param.search, param.shared, param.sortBy, param.order, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param param the request object
     */
    public listResourceSharesWithHttpInfo(param: ResourceSharesApiListResourceSharesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsResourceShareWithUsageList>> {
        return this.api.listResourceSharesWithHttpInfo(param.organizationId, param.resourceType, param.resourceId,  options).toPromise();
    }

    /**
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param param the request object
     */
    public listResourceShares(param: ResourceSharesApiListResourceSharesRequest, options?: ConfigurationOptions): Promise<ModelsResourceShareWithUsageList> {
        return this.api.listResourceShares(param.organizationId, param.resourceType, param.resourceId,  options).toPromise();
    }

    /**
     * List, paginated, everywhere a shared secret or component owned by this org is consumed by OTHER (child) organizations — the remediation view. For a secret, consumers are the child-org components referencing it; for a component, the child-org pipelines binding it. Each row carries the child org and the consuming resource; rows are ordered so an org\'s usages are contiguous.
     * List a shared resource\'s consumers in other orgs
     * @param param the request object
     */
    public listResourceUsageWithHttpInfo(param: ResourceSharesApiListResourceUsageRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsResourceUsageList>> {
        return this.api.listResourceUsageWithHttpInfo(param.organizationId, param.resourceType, param.resourceId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List, paginated, everywhere a shared secret or component owned by this org is consumed by OTHER (child) organizations — the remediation view. For a secret, consumers are the child-org components referencing it; for a component, the child-org pipelines binding it. Each row carries the child org and the consuming resource; rows are ordered so an org\'s usages are contiguous.
     * List a shared resource\'s consumers in other orgs
     * @param param the request object
     */
    public listResourceUsage(param: ResourceSharesApiListResourceUsageRequest, options?: ConfigurationOptions): Promise<ModelsResourceUsageList> {
        return this.api.listResourceUsage(param.organizationId, param.resourceType, param.resourceId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param param the request object
     */
    public listSharedResourcesWithHttpInfo(param: ResourceSharesApiListSharedResourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsSharedResourceList>> {
        return this.api.listSharedResourcesWithHttpInfo(param.organizationId, param.limit, param.offset, param.resourceType,  options).toPromise();
    }

    /**
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param param the request object
     */
    public listSharedResources(param: ResourceSharesApiListSharedResourcesRequest, options?: ConfigurationOptions): Promise<ModelsSharedResourceList> {
        return this.api.listSharedResources(param.organizationId, param.limit, param.offset, param.resourceType,  options).toPromise();
    }

    /**
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param param the request object
     */
    public unshareResourceWithHttpInfo(param: ResourceSharesApiUnshareResourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsResourceShareChangeSet>> {
        return this.api.unshareResourceWithHttpInfo(param.organizationId, param.resourceType, param.resourceId,  options).toPromise();
    }

    /**
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param param the request object
     */
    public unshareResource(param: ResourceSharesApiUnshareResourceRequest, options?: ConfigurationOptions): Promise<ModelsResourceShareChangeSet> {
        return this.api.unshareResource(param.organizationId, param.resourceType, param.resourceId,  options).toPromise();
    }

    /**
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a named share (revoke_organization_ids) that the target organization is actively using is rejected with 409. Set revoke_all_not_in_use to instead revoke every current share the target is NOT using and leave the in-use ones in place (returned in skipped_in_use).
     * Update a resource\'s shares
     * @param param the request object
     */
    public updateResourceSharesWithHttpInfo(param: ResourceSharesApiUpdateResourceSharesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsResourceShareChangeSet>> {
        return this.api.updateResourceSharesWithHttpInfo(param.organizationId, param.resourceType, param.resourceId, param.createResourceSharesRequest,  options).toPromise();
    }

    /**
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a named share (revoke_organization_ids) that the target organization is actively using is rejected with 409. Set revoke_all_not_in_use to instead revoke every current share the target is NOT using and leave the in-use ones in place (returned in skipped_in_use).
     * Update a resource\'s shares
     * @param param the request object
     */
    public updateResourceShares(param: ResourceSharesApiUpdateResourceSharesRequest, options?: ConfigurationOptions): Promise<ModelsResourceShareChangeSet> {
        return this.api.updateResourceShares(param.organizationId, param.resourceType, param.resourceId, param.createResourceSharesRequest,  options).toPromise();
    }

}

import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiCreateRoleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApicreateRole
     */
    organizationId: string
    /**
     * Request body for creating a role
     * @type CreateRoleRequest
     * @memberof RolesApicreateRole
     */
    createRoleRequest: CreateRoleRequest
}

export interface RolesApiDeleteRoleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApideleteRole
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApideleteRole
     */
    roleId: string
}

export interface RolesApiGetRoleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApigetRole
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApigetRole
     */
    roleId: string
}

export interface RolesApiListRolesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApilistRoles
     */
    organizationId: string
    /**
     * Limit the number of roles returned (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof RolesApilistRoles
     */
    limit?: number
    /**
     * Offset the roles returned (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof RolesApilistRoles
     */
    offset?: number
}

export interface RolesApiUpdateRoleRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiupdateRole
     */
    organizationId: string
    /**
     * Role ID
     * Defaults to: undefined
     * @type string
     * @memberof RolesApiupdateRole
     */
    roleId: string
    /**
     * Request body for updating a role
     * @type UpdateRoleRequest
     * @memberof RolesApiupdateRole
     */
    updateRoleRequest: UpdateRoleRequest
}

export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param param the request object
     */
    public createRoleWithHttpInfo(param: RolesApiCreateRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        return this.api.createRoleWithHttpInfo(param.organizationId, param.createRoleRequest,  options).toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param param the request object
     */
    public createRole(param: RolesApiCreateRoleRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        return this.api.createRole(param.organizationId, param.createRoleRequest,  options).toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param param the request object
     */
    public deleteRoleWithHttpInfo(param: RolesApiDeleteRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deleteRoleWithHttpInfo(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Delete a role
     * Delete role
     * @param param the request object
     */
    public deleteRole(param: RolesApiDeleteRoleRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.deleteRole(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param param the request object
     */
    public getRoleWithHttpInfo(param: RolesApiGetRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        return this.api.getRoleWithHttpInfo(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param param the request object
     */
    public getRole(param: RolesApiGetRoleRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        return this.api.getRole(param.organizationId, param.roleId,  options).toPromise();
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param param the request object
     */
    public listRolesWithHttpInfo(param: RolesApiListRolesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissionsList>> {
        return this.api.listRolesWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param param the request object
     */
    public listRoles(param: RolesApiListRolesRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissionsList> {
        return this.api.listRoles(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param param the request object
     */
    public updateRoleWithHttpInfo(param: RolesApiUpdateRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        return this.api.updateRoleWithHttpInfo(param.organizationId, param.roleId, param.updateRoleRequest,  options).toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param param the request object
     */
    public updateRole(param: RolesApiUpdateRoleRequest, options?: ConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        return this.api.updateRole(param.organizationId, param.roleId, param.updateRoleRequest,  options).toPromise();
    }

}

import { ObservableSecretsApi } from "./ObservableAPI";
import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi";

export interface SecretsApiCreateSecretRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApicreateSecret
     */
    organizationId: string
    /**
     * Secret to create
     * @type CreateSecretRequest
     * @memberof SecretsApicreateSecret
     */
    createSecretRequest: CreateSecretRequest
}

export interface SecretsApiDeleteSecretRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApideleteSecret
     */
    organizationId: string
    /**
     * Secret ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApideleteSecret
     */
    secretId: string
}

export interface SecretsApiGetSecretRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApigetSecret
     */
    organizationId: string
    /**
     * Secret ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApigetSecret
     */
    secretId: string
}

export interface SecretsApiListSecretsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApilistSecrets
     */
    organizationId: string
    /**
     * Limit number of results
     * Defaults to: undefined
     * @type number
     * @memberof SecretsApilistSecrets
     */
    limit?: number
    /**
     * Offset results
     * Defaults to: undefined
     * @type number
     * @memberof SecretsApilistSecrets
     */
    offset?: number
}

export interface SecretsApiUpdateSecretRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiupdateSecret
     */
    organizationId: string
    /**
     * Secret ID
     * Defaults to: undefined
     * @type string
     * @memberof SecretsApiupdateSecret
     */
    secretId: string
    /**
     * Secret updates
     * @type CreateSecretRequest
     * @memberof SecretsApiupdateSecret
     */
    createSecretRequest: CreateSecretRequest
}

export class ObjectSecretsApi {
    private api: ObservableSecretsApi

    public constructor(configuration: Configuration, requestFactory?: SecretsApiRequestFactory, responseProcessor?: SecretsApiResponseProcessor) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param param the request object
     */
    public createSecretWithHttpInfo(param: SecretsApiCreateSecretRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        return this.api.createSecretWithHttpInfo(param.organizationId, param.createSecretRequest,  options).toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param param the request object
     */
    public createSecret(param: SecretsApiCreateSecretRequest, options?: ConfigurationOptions): Promise<RoutesV2SecretResponse> {
        return this.api.createSecret(param.organizationId, param.createSecretRequest,  options).toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param param the request object
     */
    public deleteSecretWithHttpInfo(param: SecretsApiDeleteSecretRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSecretWithHttpInfo(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param param the request object
     */
    public deleteSecret(param: SecretsApiDeleteSecretRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSecret(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param param the request object
     */
    public getSecretWithHttpInfo(param: SecretsApiGetSecretRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponents>> {
        return this.api.getSecretWithHttpInfo(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param param the request object
     */
    public getSecret(param: SecretsApiGetSecretRequest, options?: ConfigurationOptions): Promise<ModelsSecretWithComponents> {
        return this.api.getSecret(param.organizationId, param.secretId,  options).toPromise();
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param param the request object
     */
    public listSecretsWithHttpInfo(param: SecretsApiListSecretsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsSecretWithComponentsList>> {
        return this.api.listSecretsWithHttpInfo(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param param the request object
     */
    public listSecrets(param: SecretsApiListSecretsRequest, options?: ConfigurationOptions): Promise<ModelsSecretWithComponentsList> {
        return this.api.listSecrets(param.organizationId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param param the request object
     */
    public updateSecretWithHttpInfo(param: SecretsApiUpdateSecretRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        return this.api.updateSecretWithHttpInfo(param.organizationId, param.secretId, param.createSecretRequest,  options).toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param param the request object
     */
    public updateSecret(param: SecretsApiUpdateSecretRequest, options?: ConfigurationOptions): Promise<RoutesV2SecretResponse> {
        return this.api.updateSecret(param.organizationId, param.secretId, param.createSecretRequest,  options).toPromise();
    }

}

import { ObservableSessionsApi } from "./ObservableAPI";
import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";

export interface SessionsApiCreateSessionRequest {
    /**
     * Session options
     * @type CreateSessionRequest
     * @memberof SessionsApicreateSession
     */
    createSessionRequest?: CreateSessionRequest
}

export class ObjectSessionsApi {
    private api: ObservableSessionsApi

    public constructor(configuration: Configuration, requestFactory?: SessionsApiRequestFactory, responseProcessor?: SessionsApiResponseProcessor) {
        this.api = new ObservableSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.
     * Mint a short-lived API token, optionally scoped to a single org
     * @param param the request object
     */
    public createSessionWithHttpInfo(param: SessionsApiCreateSessionRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3CreateSessionResponse>> {
        return this.api.createSessionWithHttpInfo(param.createSessionRequest,  options).toPromise();
    }

    /**
     * Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.
     * Mint a short-lived API token, optionally scoped to a single org
     * @param param the request object
     */
    public createSession(param: SessionsApiCreateSessionRequest = {}, options?: ConfigurationOptions): Promise<RoutesV3CreateSessionResponse> {
        return this.api.createSession(param.createSessionRequest,  options).toPromise();
    }

}

import { ObservableTransformSandboxApi } from "./ObservableAPI";
import { TransformSandboxApiRequestFactory, TransformSandboxApiResponseProcessor} from "../apis/TransformSandboxApi";

export interface TransformSandboxApiApplyTransformationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformSandboxApiapplyTransformation
     */
    organizationId: string
    /**
     * Transform configuration and record
     * @type ApplyTransformationV2Request
     * @memberof TransformSandboxApiapplyTransformation
     */
    applyTransformationV2Request: ApplyTransformationV2Request
}

export interface TransformSandboxApiApplyTransformationV2Request {
    /**
     * Transform configuration and record
     * @type ApplyTransformationV2Request
     * @memberof TransformSandboxApiapplyTransformationV2
     */
    applyTransformationV2Request: ApplyTransformationV2Request
}

export interface TransformSandboxApiGenerateRecordRequest {
    /**
     * Record generation parameters
     * @type GenerateRecordRequest
     * @memberof TransformSandboxApigenerateRecord
     */
    generateRecordRequest: GenerateRecordRequest
}

export interface TransformSandboxApiListTemplatesRequest {
    /**
     * 
     * @type any
     * @memberof TransformSandboxApilistTemplates
     */
    body?: any
}

export class ObjectTransformSandboxApi {
    private api: ObservableTransformSandboxApi

    public constructor(configuration: Configuration, requestFactory?: TransformSandboxApiRequestFactory, responseProcessor?: TransformSandboxApiResponseProcessor) {
        this.api = new ObservableTransformSandboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param param the request object
     */
    public applyTransformationWithHttpInfo(param: TransformSandboxApiApplyTransformationRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        return this.api.applyTransformationWithHttpInfo(param.organizationId, param.applyTransformationV2Request,  options).toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param param the request object
     */
    public applyTransformation(param: TransformSandboxApiApplyTransformationRequest, options?: ConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        return this.api.applyTransformation(param.organizationId, param.applyTransformationV2Request,  options).toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param param the request object
     */
    public applyTransformationV2WithHttpInfo(param: TransformSandboxApiApplyTransformationV2Request, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        return this.api.applyTransformationV2WithHttpInfo(param.applyTransformationV2Request,  options).toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param param the request object
     */
    public applyTransformationV2(param: TransformSandboxApiApplyTransformationV2Request, options?: ConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        return this.api.applyTransformationV2(param.applyTransformationV2Request,  options).toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param param the request object
     */
    public generateRecordWithHttpInfo(param: TransformSandboxApiGenerateRecordRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2GenerateRecordResponse>> {
        return this.api.generateRecordWithHttpInfo(param.generateRecordRequest,  options).toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param param the request object
     */
    public generateRecord(param: TransformSandboxApiGenerateRecordRequest, options?: ConfigurationOptions): Promise<RoutesV2GenerateRecordResponse> {
        return this.api.generateRecord(param.generateRecordRequest,  options).toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: TransformSandboxApiListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV2ListTemplatesResponse>> {
        return this.api.listTemplatesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param param the request object
     */
    public listTemplates(param: TransformSandboxApiListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<RoutesV2ListTemplatesResponse> {
        return this.api.listTemplates(param.body,  options).toPromise();
    }

}

import { ObservableTransformsApi } from "./ObservableAPI";
import { TransformsApiRequestFactory, TransformsApiResponseProcessor} from "../apis/TransformsApi";

export interface TransformsApiGetTransformTypeMetaRequest {
    /**
     * Transform type ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsApigetTransformTypeMeta
     */
    operationTypeId: string
    /**
     * 
     * @type any
     * @memberof TransformsApigetTransformTypeMeta
     */
    body?: any
}

export interface TransformsApiListTransformTypesRequest {
    /**
     * 
     * @type any
     * @memberof TransformsApilistTransformTypes
     */
    body?: any
}

export class ObjectTransformsApi {
    private api: ObservableTransformsApi

    public constructor(configuration: Configuration, requestFactory?: TransformsApiRequestFactory, responseProcessor?: TransformsApiResponseProcessor) {
        this.api = new ObservableTransformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param param the request object
     */
    public getTransformTypeMetaWithHttpInfo(param: TransformsApiGetTransformTypeMetaRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getTransformTypeMetaWithHttpInfo(param.operationTypeId, param.body,  options).toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param param the request object
     */
    public getTransformTypeMeta(param: TransformsApiGetTransformTypeMetaRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getTransformTypeMeta(param.operationTypeId, param.body,  options).toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param param the request object
     */
    public listTransformTypesWithHttpInfo(param: TransformsApiListTransformTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<OperationInformation>>> {
        return this.api.listTransformTypesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param param the request object
     */
    public listTransformTypes(param: TransformsApiListTransformTypesRequest = {}, options?: ConfigurationOptions): Promise<Array<OperationInformation>> {
        return this.api.listTransformTypes(param.body,  options).toPromise();
    }

}

import { ObservableTransformsRecommendationsApi } from "./ObservableAPI";
import { TransformsRecommendationsApiRequestFactory, TransformsRecommendationsApiResponseProcessor} from "../apis/TransformsRecommendationsApi";

export interface TransformsRecommendationsApiCreateTransformRecommendationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsRecommendationsApicreateTransformRecommendation
     */
    organizationId: string
    /**
     * Security data to analyze
     * @type CreateTransformRecommendationRequest
     * @memberof TransformsRecommendationsApicreateTransformRecommendation
     */
    createTransformRecommendationRequest: CreateTransformRecommendationRequest
}

export interface TransformsRecommendationsApiListAvailableOptimizersRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsRecommendationsApilistAvailableOptimizers
     */
    organizationId: string
}

export class ObjectTransformsRecommendationsApi {
    private api: ObservableTransformsRecommendationsApi

    public constructor(configuration: Configuration, requestFactory?: TransformsRecommendationsApiRequestFactory, responseProcessor?: TransformsRecommendationsApiResponseProcessor) {
        this.api = new ObservableTransformsRecommendationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param param the request object
     */
    public createTransformRecommendationWithHttpInfo(param: TransformsRecommendationsApiCreateTransformRecommendationRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3SecurityDataAnalysis>> {
        return this.api.createTransformRecommendationWithHttpInfo(param.organizationId, param.createTransformRecommendationRequest,  options).toPromise();
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param param the request object
     */
    public createTransformRecommendation(param: TransformsRecommendationsApiCreateTransformRecommendationRequest, options?: ConfigurationOptions): Promise<RoutesV3SecurityDataAnalysis> {
        return this.api.createTransformRecommendation(param.organizationId, param.createTransformRecommendationRequest,  options).toPromise();
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param param the request object
     */
    public listAvailableOptimizersWithHttpInfo(param: TransformsRecommendationsApiListAvailableOptimizersRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoutesV3OptimizerType>>> {
        return this.api.listAvailableOptimizersWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param param the request object
     */
    public listAvailableOptimizers(param: TransformsRecommendationsApiListAvailableOptimizersRequest, options?: ConfigurationOptions): Promise<Array<RoutesV3OptimizerType>> {
        return this.api.listAvailableOptimizers(param.organizationId,  options).toPromise();
    }

}

import { ObservableTransformsRepositoryApi } from "./ObservableAPI";
import { TransformsRepositoryApiRequestFactory, TransformsRepositoryApiResponseProcessor} from "../apis/TransformsRepositoryApi";

export interface TransformsRepositoryApiExportTransformRequest {
    /**
     * Transform to export and optional metadata
     * @type ExportTransformRequest
     * @memberof TransformsRepositoryApiexportTransform
     */
    exportTransformRequest: ExportTransformRequest
}

export interface TransformsRepositoryApiGetTransformDetailsFromRepositoryRequest {
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsRepositoryApigetTransformDetailsFromRepository
     */
    transformId: string
}

export interface TransformsRepositoryApiGetTransformRepositoryDetailsRequest {
    /**
     * Transform ID
     * Defaults to: undefined
     * @type string
     * @memberof TransformsRepositoryApigetTransformRepositoryDetails
     */
    transformId: string
}

export interface TransformsRepositoryApiImportTransformRequest {
    /**
     * YAML transform definition
     * @type any
     * @memberof TransformsRepositoryApiimportTransform
     */
    body: any
}

export interface TransformsRepositoryApiListCommunityTransformsRequest {
}

export interface TransformsRepositoryApiListTransformRepositoryRequest {
    /**
     * Number of items to return (default: 10)
     * Defaults to: undefined
     * @type number
     * @memberof TransformsRepositoryApilistTransformRepository
     */
    limit?: number
    /**
     * Number of items to skip (default: 0)
     * Defaults to: undefined
     * @type number
     * @memberof TransformsRepositoryApilistTransformRepository
     */
    offset?: number
}

export class ObjectTransformsRepositoryApi {
    private api: ObservableTransformsRepositoryApi

    public constructor(configuration: Configuration, requestFactory?: TransformsRepositoryApiRequestFactory, responseProcessor?: TransformsRepositoryApiResponseProcessor) {
        this.api = new ObservableTransformsRepositoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param param the request object
     */
    public exportTransformWithHttpInfo(param: TransformsRepositoryApiExportTransformRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.exportTransformWithHttpInfo(param.exportTransformRequest,  options).toPromise();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param param the request object
     */
    public exportTransform(param: TransformsRepositoryApiExportTransformRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.exportTransform(param.exportTransformRequest,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public getTransformDetailsFromRepositoryWithHttpInfo(param: TransformsRepositoryApiGetTransformDetailsFromRepositoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformConfig>> {
        return this.api.getTransformDetailsFromRepositoryWithHttpInfo(param.transformId,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public getTransformDetailsFromRepository(param: TransformsRepositoryApiGetTransformDetailsFromRepositoryRequest, options?: ConfigurationOptions): Promise<CommunityTransformsInternalTransformConfig> {
        return this.api.getTransformDetailsFromRepository(param.transformId,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public getTransformRepositoryDetailsWithHttpInfo(param: TransformsRepositoryApiGetTransformRepositoryDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryTransform>> {
        return this.api.getTransformRepositoryDetailsWithHttpInfo(param.transformId,  options).toPromise();
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param param the request object
     */
    public getTransformRepositoryDetails(param: TransformsRepositoryApiGetTransformRepositoryDetailsRequest, options?: ConfigurationOptions): Promise<ModelsTransformsRepositoryTransform> {
        return this.api.getTransformRepositoryDetails(param.transformId,  options).toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param param the request object
     */
    public importTransformWithHttpInfo(param: TransformsRepositoryApiImportTransformRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3ImportTransformResponse>> {
        return this.api.importTransformWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param param the request object
     */
    public importTransform(param: TransformsRepositoryApiImportTransformRequest, options?: ConfigurationOptions): Promise<RoutesV3ImportTransformResponse> {
        return this.api.importTransform(param.body,  options).toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     * @param param the request object
     */
    public listCommunityTransformsWithHttpInfo(param: TransformsRepositoryApiListCommunityTransformsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CommunityTransformsInternalTransformsIndex>> {
        return this.api.listCommunityTransformsWithHttpInfo( options).toPromise();
    }

    /**
     * List transforms from repository index
     * List community transforms
     * @param param the request object
     */
    public listCommunityTransforms(param: TransformsRepositoryApiListCommunityTransformsRequest = {}, options?: ConfigurationOptions): Promise<CommunityTransformsInternalTransformsIndex> {
        return this.api.listCommunityTransforms( options).toPromise();
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param param the request object
     */
    public listTransformRepositoryWithHttpInfo(param: TransformsRepositoryApiListTransformRepositoryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ModelsTransformsRepositoryList>> {
        return this.api.listTransformRepositoryWithHttpInfo(param.limit, param.offset,  options).toPromise();
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param param the request object
     */
    public listTransformRepository(param: TransformsRepositoryApiListTransformRepositoryRequest = {}, options?: ConfigurationOptions): Promise<ModelsTransformsRepositoryList> {
        return this.api.listTransformRepository(param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiCreateUserRequest {
    /**
     * 
     * @type any
     * @memberof UsersApicreateUser
     */
    body?: any
}

export interface UsersApiEnableMFARequest {
}

export interface UsersApiGetActiveUserRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof UsersApigetActiveUser
     */
    organizationId: string
}

export interface UsersApiGetMFAStatusRequest {
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create user
     * Create user
     * @param param the request object
     */
    public createUserWithHttpInfo(param: UsersApiCreateUserRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsUser>> {
        return this.api.createUserWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create user
     * Create user
     * @param param the request object
     */
    public createUser(param: UsersApiCreateUserRequest = {}, options?: ConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsUser> {
        return this.api.createUser(param.body,  options).toPromise();
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     * @param param the request object
     */
    public enableMFAWithHttpInfo(param: UsersApiEnableMFARequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AuthenticationtypesMFAEnrollmentTicket>> {
        return this.api.enableMFAWithHttpInfo( options).toPromise();
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     * @param param the request object
     */
    public enableMFA(param: UsersApiEnableMFARequest = {}, options?: ConfigurationOptions): Promise<AuthenticationtypesMFAEnrollmentTicket> {
        return this.api.enableMFA( options).toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     * @param param the request object
     */
    public getActiveUserWithHttpInfo(param: UsersApiGetActiveUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoutesUserWithRoles>> {
        return this.api.getActiveUserWithHttpInfo(param.organizationId,  options).toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     * @param param the request object
     */
    public getActiveUser(param: UsersApiGetActiveUserRequest, options?: ConfigurationOptions): Promise<RoutesUserWithRoles> {
        return this.api.getActiveUser(param.organizationId,  options).toPromise();
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     * @param param the request object
     */
    public getMFAStatusWithHttpInfo(param: UsersApiGetMFAStatusRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoutesV3MFAStatusResponse>> {
        return this.api.getMFAStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     * @param param the request object
     */
    public getMFAStatus(param: UsersApiGetMFAStatusRequest = {}, options?: ConfigurationOptions): Promise<RoutesV3MFAStatusResponse> {
        return this.api.getMFAStatus( options).toPromise();
    }

}
