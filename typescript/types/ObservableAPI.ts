import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
import { ModelsResourceShareWithUsage } from '../models/ModelsResourceShareWithUsage';
import { ModelsResourceShareWithUsageList } from '../models/ModelsResourceShareWithUsageList';
import { ModelsRoleWithPermissions } from '../models/ModelsRoleWithPermissions';
import { ModelsRoleWithPermissionsList } from '../models/ModelsRoleWithPermissionsList';
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

import { AlertRulesApiRequestFactory, AlertRulesApiResponseProcessor} from "../apis/AlertRulesApi";
export class ObservableAlertRulesApi {
    private requestFactory: AlertRulesApiRequestFactory;
    private responseProcessor: AlertRulesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertRulesApiRequestFactory,
        responseProcessor?: AlertRulesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AlertRulesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AlertRulesApiResponseProcessor();
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param createAlertRuleRequest Request body for creating an alert rule
     */
    public createAlertRuleWithHttpInfo(organizationId: string, createAlertRuleRequest: CreateAlertRuleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAlertRule>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAlertRule(organizationId, createAlertRuleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAlertRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param createAlertRuleRequest Request body for creating an alert rule
     */
    public createAlertRule(organizationId: string, createAlertRuleRequest: CreateAlertRuleRequest, _options?: ConfigurationOptions): Observable<ModelsAlertRule> {
        return this.createAlertRuleWithHttpInfo(organizationId, createAlertRuleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsAlertRule>) => apiResponse.data));
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to delete
     */
    public deleteAlertRuleWithHttpInfo(organizationId: string, alertRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAlertRule(organizationId, alertRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlertRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to delete
     */
    public deleteAlertRule(organizationId: string, alertRuleId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAlertRuleWithHttpInfo(organizationId, alertRuleId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to retrieve
     */
    public getAlertRuleByIDWithHttpInfo(organizationId: string, alertRuleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAlertRule>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlertRuleByID(organizationId, alertRuleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlertRuleByIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to retrieve
     */
    public getAlertRuleByID(organizationId: string, alertRuleId: string, _options?: ConfigurationOptions): Observable<ModelsAlertRule> {
        return this.getAlertRuleByIDWithHttpInfo(organizationId, alertRuleId, _options).pipe(map((apiResponse: HttpInfo<ModelsAlertRule>) => apiResponse.data));
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param alertRuleTypeId Alert Rule Type ID
     */
    public getAlertRuleConfigMetaWithHttpInfo(alertRuleTypeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AlertsAlertMeta>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlertRuleConfigMeta(alertRuleTypeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlertRuleConfigMetaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param alertRuleTypeId Alert Rule Type ID
     */
    public getAlertRuleConfigMeta(alertRuleTypeId: string, _options?: ConfigurationOptions): Observable<AlertsAlertMeta> {
        return this.getAlertRuleConfigMetaWithHttpInfo(alertRuleTypeId, _options).pipe(map((apiResponse: HttpInfo<AlertsAlertMeta>) => apiResponse.data));
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     */
    public listAlertRuleTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<AlertsAlertMeta>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAlertRuleTypes(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAlertRuleTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     */
    public listAlertRuleTypes(_options?: ConfigurationOptions): Observable<Array<AlertsAlertMeta>> {
        return this.listAlertRuleTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<AlertsAlertMeta>>) => apiResponse.data));
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAlertRulesWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAlertRuleList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAlertRules(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAlertRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAlertRules(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsAlertRuleList> {
        return this.listAlertRulesWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsAlertRuleList>) => apiResponse.data));
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param updateAlertRuleRequest Request body for updating an alert rule
     */
    public updateAlertRuleWithHttpInfo(organizationId: string, alertRuleId: string, updateAlertRuleRequest: UpdateAlertRuleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAlertRule>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAlertRule(organizationId, alertRuleId, updateAlertRuleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAlertRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param updateAlertRuleRequest Request body for updating an alert rule
     */
    public updateAlertRule(organizationId: string, alertRuleId: string, updateAlertRuleRequest: UpdateAlertRuleRequest, _options?: ConfigurationOptions): Observable<ModelsAlertRule> {
        return this.updateAlertRuleWithHttpInfo(organizationId, alertRuleId, updateAlertRuleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsAlertRule>) => apiResponse.data));
    }

}

import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi";
export class ObservableAlertsApi {
    private requestFactory: AlertsApiRequestFactory;
    private responseProcessor: AlertsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertsApiRequestFactory,
        responseProcessor?: AlertsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AlertsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AlertsApiResponseProcessor();
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
    public listAlertsWithHttpInfo(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3AlertList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAlerts(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAlertsWithHttpInfo(rsp)));
            }));
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
    public listAlerts(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: ConfigurationOptions): Observable<RoutesV3AlertList> {
        return this.listAlertsWithHttpInfo(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until, _options).pipe(map((apiResponse: HttpInfo<RoutesV3AlertList>) => apiResponse.data));
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
    public streamAlertsWithHttpInfo(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamAlerts(organizationId, since, last, ruleIds, severities, resourceIds, resourceType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamAlertsWithHttpInfo(rsp)));
            }));
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
    public streamAlerts(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamAlertsWithHttpInfo(organizationId, since, last, ruleIds, severities, resourceIds, resourceType, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";
export class ObservableAuditLogsApi {
    private requestFactory: AuditLogsApiRequestFactory;
    private responseProcessor: AuditLogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditLogsApiRequestFactory,
        responseProcessor?: AuditLogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuditLogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuditLogsApiResponseProcessor();
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
    public getOrganizationAuditLogHistogramWithHttpInfo(organizationId: string, _from: string, to: string, buckets?: number, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOrganizationAuditLogHistogram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrganizationAuditLogHistogram(organizationId, _from, to, buckets, resourceType, resourceId, actorId, action, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationAuditLogHistogramWithHttpInfo(rsp)));
            }));
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
    public getOrganizationAuditLogHistogram(organizationId: string, _from: string, to: string, buckets?: number, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _options?: ConfigurationOptions): Observable<ModelsOrganizationAuditLogHistogram> {
        return this.getOrganizationAuditLogHistogramWithHttpInfo(organizationId, _from, to, buckets, resourceType, resourceId, actorId, action, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationAuditLogHistogram>) => apiResponse.data));
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
    public listOrganizationAuditLogsWithHttpInfo(organizationId: string, limit?: number, cursor?: string, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _from?: string, to?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOrganizationAuditLogList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrganizationAuditLogs(organizationId, limit, cursor, resourceType, resourceId, actorId, action, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationAuditLogsWithHttpInfo(rsp)));
            }));
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
    public listOrganizationAuditLogs(organizationId: string, limit?: number, cursor?: string, resourceType?: string, resourceId?: string, actorId?: string, action?: string, _from?: string, to?: string, _options?: ConfigurationOptions): Observable<ModelsOrganizationAuditLogList> {
        return this.listOrganizationAuditLogsWithHttpInfo(organizationId, limit, cursor, resourceType, resourceId, actorId, action, _from, to, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationAuditLogList>) => apiResponse.data));
    }

}

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
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param getTokenRequest Login request
     */
    public getTokenWithHttpInfo(getTokenRequest: GetTokenRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AuthenticationtypesTokenResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getToken(getTokenRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param getTokenRequest Login request
     */
    public getToken(getTokenRequest: GetTokenRequest, _options?: ConfigurationOptions): Observable<AuthenticationtypesTokenResponse> {
        return this.getTokenWithHttpInfo(getTokenRequest, _options).pipe(map((apiResponse: HttpInfo<AuthenticationtypesTokenResponse>) => apiResponse.data));
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public loginCallbackHandlerWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.loginCallbackHandler(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginCallbackHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Displays a page with the access token for the user to include in requests.
     * Handle login callback
     */
    public loginCallbackHandler(_options?: ConfigurationOptions): Observable<string> {
        return this.loginCallbackHandlerWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public loginHandlerWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.loginHandler(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Redirects the user to authentication service login page to initiate the login process.
     * Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
     */
    public loginHandler(_options?: ConfigurationOptions): Observable<void> {
        return this.loginHandlerWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public resendVerificationHandlerWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.resendVerificationHandler(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resendVerificationHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resends the email verification to the user\'s email address
     * Resend email verification
     */
    public resendVerificationHandler(_options?: ConfigurationOptions): Observable<string> {
        return this.resendVerificationHandlerWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { BillingAccountsApiRequestFactory, BillingAccountsApiResponseProcessor} from "../apis/BillingAccountsApi";
export class ObservableBillingAccountsApi {
    private requestFactory: BillingAccountsApiRequestFactory;
    private responseProcessor: BillingAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingAccountsApiRequestFactory,
        responseProcessor?: BillingAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BillingAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BillingAccountsApiResponseProcessor();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param createBillingAccountRequest Request body for creating a billing account
     */
    public createBillingAccountWithHttpInfo(createBillingAccountRequest: CreateBillingAccountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBillingAccount(createBillingAccountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBillingAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param createBillingAccountRequest Request body for creating a billing account
     */
    public createBillingAccount(createBillingAccountRequest: CreateBillingAccountRequest, _options?: ConfigurationOptions): Observable<ModelsBillingAccount> {
        return this.createBillingAccountWithHttpInfo(createBillingAccountRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccount>) => apiResponse.data));
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     */
    public deleteBillingAccountWithHttpInfo(billingAccountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBillingAccount(billingAccountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBillingAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Billing Account
     * Delete Billing Account
     * @param billingAccountId Billing Account ID
     */
    public deleteBillingAccount(billingAccountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteBillingAccountWithHttpInfo(billingAccountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountWithHttpInfo(billingAccountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingAccount(billingAccountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Billing Account
     * Get Billing Account
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccount(billingAccountId: string, _options?: ConfigurationOptions): Observable<ModelsBillingAccount> {
        return this.getBillingAccountWithHttpInfo(billingAccountId, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccount>) => apiResponse.data));
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingAccountsWithHttpInfo(limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccountList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingAccounts(limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Billing Accounts
     * List Billing Accounts
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingAccounts(limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsBillingAccountList> {
        return this.getBillingAccountsWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccountList>) => apiResponse.data));
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param updateBillingAccountRequest Request body for updating a billing account
     */
    public updateBillingAccountWithHttpInfo(billingAccountId: string, updateBillingAccountRequest: UpdateBillingAccountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBillingAccount(billingAccountId, updateBillingAccountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBillingAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param updateBillingAccountRequest Request body for updating a billing account
     */
    public updateBillingAccount(billingAccountId: string, updateBillingAccountRequest: UpdateBillingAccountRequest, _options?: ConfigurationOptions): Observable<ModelsBillingAccount> {
        return this.updateBillingAccountWithHttpInfo(billingAccountId, updateBillingAccountRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccount>) => apiResponse.data));
    }

}

import { BillingAccountsRBACApiRequestFactory, BillingAccountsRBACApiResponseProcessor} from "../apis/BillingAccountsRBACApi";
export class ObservableBillingAccountsRBACApi {
    private requestFactory: BillingAccountsRBACApiRequestFactory;
    private responseProcessor: BillingAccountsRBACApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingAccountsRBACApiRequestFactory,
        responseProcessor?: BillingAccountsRBACApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BillingAccountsRBACApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BillingAccountsRBACApiResponseProcessor();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountRoleRequest Create Billing Account Role Request
     */
    public createBillingAccountRoleWithHttpInfo(billingAccountId: string, createBillingAccountRoleRequest: CreateBillingAccountRoleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccountRole>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBillingAccountRole(billingAccountId, createBillingAccountRoleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBillingAccountRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountRoleRequest Create Billing Account Role Request
     */
    public createBillingAccountRole(billingAccountId: string, createBillingAccountRoleRequest: CreateBillingAccountRoleRequest, _options?: ConfigurationOptions): Observable<ModelsBillingAccountRole> {
        return this.createBillingAccountRoleWithHttpInfo(billingAccountId, createBillingAccountRoleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccountRole>) => apiResponse.data));
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param createBillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public createBillingAccountUserRoleWithHttpInfo(billingAccountId: string, roleId: string, createBillingAccountUserRoleRequest: CreateBillingAccountUserRoleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBillingAccountUserRole(billingAccountId, roleId, createBillingAccountUserRoleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBillingAccountUserRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param createBillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public createBillingAccountUserRole(billingAccountId: string, roleId: string, createBillingAccountUserRoleRequest: CreateBillingAccountUserRoleRequest, _options?: ConfigurationOptions): Observable<string> {
        return this.createBillingAccountUserRoleWithHttpInfo(billingAccountId, roleId, createBillingAccountUserRoleRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public deleteBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBillingAccountRole(billingAccountId, roleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBillingAccountRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Billing Account Role
     * Delete Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public deleteBillingAccountRole(billingAccountId: string, roleId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteBillingAccountRoleWithHttpInfo(billingAccountId, roleId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public deleteBillingAccountUserRoleWithHttpInfo(billingAccountId: string, roleId: string, userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBillingAccountUserRole(billingAccountId, roleId, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBillingAccountUserRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a user to a billing account role
     * Delete Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param userId User ID
     */
    public deleteBillingAccountUserRole(billingAccountId: string, roleId: string, userId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteBillingAccountUserRoleWithHttpInfo(billingAccountId, roleId, userId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public getBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccountRole>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingAccountRole(billingAccountId, roleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingAccountRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Billing Account Role
     * Get Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     */
    public getBillingAccountRole(billingAccountId: string, roleId: string, _options?: ConfigurationOptions): Observable<ModelsBillingAccountRole> {
        return this.getBillingAccountRoleWithHttpInfo(billingAccountId, roleId, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccountRole>) => apiResponse.data));
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountRolesWithHttpInfo(billingAccountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<ModelsBillingAccountRole>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingAccountRoles(billingAccountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingAccountRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Billing Account Roles
     * Get Billing Account Roles
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountRoles(billingAccountId: string, _options?: ConfigurationOptions): Observable<Array<ModelsBillingAccountRole>> {
        return this.getBillingAccountRolesWithHttpInfo(billingAccountId, _options).pipe(map((apiResponse: HttpInfo<Array<ModelsBillingAccountRole>>) => apiResponse.data));
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public getBillingPermissionsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<ModelsBillingAccountPermission>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingPermissions(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Billing Permissions
     * Get Billing Permissions
     */
    public getBillingPermissions(_options?: ConfigurationOptions): Observable<Array<ModelsBillingAccountPermission>> {
        return this.getBillingPermissionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ModelsBillingAccountPermission>>) => apiResponse.data));
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param updateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public updateBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, updateBillingAccountRoleRequest: UpdateBillingAccountRoleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingAccountRole>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBillingAccountRole(billingAccountId, roleId, updateBillingAccountRoleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBillingAccountRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param updateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public updateBillingAccountRole(billingAccountId: string, roleId: string, updateBillingAccountRoleRequest: UpdateBillingAccountRoleRequest, _options?: ConfigurationOptions): Observable<ModelsBillingAccountRole> {
        return this.updateBillingAccountRoleWithHttpInfo(billingAccountId, roleId, updateBillingAccountRoleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingAccountRole>) => apiResponse.data));
    }

}

import { BillingProductsApiRequestFactory, BillingProductsApiResponseProcessor} from "../apis/BillingProductsApi";
export class ObservableBillingProductsApi {
    private requestFactory: BillingProductsApiRequestFactory;
    private responseProcessor: BillingProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingProductsApiRequestFactory,
        responseProcessor?: BillingProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BillingProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BillingProductsApiResponseProcessor();
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public cancelBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelBillingAccountSubscription(billingAccountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelBillingAccountSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel Billing Account Subscription
     * Cancel Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public cancelBillingAccountSubscription(billingAccountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.cancelBillingAccountSubscriptionWithHttpInfo(billingAccountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public createBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, createBillingAccountSubscriptionRequest: CreateBillingAccountSubscriptionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBillingAccountSubscription(billingAccountId, createBillingAccountSubscriptionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBillingAccountSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param createBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public createBillingAccountSubscription(billingAccountId: string, createBillingAccountSubscriptionRequest: CreateBillingAccountSubscriptionRequest, _options?: ConfigurationOptions): Observable<RoutesV2CreateBillingAccountSubscriptionResponse> {
        return this.createBillingAccountSubscriptionWithHttpInfo(billingAccountId, createBillingAccountSubscriptionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>) => apiResponse.data));
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingAccountSubscription(billingAccountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingAccountSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Billing Account Subscription
     * Get Billing Account Subscription
     * @param billingAccountId Billing Account ID
     */
    public getBillingAccountSubscription(billingAccountId: string, _options?: ConfigurationOptions): Observable<ModelsBillingProduct> {
        return this.getBillingAccountSubscriptionWithHttpInfo(billingAccountId, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingProduct>) => apiResponse.data));
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param [showInactive] Show inactive products
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingProductsWithHttpInfo(showInactive?: boolean, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsBillingProductList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillingProducts(showInactive, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillingProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Billing Products
     * List Billing Products
     * @param [showInactive] Show inactive products
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public getBillingProducts(showInactive?: boolean, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsBillingProductList> {
        return this.getBillingProductsWithHttpInfo(showInactive, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsBillingProductList>) => apiResponse.data));
    }

}

import { ConditionSandboxApiRequestFactory, ConditionSandboxApiResponseProcessor} from "../apis/ConditionSandboxApi";
export class ObservableConditionSandboxApi {
    private requestFactory: ConditionSandboxApiRequestFactory;
    private responseProcessor: ConditionSandboxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConditionSandboxApiRequestFactory,
        responseProcessor?: ConditionSandboxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConditionSandboxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConditionSandboxApiResponseProcessor();
    }

    /**
     * Apply a condition to a JSON record
     * Apply condition to record
     * @param applyConditionV2Request Condition and record
     */
    public applyConditionV2WithHttpInfo(applyConditionV2Request: ApplyConditionV2Request, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2ApplyConditionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyConditionV2(applyConditionV2Request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyConditionV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply a condition to a JSON record
     * Apply condition to record
     * @param applyConditionV2Request Condition and record
     */
    public applyConditionV2(applyConditionV2Request: ApplyConditionV2Request, _options?: ConfigurationOptions): Observable<RoutesV2ApplyConditionResponse> {
        return this.applyConditionV2WithHttpInfo(applyConditionV2Request, _options).pipe(map((apiResponse: HttpInfo<RoutesV2ApplyConditionResponse>) => apiResponse.data));
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
     */
    public listConditionsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<LeafconditionsInfo>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listConditions(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listConditionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List conditions
     * List conditions
     */
    public listConditions(_options?: ConfigurationOptions): Observable<Array<LeafconditionsInfo>> {
        return this.listConditionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<LeafconditionsInfo>>) => apiResponse.data));
    }

}

import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi";
export class ObservableConnectionsApi {
    private requestFactory: ConnectionsApiRequestFactory;
    private responseProcessor: ConnectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectionsApiRequestFactory,
        responseProcessor?: ConnectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConnectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConnectionsApiResponseProcessor();
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param createConnectionRequest Request body for creating a connection
     */
    public createConnectionWithHttpInfo(organizationId: string, createConnectionRequest: CreateConnectionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsConnection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createConnection(organizationId, createConnectionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConnectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param createConnectionRequest Request body for creating a connection
     */
    public createConnection(organizationId: string, createConnectionRequest: CreateConnectionRequest, _options?: ConfigurationOptions): Observable<ModelsConnection> {
        return this.createConnectionWithHttpInfo(organizationId, createConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsConnection>) => apiResponse.data));
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to delete
     */
    public deleteConnectionWithHttpInfo(organizationId: string, connectionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteConnection(organizationId, connectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConnectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to delete
     */
    public deleteConnection(organizationId: string, connectionId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteConnectionWithHttpInfo(organizationId, connectionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param organizationId Organization ID
     * @param connectionId Connection ID to retrieve
     */
    public getConnectionByIDWithHttpInfo(organizationId: string, connectionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsConnection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConnectionByID(organizationId, connectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConnectionByIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param organizationId Organization ID
     * @param connectionId Connection ID to retrieve
     */
    public getConnectionByID(organizationId: string, connectionId: string, _options?: ConfigurationOptions): Observable<ModelsConnection> {
        return this.getConnectionByIDWithHttpInfo(organizationId, connectionId, _options).pipe(map((apiResponse: HttpInfo<ModelsConnection>) => apiResponse.data));
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listConnectionsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsConnectionList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listConnections(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listConnectionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listConnections(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsConnectionList> {
        return this.listConnectionsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsConnectionList>) => apiResponse.data));
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param updateConnectionRequest Request body for updating a connection
     */
    public updateConnectionWithHttpInfo(organizationId: string, connectionId: string, updateConnectionRequest: UpdateConnectionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsConnection>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateConnection(organizationId, connectionId, updateConnectionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConnectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param updateConnectionRequest Request body for updating a connection
     */
    public updateConnection(organizationId: string, connectionId: string, updateConnectionRequest: UpdateConnectionRequest, _options?: ConfigurationOptions): Observable<ModelsConnection> {
        return this.updateConnectionWithHttpInfo(organizationId, connectionId, updateConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsConnection>) => apiResponse.data));
    }

}

import { EnrichmentSandboxApiRequestFactory, EnrichmentSandboxApiResponseProcessor} from "../apis/EnrichmentSandboxApi";
export class ObservableEnrichmentSandboxApi {
    private requestFactory: EnrichmentSandboxApiRequestFactory;
    private responseProcessor: EnrichmentSandboxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnrichmentSandboxApiRequestFactory,
        responseProcessor?: EnrichmentSandboxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnrichmentSandboxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnrichmentSandboxApiResponseProcessor();
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param enrichmentSandboxRequest Enrichment configuration and record
     */
    public enrichmentSandboxWithHttpInfo(organizationId: string, enrichmentSandboxRequest: EnrichmentSandboxRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3EnrichmentSandboxResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enrichmentSandbox(organizationId, enrichmentSandboxRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enrichmentSandboxWithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param enrichmentSandboxRequest Enrichment configuration and record
     */
    public enrichmentSandbox(organizationId: string, enrichmentSandboxRequest: EnrichmentSandboxRequest, _options?: ConfigurationOptions): Observable<RoutesV3EnrichmentSandboxResponse> {
        return this.enrichmentSandboxWithHttpInfo(organizationId, enrichmentSandboxRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV3EnrichmentSandboxResponse>) => apiResponse.data));
    }

}

import { EnrichmentsApiRequestFactory, EnrichmentsApiResponseProcessor} from "../apis/EnrichmentsApi";
export class ObservableEnrichmentsApi {
    private requestFactory: EnrichmentsApiRequestFactory;
    private responseProcessor: EnrichmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnrichmentsApiRequestFactory,
        responseProcessor?: EnrichmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnrichmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnrichmentsApiResponseProcessor();
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID
     * @param enrichmentTypeId Enrichment type ID
     */
    public getEnrichmentTypeMetaWithHttpInfo(organizationId: string, enrichmentTypeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<EnrichmentConnectorMeta>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEnrichmentTypeMeta(organizationId, enrichmentTypeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnrichmentTypeMetaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID
     * @param enrichmentTypeId Enrichment type ID
     */
    public getEnrichmentTypeMeta(organizationId: string, enrichmentTypeId: string, _options?: ConfigurationOptions): Observable<EnrichmentConnectorMeta> {
        return this.getEnrichmentTypeMetaWithHttpInfo(organizationId, enrichmentTypeId, _options).pipe(map((apiResponse: HttpInfo<EnrichmentConnectorMeta>) => apiResponse.data));
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public listEnrichmentTypesWithHttpInfo(organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<EnrichmentConnectorMeta>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listEnrichmentTypes(organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnrichmentTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public listEnrichmentTypes(organizationId: string, _options?: ConfigurationOptions): Observable<Array<EnrichmentConnectorMeta>> {
        return this.listEnrichmentTypesWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<Array<EnrichmentConnectorMeta>>) => apiResponse.data));
    }

}

import { FeatureFlagsApiRequestFactory, FeatureFlagsApiResponseProcessor} from "../apis/FeatureFlagsApi";
export class ObservableFeatureFlagsApi {
    private requestFactory: FeatureFlagsApiRequestFactory;
    private responseProcessor: FeatureFlagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FeatureFlagsApiRequestFactory,
        responseProcessor?: FeatureFlagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FeatureFlagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FeatureFlagsApiResponseProcessor();
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     */
    public getFeatureFlagsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3GetFeatureFlagResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeatureFlags(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureFlagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     */
    public getFeatureFlags(_options?: ConfigurationOptions): Observable<RoutesV3GetFeatureFlagResponse> {
        return this.getFeatureFlagsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RoutesV3GetFeatureFlagResponse>) => apiResponse.data));
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
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public getInputTypeMetaWithHttpInfo(inputTypeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsConnectorMeta>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getInputTypeMeta(inputTypeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInputTypeMetaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get input config meta
     * Get input config meta
     * @param inputTypeId Input type ID
     */
    public getInputTypeMeta(inputTypeId: string, _options?: ConfigurationOptions): Observable<ModelsConnectorMeta> {
        return this.getInputTypeMetaWithHttpInfo(inputTypeId, _options).pipe(map((apiResponse: HttpInfo<ModelsConnectorMeta>) => apiResponse.data));
    }

    /**
     * List inputs
     * List inputs
     */
    public listInputTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<InputsConnectorMeta>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listInputTypes(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInputTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List inputs
     * List inputs
     */
    public listInputTypes(_options?: ConfigurationOptions): Observable<Array<InputsConnectorMeta>> {
        return this.listInputTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<InputsConnectorMeta>>) => apiResponse.data));
    }

}

import { KeyValueStoreApiRequestFactory, KeyValueStoreApiResponseProcessor} from "../apis/KeyValueStoreApi";
export class ObservableKeyValueStoreApi {
    private requestFactory: KeyValueStoreApiRequestFactory;
    private responseProcessor: KeyValueStoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: KeyValueStoreApiRequestFactory,
        responseProcessor?: KeyValueStoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new KeyValueStoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KeyValueStoreApiResponseProcessor();
    }

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param organizationId Organization ID
     * @param componentId Component ID
     */
    public getKVLookupMetadataWithHttpInfo(organizationId: string, componentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<KvlookupGetMetadataResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getKVLookupMetadata(organizationId, componentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getKVLookupMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL
     * Get KV lookup metadata
     * @param organizationId Organization ID
     * @param componentId Component ID
     */
    public getKVLookupMetadata(organizationId: string, componentId: string, _options?: ConfigurationOptions): Observable<KvlookupGetMetadataResponse> {
        return this.getKVLookupMetadataWithHttpInfo(organizationId, componentId, _options).pipe(map((apiResponse: HttpInfo<KvlookupGetMetadataResponse>) => apiResponse.data));
    }

    /**
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param numEntries Number of sample entries to return
     */
    public getKVLookupSampleEntriesWithHttpInfo(organizationId: string, componentId: string, numEntries: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<KvlookupKVEntry>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getKVLookupSampleEntries(organizationId, componentId, numEntries, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getKVLookupSampleEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a sample of entries from the NATS KV lookup bucket for a given organization and component
     * Get KV lookup sample entries
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param numEntries Number of sample entries to return
     */
    public getKVLookupSampleEntries(organizationId: string, componentId: string, numEntries: number, _options?: ConfigurationOptions): Observable<Array<KvlookupKVEntry>> {
        return this.getKVLookupSampleEntriesWithHttpInfo(organizationId, componentId, numEntries, _options).pipe(map((apiResponse: HttpInfo<Array<KvlookupKVEntry>>) => apiResponse.data));
    }

    /**
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param key Key to look up
     */
    public getValueFromKvStoreWithHttpInfo(organizationId: string, componentId: string, key: string, _options?: ConfigurationOptions): Observable<HttpInfo<KvlookupKVEntry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValueFromKvStore(organizationId, componentId, key, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValueFromKvStoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component
     * Get value by key from KV lookup
     * @param organizationId Organization ID
     * @param componentId Component ID
     * @param key Key to look up
     */
    public getValueFromKvStore(organizationId: string, componentId: string, key: string, _options?: ConfigurationOptions): Observable<KvlookupKVEntry> {
        return this.getValueFromKvStoreWithHttpInfo(organizationId, componentId, key, _options).pipe(map((apiResponse: HttpInfo<KvlookupKVEntry>) => apiResponse.data));
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
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public streamNodeDataWithHttpInfo(organizationId: string, nodeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamNodeData(organizationId, nodeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamNodeDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream data for a specific node within an organization
     * Stream node data
     * @param organizationId Organization ID
     * @param nodeId Node ID
     */
    public streamNodeData(organizationId: string, nodeId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamNodeDataWithHttpInfo(organizationId, nodeId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
    public streamNodeLogsWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamNodeLogs(organizationId, pipelineId, nodeId, since, last, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamNodeLogsWithHttpInfo(rsp)));
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
    public streamNodeLogs(organizationId: string, pipelineId: string, nodeId: string, since?: string, last?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamNodeLogsWithHttpInfo(organizationId, pipelineId, nodeId, since, last, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationAPILogsWithHttpInfo(organizationId: string, since?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamOrganizationAPILogs(organizationId, since, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamOrganizationAPILogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream api logs for an organization
     * Stream organization api logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationAPILogs(organizationId: string, since?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamOrganizationAPILogsWithHttpInfo(organizationId, since, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public streamOrganizationLogsWithHttpInfo(organizationId: string, since?: string, last?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamOrganizationLogs(organizationId, since, last, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamOrganizationLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream logs for an entire organization
     * Stream organization logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public streamOrganizationLogs(organizationId: string, since?: string, last?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamOrganizationLogsWithHttpInfo(organizationId, since, last, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationPipelinesLogsWithHttpInfo(organizationId: string, since?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamOrganizationPipelinesLogs(organizationId, since, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamOrganizationPipelinesLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream pipeline logs for an organization
     * Stream organization pipeline logs
     * @param organizationId Organization ID
     * @param [since] RFC3339 timestamp to start streaming from
     */
    public streamOrganizationPipelinesLogs(organizationId: string, since?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamOrganizationPipelinesLogsWithHttpInfo(organizationId, since, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Stream logs for a specific pipeline within an organization
     * Stream pipeline logs
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [since] RFC3339 timestamp to start streaming from
     * @param [last] Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;)
     */
    public streamPipelineLogsWithHttpInfo(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamPipelineLogs(organizationId, pipelineId, since, last, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamPipelineLogsWithHttpInfo(rsp)));
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
    public streamPipelineLogs(organizationId: string, pipelineId: string, since?: string, last?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.streamPipelineLogsWithHttpInfo(organizationId, pipelineId, since, last, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public getOAuthRedirectWithHttpInfo(typeId: string, organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOAuthRedirect(typeId, organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOAuthRedirectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get oauth redirect
     * Get oauth redirect
     * @param typeId component type ID
     * @param organizationId organization ID
     */
    public getOAuthRedirect(typeId: string, organizationId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getOAuthRedirectWithHttpInfo(typeId, organizationId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public oAuthCallbackWithHttpInfo(typeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.oAuthCallback(typeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oAuthCallbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Oauth callback
     * Oauth callback
     * @param typeId component type ID
     */
    public oAuthCallback(typeId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.oAuthCallbackWithHttpInfo(typeId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { OrganizationAPIKeysApiRequestFactory, OrganizationAPIKeysApiResponseProcessor} from "../apis/OrganizationAPIKeysApi";
export class ObservableOrganizationAPIKeysApi {
    private requestFactory: OrganizationAPIKeysApiRequestFactory;
    private responseProcessor: OrganizationAPIKeysApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationAPIKeysApiRequestFactory,
        responseProcessor?: OrganizationAPIKeysApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationAPIKeysApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationAPIKeysApiResponseProcessor();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param createAPIKeyRequest Request body for creating an API key
     */
    public createAPIKeyWithHttpInfo(organizationId: string, createAPIKeyRequest: CreateAPIKeyRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAPIKeyWithToken>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAPIKey(organizationId, createAPIKeyRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAPIKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param createAPIKeyRequest Request body for creating an API key
     */
    public createAPIKey(organizationId: string, createAPIKeyRequest: CreateAPIKeyRequest, _options?: ConfigurationOptions): Observable<ModelsAPIKeyWithToken> {
        return this.createAPIKeyWithHttpInfo(organizationId, createAPIKeyRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKeyWithToken>) => apiResponse.data));
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public deleteAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAPIKey(organizationId, apiKeyId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAPIKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete API key
     * Delete API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public deleteAPIKey(organizationId: string, apiKeyId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteAPIKeyWithHttpInfo(organizationId, apiKeyId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public getAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAPIKey>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAPIKey(organizationId, apiKeyId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAPIKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get API key
     * Get API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public getAPIKey(organizationId: string, apiKeyId: string, _options?: ConfigurationOptions): Observable<ModelsAPIKey> {
        return this.getAPIKeyWithHttpInfo(organizationId, apiKeyId, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKey>) => apiResponse.data));
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAPIKeysWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAPIKeyList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAPIKeys(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAPIKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * List API keys
     * List API keys
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listAPIKeys(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsAPIKeyList> {
        return this.listAPIKeysWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKeyList>) => apiResponse.data));
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public regenerateAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAPIKeyWithToken>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.regenerateAPIKey(organizationId, apiKeyId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regenerateAPIKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Regenerates an API key by creating a new one with the same metadata and deleting the old one
     * Regenerate API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     */
    public regenerateAPIKey(organizationId: string, apiKeyId: string, _options?: ConfigurationOptions): Observable<ModelsAPIKeyWithToken> {
        return this.regenerateAPIKeyWithHttpInfo(organizationId, apiKeyId, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKeyWithToken>) => apiResponse.data));
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param updateAPIKeyRequest Request body for updating an API key
     */
    public updateAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, updateAPIKeyRequest: UpdateAPIKeyRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsAPIKey>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAPIKey(organizationId, apiKeyId, updateAPIKeyRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAPIKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param updateAPIKeyRequest Request body for updating an API key
     */
    public updateAPIKey(organizationId: string, apiKeyId: string, updateAPIKeyRequest: UpdateAPIKeyRequest, _options?: ConfigurationOptions): Observable<ModelsAPIKey> {
        return this.updateAPIKeyWithHttpInfo(organizationId, apiKeyId, updateAPIKeyRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsAPIKey>) => apiResponse.data));
    }

}

import { OrganizationEnrichmentsApiRequestFactory, OrganizationEnrichmentsApiResponseProcessor} from "../apis/OrganizationEnrichmentsApi";
export class ObservableOrganizationEnrichmentsApi {
    private requestFactory: OrganizationEnrichmentsApiRequestFactory;
    private responseProcessor: OrganizationEnrichmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationEnrichmentsApiRequestFactory,
        responseProcessor?: OrganizationEnrichmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationEnrichmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationEnrichmentsApiResponseProcessor();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param createEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public createEnrichmentWithHttpInfo(organizationId: string, createEnrichmentRequest: CreateEnrichmentRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsEnrichment>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEnrichment(organizationId, createEnrichmentRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnrichmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param createEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public createEnrichment(organizationId: string, createEnrichmentRequest: CreateEnrichmentRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsEnrichment> {
        return this.createEnrichmentWithHttpInfo(organizationId, createEnrichmentRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsEnrichment>) => apiResponse.data));
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public deleteEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3SuccessResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEnrichment(organizationId, enrichmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEnrichmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public deleteEnrichment(organizationId: string, enrichmentId: string, _options?: ConfigurationOptions): Observable<RoutesV3SuccessResponse> {
        return this.deleteEnrichmentWithHttpInfo(organizationId, enrichmentId, _options).pipe(map((apiResponse: HttpInfo<RoutesV3SuccessResponse>) => apiResponse.data));
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public getEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3GetEnrichmentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEnrichment(organizationId, enrichmentId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnrichmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public getEnrichment(organizationId: string, enrichmentId: string, _options?: ConfigurationOptions): Observable<RoutesV3GetEnrichmentResponse> {
        return this.getEnrichmentWithHttpInfo(organizationId, enrichmentId, _options).pipe(map((apiResponse: HttpInfo<RoutesV3GetEnrichmentResponse>) => apiResponse.data));
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param [limit] Number of results to return (default 100)
     * @param [offset] Number of results to skip (default 0)
     */
    public listEnrichmentsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsEnrichmentList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listEnrichments(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnrichmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param [limit] Number of results to return (default 100)
     * @param [offset] Number of results to skip (default 0)
     */
    public listEnrichments(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsEnrichmentList> {
        return this.listEnrichmentsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsEnrichmentList>) => apiResponse.data));
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param replaceEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public replaceEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, replaceEnrichmentRequest: ReplaceEnrichmentRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsEnrichment>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.replaceEnrichment(organizationId, enrichmentId, replaceEnrichmentRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceEnrichmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param replaceEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public replaceEnrichment(organizationId: string, enrichmentId: string, replaceEnrichmentRequest: ReplaceEnrichmentRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsEnrichment> {
        return this.replaceEnrichmentWithHttpInfo(organizationId, enrichmentId, replaceEnrichmentRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsEnrichment>) => apiResponse.data));
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param testEnrichmentConnectionRequest Enrichment configuration to test
     */
    public testEnrichmentConnectionWithHttpInfo(organizationId: string, testEnrichmentConnectionRequest: TestEnrichmentConnectionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3SuccessResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.testEnrichmentConnection(organizationId, testEnrichmentConnectionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testEnrichmentConnectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param testEnrichmentConnectionRequest Enrichment configuration to test
     */
    public testEnrichmentConnection(organizationId: string, testEnrichmentConnectionRequest: TestEnrichmentConnectionRequest, _options?: ConfigurationOptions): Observable<RoutesV3SuccessResponse> {
        return this.testEnrichmentConnectionWithHttpInfo(organizationId, testEnrichmentConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV3SuccessResponse>) => apiResponse.data));
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param updateEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public updateEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, updateEnrichmentRequest: UpdateEnrichmentRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsEnrichment>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEnrichment(organizationId, enrichmentId, updateEnrichmentRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEnrichmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param updateEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public updateEnrichment(organizationId: string, enrichmentId: string, updateEnrichmentRequest: UpdateEnrichmentRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsEnrichment> {
        return this.updateEnrichmentWithHttpInfo(organizationId, enrichmentId, updateEnrichmentRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsEnrichment>) => apiResponse.data));
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
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param createInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createInputWithHttpInfo(organizationId: string, createInputRequest: CreateInputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsInput>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createInput(organizationId, createInputRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param createInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createInput(organizationId: string, createInputRequest: CreateInputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsInput> {
        return this.createInputWithHttpInfo(organizationId, createInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public deleteOrganizationInputWithHttpInfo(organizationId: string, inputId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrganizationInput(organizationId, inputId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganizationInputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete input
     * Delete input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public deleteOrganizationInput(organizationId: string, inputId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteOrganizationInputWithHttpInfo(organizationId, inputId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get a configured input in organization
     * Get organization input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public getOrganizationInputWithHttpInfo(organizationId: string, inputId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesGetInputResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrganizationInput(organizationId, inputId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationInputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a configured input in organization
     * Get organization input
     * @param organizationId Organization ID
     * @param inputId Input ID
     */
    public getOrganizationInput(organizationId: string, inputId: string, _options?: ConfigurationOptions): Observable<RoutesGetInputResponse> {
        return this.getOrganizationInputWithHttpInfo(organizationId, inputId, _options).pipe(map((apiResponse: HttpInfo<RoutesGetInputResponse>) => apiResponse.data));
    }

    /**
     * List configured inputs in organization
     * List organization inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public listOrganizationInputsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsInputList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrganizationInputs(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationInputsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List configured inputs in organization
     * List organization inputs
     * @param organizationId Organization ID
     * @param [limit] Limit the number of organizations returned (default: DefaultLimit)
     * @param [offset] Offset the organizations returned (default: 0)
     */
    public listOrganizationInputs(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsInputList> {
        return this.listOrganizationInputsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsInputList>) => apiResponse.data));
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param replaceInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceInputWithHttpInfo(organizationId: string, inputId: string, replaceInputRequest: ReplaceInputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsInput>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.replaceInput(organizationId, inputId, replaceInputRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceInputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param replaceInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceInput(organizationId: string, inputId: string, replaceInputRequest: ReplaceInputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsInput> {
        return this.replaceInputWithHttpInfo(organizationId, inputId, replaceInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param testInputConnectionRequest Input configuration to test
     */
    public testInputConnectionWithHttpInfo(organizationId: string, testInputConnectionRequest: TestInputConnectionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2SuccessResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.testInputConnection(organizationId, testInputConnectionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInputConnectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param testInputConnectionRequest Input configuration to test
     */
    public testInputConnection(organizationId: string, testInputConnectionRequest: TestInputConnectionRequest, _options?: ConfigurationOptions): Observable<RoutesV2SuccessResponse> {
        return this.testInputConnectionWithHttpInfo(organizationId, testInputConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SuccessResponse>) => apiResponse.data));
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param updateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateInputWithHttpInfo(organizationId: string, inputId: string, updateInputRequest: UpdateInputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsInput>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateInput(organizationId, inputId, updateInputRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing input with new configuration including secrets handling
     * Update input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param updateInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateInput(organizationId: string, inputId: string, updateInputRequest: UpdateInputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsInput> {
        return this.updateInputWithHttpInfo(organizationId, inputId, updateInputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsInput>) => apiResponse.data));
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
    public inviteUserWithHttpInfo(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.inviteUser(organizationId, routesInviteUserToOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.inviteUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Invite user to organization
     * Invite user to organization
     * @param organizationId Organization ID
     * @param routesInviteUserToOrganizationRequest Request body for inviting a user to an organization
     */
    public inviteUser(organizationId: string, routesInviteUserToOrganizationRequest: RoutesInviteUserToOrganizationRequest, _options?: ConfigurationOptions): Observable<string> {
        return this.inviteUserWithHttpInfo(organizationId, routesInviteUserToOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param createOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createOutputWithHttpInfo(organizationId: string, createOutputRequest: CreateOutputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOutput>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOutput(organizationId, createOutputRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOutputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param createOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createOutput(organizationId: string, createOutputRequest: CreateOutputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsOutput> {
        return this.createOutputWithHttpInfo(organizationId, createOutputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public deleteOrganizationOutputWithHttpInfo(organizationId: string, outputId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrganizationOutput(organizationId, outputId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganizationOutputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete output
     * Delete output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public deleteOrganizationOutput(organizationId: string, outputId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteOrganizationOutputWithHttpInfo(organizationId, outputId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get a configured output in organization
     * Get a output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public getOrganizationOutputWithHttpInfo(organizationId: string, outputId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesGetOutputResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrganizationOutput(organizationId, outputId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationOutputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a configured output in organization
     * Get a output
     * @param organizationId Organization ID
     * @param outputId Output ID
     */
    public getOrganizationOutput(organizationId: string, outputId: string, _options?: ConfigurationOptions): Observable<RoutesGetOutputResponse> {
        return this.getOrganizationOutputWithHttpInfo(organizationId, outputId, _options).pipe(map((apiResponse: HttpInfo<RoutesGetOutputResponse>) => apiResponse.data));
    }

    /**
     * List outputs
     * List configured outputs in organization
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationOutputsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOutputList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrganizationOutputs(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationOutputsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List outputs
     * List configured outputs in organization
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationOutputs(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsOutputList> {
        return this.listOrganizationOutputsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsOutputList>) => apiResponse.data));
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param replaceOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceOutputWithHttpInfo(organizationId: string, outputId: string, replaceOutputRequest: ReplaceOutputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOutput>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.replaceOutput(organizationId, outputId, replaceOutputRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceOutputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param replaceOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceOutput(organizationId: string, outputId: string, replaceOutputRequest: ReplaceOutputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsOutput> {
        return this.replaceOutputWithHttpInfo(organizationId, outputId, replaceOutputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param testOutputConnectionRequest Output configuration to test
     */
    public testOutputConnectionWithHttpInfo(organizationId: string, testOutputConnectionRequest: TestOutputConnectionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2SuccessResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.testOutputConnection(organizationId, testOutputConnectionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testOutputConnectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param testOutputConnectionRequest Output configuration to test
     */
    public testOutputConnection(organizationId: string, testOutputConnectionRequest: TestOutputConnectionRequest, _options?: ConfigurationOptions): Observable<RoutesV2SuccessResponse> {
        return this.testOutputConnectionWithHttpInfo(organizationId, testOutputConnectionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SuccessResponse>) => apiResponse.data));
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param updateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateOutputWithHttpInfo(organizationId: string, outputId: string, updateOutputRequest: UpdateOutputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOutput>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOutput(organizationId, outputId, updateOutputRequest, testConnection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOutputWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing output with new configuration including secrets handling
     * Update output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param updateOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public updateOutput(organizationId: string, outputId: string, updateOutputRequest: UpdateOutputRequest, testConnection?: boolean, _options?: ConfigurationOptions): Observable<ModelsOutput> {
        return this.updateOutputWithHttpInfo(organizationId, outputId, updateOutputRequest, testConnection, _options).pipe(map((apiResponse: HttpInfo<ModelsOutput>) => apiResponse.data));
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
    public getQuotasByOrganizationIDWithHttpInfo(organizationId: string, limit?: number, offset?: number, body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsQuotaList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getQuotasByOrganizationID(organizationId, limit, offset, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuotasByOrganizationIDWithHttpInfo(rsp)));
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
    public getQuotasByOrganizationID(organizationId: string, limit?: number, offset?: number, body?: any, _options?: ConfigurationOptions): Observable<ModelsQuotaList> {
        return this.getQuotasByOrganizationIDWithHttpInfo(organizationId, limit, offset, body, _options).pipe(map((apiResponse: HttpInfo<ModelsQuotaList>) => apiResponse.data));
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
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param createTransformRequest Request body for creating a transform
     */
    public createTransformWithHttpInfo(organizationId: string, createTransformRequest: CreateTransformRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsTransform>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTransform(organizationId, createTransformRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransformWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param createTransformRequest Request body for creating a transform
     */
    public createTransform(organizationId: string, createTransformRequest: CreateTransformRequest, _options?: ConfigurationOptions): Observable<ModelsTransform> {
        return this.createTransformWithHttpInfo(organizationId, createTransformRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsTransform>) => apiResponse.data));
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public deleteOrganizationTransformWithHttpInfo(organizationId: string, transformId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrganizationTransform(organizationId, transformId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganizationTransformWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete transform
     * Delete transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     */
    public deleteOrganizationTransform(organizationId: string, transformId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteOrganizationTransformWithHttpInfo(organizationId, transformId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public getOrganizationTransformWithHttpInfo(transformId: string, organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesGetTransformResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrganizationTransform(transformId, organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationTransformWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transform
     * Get transform
     * @param transformId Transform ID
     * @param organizationId Organization ID
     */
    public getOrganizationTransform(transformId: string, organizationId: string, _options?: ConfigurationOptions): Observable<RoutesGetTransformResponse> {
        return this.getOrganizationTransformWithHttpInfo(transformId, organizationId, _options).pipe(map((apiResponse: HttpInfo<RoutesGetTransformResponse>) => apiResponse.data));
    }

    /**
     * List transforms
     * List configured transforms in a transform
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationTransformsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsTransformList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrganizationTransforms(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationTransformsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transforms
     * List configured transforms in a transform
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listOrganizationTransforms(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsTransformList> {
        return this.listOrganizationTransformsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsTransformList>) => apiResponse.data));
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public updateOrganizationTransformWithHttpInfo(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsTransform>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrganizationTransform(organizationId, transformId, routesUpdateTransformRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrganizationTransformWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update transform
     * Update transform
     * @param organizationId Organization ID
     * @param transformId Transform ID
     * @param routesUpdateTransformRequest Request body for updating a transform
     */
    public updateOrganizationTransform(organizationId: string, transformId: string, routesUpdateTransformRequest: RoutesUpdateTransformRequest, _options?: ConfigurationOptions): Observable<ModelsTransform> {
        return this.updateOrganizationTransformWithHttpInfo(organizationId, transformId, routesUpdateTransformRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsTransform>) => apiResponse.data));
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
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public addUserWithHttpInfo(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOrganizationUser>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addUser(organizationId, routesAddUserToOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add user to organization
     * Add user to organization
     * @param organizationId organization ID
     * @param routesAddUserToOrganizationRequest Request body for adding a user to an organization
     */
    public addUser(organizationId: string, routesAddUserToOrganizationRequest: RoutesAddUserToOrganizationRequest, _options?: ConfigurationOptions): Observable<ModelsOrganizationUser> {
        return this.addUserWithHttpInfo(organizationId, routesAddUserToOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationUser>) => apiResponse.data));
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listUsersWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOrganizationUserList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUsers(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List organization users
     * List organization users
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listUsers(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsOrganizationUserList> {
        return this.listUsersWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationUserList>) => apiResponse.data));
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param userAuthProviderId User Auth Provider ID
     */
    public removeUserWithHttpInfo(organizationId: string, userId: string, userAuthProviderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeUser(organizationId, userId, userAuthProviderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param userAuthProviderId User Auth Provider ID
     */
    public removeUser(organizationId: string, userId: string, userAuthProviderId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.removeUserWithHttpInfo(organizationId, userId, userAuthProviderId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public updateUserWithHttpInfo(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOrganizationUser>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateUser(organizationId, userId, routesUpdateUserInOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update user in organization
     * Update user in organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param routesUpdateUserInOrganizationRequest Request body for updating a user in an organization
     */
    public updateUser(organizationId: string, userId: string, routesUpdateUserInOrganizationRequest: RoutesUpdateUserInOrganizationRequest, _options?: ConfigurationOptions): Observable<ModelsOrganizationUser> {
        return this.updateUserWithHttpInfo(organizationId, userId, routesUpdateUserInOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationUser>) => apiResponse.data));
    }

    /**
     * Leave organization (self-service removal)
     * Leave organization
     * @param organizationId Organization ID
     */
    public v1OrganizationIdUsersLeavePostWithHttpInfo(organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v1OrganizationIdUsersLeavePost(organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrganizationIdUsersLeavePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Leave organization (self-service removal)
     * Leave organization
     * @param organizationId Organization ID
     */
    public v1OrganizationIdUsersLeavePost(organizationId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.v1OrganizationIdUsersLeavePostWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
     * Create a new child organization under the given parent organization. Known as a \"team\" in the UI.
     * Create child organization (team)
     * @param organizationId Parent Organization ID
     * @param createChildOrganizationRequest Request body
     */
    public createChildOrganizationWithHttpInfo(organizationId: string, createChildOrganizationRequest: CreateChildOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createChildOrganization(organizationId, createChildOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createChildOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new child organization under the given parent organization. Known as a \"team\" in the UI.
     * Create child organization (team)
     * @param organizationId Parent Organization ID
     * @param createChildOrganizationRequest Request body
     */
    public createChildOrganization(organizationId: string, createChildOrganizationRequest: CreateChildOrganizationRequest, _options?: ConfigurationOptions): Observable<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.createChildOrganizationWithHttpInfo(organizationId, createChildOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>) => apiResponse.data));
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public createOrganizationWithHttpInfo(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrganization(routesCreateOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public createOrganization(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: ConfigurationOptions): Observable<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.createOrganizationWithHttpInfo(routesCreateOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>) => apiResponse.data));
    }

    /**
     * Delete a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Delete child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     */
    public deleteChildOrganizationWithHttpInfo(organizationId: string, childOrganizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteChildOrganization(organizationId, childOrganizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteChildOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Delete child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     */
    public deleteChildOrganization(organizationId: string, childOrganizationId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteChildOrganizationWithHttpInfo(organizationId, childOrganizationId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public deleteOrganizationWithHttpInfo(organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrganization(organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete organization
     * Delete organization
     * @param organizationId Organization ID
     */
    public deleteOrganization(organizationId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteOrganizationWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
    public getStorageTypeSummaryByTypeWithHttpInfo(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStorageTypeSummaryByType(organizationId, storageType, start, end, billingType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStorageTypeSummaryByTypeWithHttpInfo(rsp)));
            }));
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
    public getStorageTypeSummaryByType(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<ModelsStorageTypeSummaryResponse> {
        return this.getStorageTypeSummaryByTypeWithHttpInfo(organizationId, storageType, start, end, billingType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsStorageTypeSummaryResponse>) => apiResponse.data));
    }

    /**
     * List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.
     * List child organizations (teams)
     * @param organizationId Parent Organization ID
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     * @param [nameSearch] If provided, only return organizations with names that contain the search string
     */
    public listChildOrganizationsWithHttpInfo(organizationId: string, limit?: number, offset?: number, nameSearch?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsUserOrganizationList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listChildOrganizations(organizationId, limit, offset, nameSearch, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listChildOrganizationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.
     * List child organizations (teams)
     * @param organizationId Parent Organization ID
     * @param [limit] Limit the number of organizations returned (default: 10)
     * @param [offset] Offset the organizations returned (default: 0)
     * @param [nameSearch] If provided, only return organizations with names that contain the search string
     */
    public listChildOrganizations(organizationId: string, limit?: number, offset?: number, nameSearch?: string, _options?: ConfigurationOptions): Observable<ModelsUserOrganizationList> {
        return this.listChildOrganizationsWithHttpInfo(organizationId, limit, offset, nameSearch, _options).pipe(map((apiResponse: HttpInfo<ModelsUserOrganizationList>) => apiResponse.data));
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
    public listUserOrganizationsWithHttpInfo(limit?: number, offset?: number, noChildren?: boolean, parentOrganizationId?: string, nameSearch?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsOrganizationList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUserOrganizations(limit, offset, noChildren, parentOrganizationId, nameSearch, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUserOrganizationsWithHttpInfo(rsp)));
            }));
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
    public listUserOrganizations(limit?: number, offset?: number, noChildren?: boolean, parentOrganizationId?: string, nameSearch?: string, _options?: ConfigurationOptions): Observable<ModelsOrganizationList> {
        return this.listUserOrganizationsWithHttpInfo(limit, offset, noChildren, parentOrganizationId, nameSearch, _options).pipe(map((apiResponse: HttpInfo<ModelsOrganizationList>) => apiResponse.data));
    }

    /**
     * Update a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Update child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     * @param updateChildOrganizationRequest Request body
     */
    public updateChildOrganizationWithHttpInfo(organizationId: string, childOrganizationId: string, updateChildOrganizationRequest: UpdateChildOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateChildOrganization(organizationId, childOrganizationId, updateChildOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateChildOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a child organization under the given parent organization. Known as a \"team\" in the UI.
     * Update child organization (team)
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     * @param updateChildOrganizationRequest Request body
     */
    public updateChildOrganization(organizationId: string, childOrganizationId: string, updateChildOrganizationRequest: UpdateChildOrganizationRequest, _options?: ConfigurationOptions): Observable<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.updateChildOrganizationWithHttpInfo(organizationId, childOrganizationId, updateChildOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>) => apiResponse.data));
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public updateOrganizationWithHttpInfo(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrganization(organizationId, routesUpdateOrganizationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update organization
     * Update organization
     * @param organizationId Organization ID
     * @param routesUpdateOrganizationRequest Request body for updating an organization
     */
    public updateOrganization(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: ConfigurationOptions): Observable<GithubComMonadIncCorePkgTypesModelsOrganization> {
        return this.updateOrganizationWithHttpInfo(organizationId, routesUpdateOrganizationRequest, _options).pipe(map((apiResponse: HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>) => apiResponse.data));
    }

}

import { OrganizationsMetricsApiRequestFactory, OrganizationsMetricsApiResponseProcessor} from "../apis/OrganizationsMetricsApi";
export class ObservableOrganizationsMetricsApi {
    private requestFactory: OrganizationsMetricsApiRequestFactory;
    private responseProcessor: OrganizationsMetricsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsMetricsApiRequestFactory,
        responseProcessor?: OrganizationsMetricsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationsMetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationsMetricsApiResponseProcessor();
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
    public getOrganizationMetricsWithHttpInfo(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineMetrics>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrganizationMetrics(organizationId, metric, start, end, resolution, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationMetricsWithHttpInfo(rsp)));
            }));
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
    public getOrganizationMetrics(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<ModelsPipelineMetrics> {
        return this.getOrganizationMetricsWithHttpInfo(organizationId, metric, start, end, resolution, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineMetrics>) => apiResponse.data));
    }

}

import { OrganizationsStorageCostApiRequestFactory, OrganizationsStorageCostApiResponseProcessor} from "../apis/OrganizationsStorageCostApi";
export class ObservableOrganizationsStorageCostApi {
    private requestFactory: OrganizationsStorageCostApiRequestFactory;
    private responseProcessor: OrganizationsStorageCostApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsStorageCostApiRequestFactory,
        responseProcessor?: OrganizationsStorageCostApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationsStorageCostApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationsStorageCostApiResponseProcessor();
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param organizationId Organization ID
     */
    public getStorageTypeCostWithHttpInfo(organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsStorageTypeCostConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStorageTypeCost(organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStorageTypeCostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param organizationId Organization ID
     */
    public getStorageTypeCost(organizationId: string, _options?: ConfigurationOptions): Observable<ModelsStorageTypeCostConfig> {
        return this.getStorageTypeCostWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<ModelsStorageTypeCostConfig>) => apiResponse.data));
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
    public getStorageTypeDetailsWithHttpInfo(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStorageTypeDetails(organizationId, start, end, billingType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStorageTypeDetailsWithHttpInfo(rsp)));
            }));
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
    public getStorageTypeDetails(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<RoutesV2StorageTypeDetailsResponse> {
        return this.getStorageTypeDetailsWithHttpInfo(organizationId, start, end, billingType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<RoutesV2StorageTypeDetailsResponse>) => apiResponse.data));
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
    public getStorageTypeMetricsWithHttpInfo(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsStorageTypeTimeSeriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStorageTypeMetrics(organizationId, metric, start, end, resolution, billingType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStorageTypeMetricsWithHttpInfo(rsp)));
            }));
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
    public getStorageTypeMetrics(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<ModelsStorageTypeTimeSeriesResponse> {
        return this.getStorageTypeMetricsWithHttpInfo(organizationId, metric, start, end, resolution, billingType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsStorageTypeTimeSeriesResponse>) => apiResponse.data));
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
    public getStorageTypeSummaryWithHttpInfo(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getStorageTypeSummary(organizationId, start, end, billingType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStorageTypeSummaryWithHttpInfo(rsp)));
            }));
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
    public getStorageTypeSummary(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<ModelsStorageTypeSummaryResponse> {
        return this.getStorageTypeSummaryWithHttpInfo(organizationId, start, end, billingType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsStorageTypeSummaryResponse>) => apiResponse.data));
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param setStorageTypeCostRequest Cost configuration
     */
    public setStorageTypeCostWithHttpInfo(organizationId: string, setStorageTypeCostRequest: SetStorageTypeCostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsStorageTypeCostConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setStorageTypeCost(organizationId, setStorageTypeCostRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setStorageTypeCostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param setStorageTypeCostRequest Cost configuration
     */
    public setStorageTypeCost(organizationId: string, setStorageTypeCostRequest: SetStorageTypeCostRequest, _options?: ConfigurationOptions): Observable<ModelsStorageTypeCostConfig> {
        return this.setStorageTypeCostWithHttpInfo(organizationId, setStorageTypeCostRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsStorageTypeCostConfig>) => apiResponse.data));
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
    public v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(organizationId, storageType, start, end, billingType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(rsp)));
            }));
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
    public v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: ConfigurationOptions): Observable<RoutesV2StorageTypeDetailsResponse> {
        return this.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetWithHttpInfo(organizationId, storageType, start, end, billingType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<RoutesV2StorageTypeDetailsResponse>) => apiResponse.data));
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
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public getOutputTypeMetaWithHttpInfo(outputTypeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsConnectorMeta>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOutputTypeMeta(outputTypeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOutputTypeMetaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get output config meta
     * Get output config meta
     * @param outputTypeId Output type ID
     */
    public getOutputTypeMeta(outputTypeId: string, _options?: ConfigurationOptions): Observable<ModelsConnectorMeta> {
        return this.getOutputTypeMetaWithHttpInfo(outputTypeId, _options).pipe(map((apiResponse: HttpInfo<ModelsConnectorMeta>) => apiResponse.data));
    }

    /**
     * List outputs
     * List outputs
     */
    public listOutputTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<OutputsConnectorMeta>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOutputTypes(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOutputTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List outputs
     * List outputs
     */
    public listOutputTypes(_options?: ConfigurationOptions): Observable<Array<OutputsConnectorMeta>> {
        return this.listOutputTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<OutputsConnectorMeta>>) => apiResponse.data));
    }

}

import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";
export class ObservablePermissionsApi {
    private requestFactory: PermissionsApiRequestFactory;
    private responseProcessor: PermissionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionsApiRequestFactory,
        responseProcessor?: PermissionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PermissionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PermissionsApiResponseProcessor();
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param organizationId Organization ID
     * @param [limit] Limit the number of permissions returned (default: 10)
     * @param [offset] Offset the permissions returned (default: 0)
     */
    public listPermissionsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPermissionList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPermissions(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all available permissions in the system
     * List permissions
     * @param organizationId Organization ID
     * @param [limit] Limit the number of permissions returned (default: 10)
     * @param [offset] Offset the permissions returned (default: 0)
     */
    public listPermissions(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsPermissionList> {
        return this.listPermissionsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsPermissionList>) => apiResponse.data));
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
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param createPipelineRequest Request body for creating a pipeline
     */
    public createPipelineWithHttpInfo(organizationId: string, createPipelineRequest: CreatePipelineRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineConfigV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPipeline(organizationId, createPipelineRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPipelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param createPipelineRequest Request body for creating a pipeline
     */
    public createPipeline(organizationId: string, createPipelineRequest: CreatePipelineRequest, _options?: ConfigurationOptions): Observable<ModelsPipelineConfigV2> {
        return this.createPipelineWithHttpInfo(organizationId, createPipelineRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineConfigV2>) => apiResponse.data));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePipeline(organizationId, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePipelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipeline(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deletePipelineWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipelineV1WithHttpInfo(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePipelineV1(organizationId, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePipelineV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete pipeline
     * Delete pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public deletePipelineV1(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deletePipelineV1WithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Force an edge in learning mode to immediately graduate to detection mode
     * Force graduate schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public forceGraduateSchemaStateWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.forceGraduateSchemaState(organizationId, pipelineId, edgeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.forceGraduateSchemaStateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Force an edge in learning mode to immediately graduate to detection mode
     * Force graduate schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public forceGraduateSchemaState(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.forceGraduateSchemaStateWithHttpInfo(organizationId, pipelineId, edgeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param [resolution] Resolution for metrics (default: 5m)
     */
    public getMetricsForPipelinesWithHttpInfo(organizationId: string, pipelineIds: string, resolution?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2MetricsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMetricsForPipelines(organizationId, pipelineIds, resolution, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMetricsForPipelinesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get aggregated ingress and egress metrics for specific pipelines
     * Get metrics for specific pipelines
     * @param organizationId Organization ID
     * @param pipelineIds Comma-separated list of pipeline IDs
     * @param [resolution] Resolution for metrics (default: 5m)
     */
    public getMetricsForPipelines(organizationId: string, pipelineIds: string, resolution?: string, _options?: ConfigurationOptions): Observable<RoutesV2MetricsResponse> {
        return this.getMetricsForPipelinesWithHttpInfo(organizationId, pipelineIds, resolution, _options).pipe(map((apiResponse: HttpInfo<RoutesV2MetricsResponse>) => apiResponse.data));
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getOrganizationSummaryWithHttpInfo(organizationId: string, start?: string, end?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2GetOrganizationSummaryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrganizationSummary(organizationId, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get status of all pipelines for an organization
     * Get status of all pipelines for an organization
     * @param organizationId Organization ID
     * @param [start] ISO3339 start time, default 24 hours ago
     * @param [end] ISO3339 end time, default now
     */
    public getOrganizationSummary(organizationId: string, start?: string, end?: string, _options?: ConfigurationOptions): Observable<RoutesV2GetOrganizationSummaryResponse> {
        return this.getOrganizationSummaryWithHttpInfo(organizationId, start, end, _options).pipe(map((apiResponse: HttpInfo<RoutesV2GetOrganizationSummaryResponse>) => apiResponse.data));
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public getPipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipeline>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipeline(organizationId, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get pipeline
     * Get pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public getPipeline(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<ModelsPipeline> {
        return this.getPipelineWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsPipeline>) => apiResponse.data));
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public getPipelineConfigWithHttpInfo(organizationId: string, pipelineId: string, includeStatus?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineConfigV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineConfig(organizationId, pipelineId, includeStatus, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific pipeline configuration by pipeline ID
     * Get pipeline configuration
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public getPipelineConfig(organizationId: string, pipelineId: string, includeStatus?: boolean, _options?: ConfigurationOptions): Observable<ModelsPipelineConfigV2> {
        return this.getPipelineConfigWithHttpInfo(organizationId, pipelineId, includeStatus, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineConfigV2>) => apiResponse.data));
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     */
    public getPipelineEdgeConditionOperatorTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineEdgeConditionOperatorTypes(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineEdgeConditionOperatorTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     */
    public getPipelineEdgeConditionOperatorTypes(_options?: ConfigurationOptions): Observable<string> {
        return this.getPipelineEdgeConditionOperatorTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     */
    public getPipelineEdgeConditionRulesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineEdgeConditionRules(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineEdgeConditionRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     */
    public getPipelineEdgeConditionRules(_options?: ConfigurationOptions): Observable<string> {
        return this.getPipelineEdgeConditionRulesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
    public getPipelineMetricsWithHttpInfo(organizationId: string, pipelineId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineMetrics>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineMetrics(organizationId, pipelineId, metric, start, end, resolution, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineMetricsWithHttpInfo(rsp)));
            }));
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
    public getPipelineMetrics(organizationId: string, pipelineId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<ModelsPipelineMetrics> {
        return this.getPipelineMetricsWithHttpInfo(organizationId, pipelineId, metric, start, end, resolution, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineMetrics>) => apiResponse.data));
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
    public getPipelineNodeMetricsWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineMetrics>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineNodeMetrics(organizationId, pipelineId, nodeId, metric, start, end, resolution, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineNodeMetricsWithHttpInfo(rsp)));
            }));
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
    public getPipelineNodeMetrics(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<ModelsPipelineMetrics> {
        return this.getPipelineNodeMetricsWithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineMetrics>) => apiResponse.data));
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
    public getPipelineNodeMetricsV2WithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineMetrics>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineNodeMetricsV2(organizationId, pipelineId, nodeId, metric, start, end, resolution, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineNodeMetricsV2WithHttpInfo(rsp)));
            }));
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
    public getPipelineNodeMetricsV2(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: ConfigurationOptions): Observable<ModelsPipelineMetrics> {
        return this.getPipelineNodeMetricsV2WithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineMetrics>) => apiResponse.data));
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
    public getPipelineNodeStatusWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineNodeStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineNodeStatus(organizationId, pipelineId, nodeId, metrics, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineNodeStatusWithHttpInfo(rsp)));
            }));
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
    public getPipelineNodeStatus(organizationId: string, pipelineId: string, nodeId: string, metrics?: Array<string>, start?: string, end?: string, _options?: ConfigurationOptions): Observable<ModelsPipelineNodeStatus> {
        return this.getPipelineNodeStatusWithHttpInfo(organizationId, pipelineId, nodeId, metrics, start, end, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineNodeStatus>) => apiResponse.data));
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
    public getPipelineStatusWithHttpInfo(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelineStatus(organizationId, pipelineId, metrics, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelineStatusWithHttpInfo(rsp)));
            }));
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
    public getPipelineStatus(organizationId: string, pipelineId: string, metrics?: Array<string>, start?: string, end?: string, _options?: ConfigurationOptions): Observable<ModelsPipelineStatus> {
        return this.getPipelineStatusWithHttpInfo(organizationId, pipelineId, metrics, start, end, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineStatus>) => apiResponse.data));
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
    public getPipelinesStatusesWithHttpInfo(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<RoutesV2PipelineWithStatus>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPipelinesStatuses(organizationId, limit, offset, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPipelinesStatusesWithHttpInfo(rsp)));
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
    public getPipelinesStatuses(organizationId: string, limit?: number, offset?: number, start?: string, end?: string, _options?: ConfigurationOptions): Observable<Array<RoutesV2PipelineWithStatus>> {
        return this.getPipelinesStatusesWithHttpInfo(organizationId, limit, offset, start, end, _options).pipe(map((apiResponse: HttpInfo<Array<RoutesV2PipelineWithStatus>>) => apiResponse.data));
    }

    /**
     * Get the current schema state for a pipeline edge
     * Get schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public getSchemaStateWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3SchemaStateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSchemaState(organizationId, pipelineId, edgeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchemaStateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the current schema state for a pipeline edge
     * Get schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public getSchemaState(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<RoutesV3SchemaStateResponse> {
        return this.getSchemaStateWithHttpInfo(organizationId, pipelineId, edgeId, _options).pipe(map((apiResponse: HttpInfo<RoutesV3SchemaStateResponse>) => apiResponse.data));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public listPipelinesWithHttpInfo(organizationId: string, limit?: number, offset?: number, includeStatus?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPipelines(organizationId, limit, offset, includeStatus, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPipelinesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     * @param [includeStatus] Include the status of the pipeline nodes
     */
    public listPipelines(organizationId: string, limit?: number, offset?: number, includeStatus?: boolean, _options?: ConfigurationOptions): Observable<ModelsPipelineList> {
        return this.listPipelinesWithHttpInfo(organizationId, limit, offset, includeStatus, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineList>) => apiResponse.data));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listPipelinesV1WithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPipelinesV1(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPipelinesV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * List pipelines
     * List pipelines
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public listPipelinesV1(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsPipelineList> {
        return this.listPipelinesV1WithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineList>) => apiResponse.data));
    }

    /**
     * List schema drift events for a pipeline edge
     * List schema history
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public listSchemaHistoryWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<RoutesV3SchemaHistoryEntryResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSchemaHistory(organizationId, pipelineId, edgeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSchemaHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * List schema drift events for a pipeline edge
     * List schema history
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public listSchemaHistory(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<Array<RoutesV3SchemaHistoryEntryResponse>> {
        return this.listSchemaHistoryWithHttpInfo(organizationId, pipelineId, edgeId, _options).pipe(map((apiResponse: HttpInfo<Array<RoutesV3SchemaHistoryEntryResponse>>) => apiResponse.data));
    }

    /**
     * Purge all messages from a pipeline\'s NATS stream
     * Purge pipeline data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public purgePipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelinePurgeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.purgePipeline(organizationId, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purgePipelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Purge all messages from a pipeline\'s NATS stream
     * Purge pipeline data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public purgePipeline(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<ModelsPipelinePurgeResponse> {
        return this.purgePipelineWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelinePurgeResponse>) => apiResponse.data));
    }

    /**
     * Purge messages destined for a specific pipeline node
     * Purge pipeline node data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     */
    public purgePipelineNodeWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelinePurgeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.purgePipelineNode(organizationId, pipelineId, nodeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purgePipelineNodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Purge messages destined for a specific pipeline node
     * Purge pipeline node data
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param nodeId Node ID
     */
    public purgePipelineNode(organizationId: string, pipelineId: string, nodeId: string, _options?: ConfigurationOptions): Observable<ModelsPipelinePurgeResponse> {
        return this.purgePipelineNodeWithHttpInfo(organizationId, pipelineId, nodeId, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelinePurgeResponse>) => apiResponse.data));
    }

    /**
     * Delete the current schema state for an edge and signal the sidecar to restart in learning mode
     * Reset schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public resetSchemaStateWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.resetSchemaState(organizationId, pipelineId, edgeId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetSchemaStateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the current schema state for an edge and signal the sidecar to restart in learning mode
     * Reset schema state
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     */
    public resetSchemaState(organizationId: string, pipelineId: string, edgeId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.resetSchemaStateWithHttpInfo(organizationId, pipelineId, edgeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public triggerPipelineWithHttpInfo(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.triggerPipeline(organizationId, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.triggerPipelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public triggerPipeline(organizationId: string, pipelineId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.triggerPipelineWithHttpInfo(organizationId, pipelineId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineRequest Request body for updating a pipeline
     */
    public updatePipelineWithHttpInfo(organizationId: string, pipelineId: string, updatePipelineRequest: UpdatePipelineRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipelineConfigV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePipeline(organizationId, pipelineId, updatePipelineRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePipelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineRequest Request body for updating a pipeline
     */
    public updatePipeline(organizationId: string, pipelineId: string, updatePipelineRequest: UpdatePipelineRequest, _options?: ConfigurationOptions): Observable<ModelsPipelineConfigV2> {
        return this.updatePipelineWithHttpInfo(organizationId, pipelineId, updatePipelineRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsPipelineConfigV2>) => apiResponse.data));
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     * @param updatePipelineEdgeRequest Request body
     */
    public updatePipelineEdgeWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, updatePipelineEdgeRequest: UpdatePipelineEdgeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePipelineEdge(organizationId, pipelineId, edgeId, updatePipelineEdgeRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePipelineEdgeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     * @param updatePipelineEdgeRequest Request body
     */
    public updatePipelineEdge(organizationId: string, pipelineId: string, edgeId: string, updatePipelineEdgeRequest: UpdatePipelineEdgeRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.updatePipelineEdgeWithHttpInfo(organizationId, pipelineId, edgeId, updatePipelineEdgeRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineV1Request Request body for updating a pipeline
     */
    public updatePipelineV1WithHttpInfo(organizationId: string, pipelineId: string, updatePipelineV1Request: UpdatePipelineV1Request, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsPipeline>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePipelineV1(organizationId, pipelineId, updatePipelineV1Request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePipelineV1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param updatePipelineV1Request Request body for updating a pipeline
     */
    public updatePipelineV1(organizationId: string, pipelineId: string, updatePipelineV1Request: UpdatePipelineV1Request, _options?: ConfigurationOptions): Observable<ModelsPipeline> {
        return this.updatePipelineV1WithHttpInfo(organizationId, pipelineId, updatePipelineV1Request, _options).pipe(map((apiResponse: HttpInfo<ModelsPipeline>) => apiResponse.data));
    }

}

import { QuotasApiRequestFactory, QuotasApiResponseProcessor} from "../apis/QuotasApi";
export class ObservableQuotasApi {
    private requestFactory: QuotasApiRequestFactory;
    private responseProcessor: QuotasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QuotasApiRequestFactory,
        responseProcessor?: QuotasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QuotasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QuotasApiResponseProcessor();
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
    public listQuotasWithHttpInfo(billingAccountId?: string, organizationId?: string, limit?: number, offset?: number, body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsQuotaList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listQuotas(billingAccountId, organizationId, limit, offset, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listQuotasWithHttpInfo(rsp)));
            }));
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
    public listQuotas(billingAccountId?: string, organizationId?: string, limit?: number, offset?: number, body?: any, _options?: ConfigurationOptions): Observable<ModelsQuotaList> {
        return this.listQuotasWithHttpInfo(billingAccountId, organizationId, limit, offset, body, _options).pipe(map((apiResponse: HttpInfo<ModelsQuotaList>) => apiResponse.data));
    }

}

import { ResourceSharesApiRequestFactory, ResourceSharesApiResponseProcessor} from "../apis/ResourceSharesApi";
export class ObservableResourceSharesApi {
    private requestFactory: ResourceSharesApiRequestFactory;
    private responseProcessor: ResourceSharesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ResourceSharesApiRequestFactory,
        responseProcessor?: ResourceSharesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ResourceSharesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ResourceSharesApiResponseProcessor();
    }

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share request
     */
    public createResourceSharesWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsResourceShareChangeSet>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createResourceSharesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.
     * Share a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share request
     */
    public createResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: ConfigurationOptions): Observable<ModelsResourceShareChangeSet> {
        return this.createResourceSharesWithHttpInfo(organizationId, resourceType, resourceId, createResourceSharesRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsResourceShareChangeSet>) => apiResponse.data));
    }

    /**
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public listResourceSharesWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsResourceShareWithUsageList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listResourceShares(organizationId, resourceType, resourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listResourceSharesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.
     * List a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public listResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: ConfigurationOptions): Observable<ModelsResourceShareWithUsageList> {
        return this.listResourceSharesWithHttpInfo(organizationId, resourceType, resourceId, _options).pipe(map((apiResponse: HttpInfo<ModelsResourceShareWithUsageList>) => apiResponse.data));
    }

    /**
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param organizationId Owner organization ID
     * @param [limit] Page size (default: 10)
     * @param [offset] Offset (default: 0)
     * @param [resourceType] Filter by resource type
     */
    public listSharedResourcesWithHttpInfo(organizationId: string, limit?: number, offset?: number, resourceType?: 'secret' | 'component', _options?: ConfigurationOptions): Observable<HttpInfo<ModelsSharedResourceList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSharedResources(organizationId, limit, offset, resourceType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSharedResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.
     * List shared resources
     * @param organizationId Owner organization ID
     * @param [limit] Page size (default: 10)
     * @param [offset] Offset (default: 0)
     * @param [resourceType] Filter by resource type
     */
    public listSharedResources(organizationId: string, limit?: number, offset?: number, resourceType?: 'secret' | 'component', _options?: ConfigurationOptions): Observable<ModelsSharedResourceList> {
        return this.listSharedResourcesWithHttpInfo(organizationId, limit, offset, resourceType, _options).pipe(map((apiResponse: HttpInfo<ModelsSharedResourceList>) => apiResponse.data));
    }

    /**
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public unshareResourceWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsResourceShareChangeSet>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.unshareResource(organizationId, resourceType, resourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unshareResourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.
     * Unshare a resource
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     */
    public unshareResource(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, _options?: ConfigurationOptions): Observable<ModelsResourceShareChangeSet> {
        return this.unshareResourceWithHttpInfo(organizationId, resourceType, resourceId, _options).pipe(map((apiResponse: HttpInfo<ModelsResourceShareChangeSet>) => apiResponse.data));
    }

    /**
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a share that the target organization is actively using is rejected with 409.
     * Update a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share delta request
     */
    public updateResourceSharesWithHttpInfo(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsResourceShareChangeSet>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateResourceSharesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a share that the target organization is actively using is rejected with 409.
     * Update a resource\'s shares
     * @param organizationId Owner organization ID
     * @param resourceType Resource type
     * @param resourceId Resource ID
     * @param createResourceSharesRequest Share delta request
     */
    public updateResourceShares(organizationId: string, resourceType: 'secret' | 'component', resourceId: string, createResourceSharesRequest: CreateResourceSharesRequest, _options?: ConfigurationOptions): Observable<ModelsResourceShareChangeSet> {
        return this.updateResourceSharesWithHttpInfo(organizationId, resourceType, resourceId, createResourceSharesRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsResourceShareChangeSet>) => apiResponse.data));
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
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param createRoleRequest Request body for creating a role
     */
    public createRoleWithHttpInfo(organizationId: string, createRoleRequest: CreateRoleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsRoleWithPermissions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRole(organizationId, createRoleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param createRoleRequest Request body for creating a role
     */
    public createRole(organizationId: string, createRoleRequest: CreateRoleRequest, _options?: ConfigurationOptions): Observable<ModelsRoleWithPermissions> {
        return this.createRoleWithHttpInfo(organizationId, createRoleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsRoleWithPermissions>) => apiResponse.data));
    }

    /**
     * Delete a role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public deleteRoleWithHttpInfo(organizationId: string, roleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRole(organizationId, roleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a role
     * Delete role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public deleteRole(organizationId: string, roleId: string, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteRoleWithHttpInfo(organizationId, roleId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public getRoleWithHttpInfo(organizationId: string, roleId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsRoleWithPermissions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRole(organizationId, roleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a role with its associated permissions
     * Get role
     * @param organizationId Organization ID
     * @param roleId Role ID
     */
    public getRole(organizationId: string, roleId: string, _options?: ConfigurationOptions): Observable<ModelsRoleWithPermissions> {
        return this.getRoleWithHttpInfo(organizationId, roleId, _options).pipe(map((apiResponse: HttpInfo<ModelsRoleWithPermissions>) => apiResponse.data));
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public listRolesWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsRoleWithPermissionsList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRoles(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List roles with their associated permissions
     * List roles
     * @param organizationId Organization ID
     * @param [limit] Limit the number of roles returned (default: 10)
     * @param [offset] Offset the roles returned (default: 0)
     */
    public listRoles(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsRoleWithPermissionsList> {
        return this.listRolesWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsRoleWithPermissionsList>) => apiResponse.data));
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param updateRoleRequest Request body for updating a role
     */
    public updateRoleWithHttpInfo(organizationId: string, roleId: string, updateRoleRequest: UpdateRoleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsRoleWithPermissions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRole(organizationId, roleId, updateRoleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param updateRoleRequest Request body for updating a role
     */
    public updateRole(organizationId: string, roleId: string, updateRoleRequest: UpdateRoleRequest, _options?: ConfigurationOptions): Observable<ModelsRoleWithPermissions> {
        return this.updateRoleWithHttpInfo(organizationId, roleId, updateRoleRequest, _options).pipe(map((apiResponse: HttpInfo<ModelsRoleWithPermissions>) => apiResponse.data));
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
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param createSecretRequest Secret to create
     */
    public createSecretWithHttpInfo(organizationId: string, createSecretRequest: CreateSecretRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2SecretResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSecret(organizationId, createSecretRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSecretWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param createSecretRequest Secret to create
     */
    public createSecret(organizationId: string, createSecretRequest: CreateSecretRequest, _options?: ConfigurationOptions): Observable<RoutesV2SecretResponse> {
        return this.createSecretWithHttpInfo(organizationId, createSecretRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SecretResponse>) => apiResponse.data));
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public deleteSecretWithHttpInfo(organizationId: string, secretId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSecret(organizationId, secretId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSecretWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific secret by ID
     * Delete secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public deleteSecret(organizationId: string, secretId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSecretWithHttpInfo(organizationId, secretId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public getSecretWithHttpInfo(organizationId: string, secretId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsSecretWithComponents>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSecret(organizationId, secretId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecretWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a specific secret by ID including inputs and outputs that use it
     * Get secret with components
     * @param organizationId Organization ID
     * @param secretId Secret ID
     */
    public getSecret(organizationId: string, secretId: string, _options?: ConfigurationOptions): Observable<ModelsSecretWithComponents> {
        return this.getSecretWithHttpInfo(organizationId, secretId, _options).pipe(map((apiResponse: HttpInfo<ModelsSecretWithComponents>) => apiResponse.data));
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public listSecretsWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsSecretWithComponentsList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSecrets(organizationId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSecretsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all secrets for the specified organization including inputs and outputs that use them
     * List secrets with components
     * @param organizationId Organization ID
     * @param [limit] Limit number of results
     * @param [offset] Offset results
     */
    public listSecrets(organizationId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsSecretWithComponentsList> {
        return this.listSecretsWithHttpInfo(organizationId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsSecretWithComponentsList>) => apiResponse.data));
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param createSecretRequest Secret updates
     */
    public updateSecretWithHttpInfo(organizationId: string, secretId: string, createSecretRequest: CreateSecretRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2SecretResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSecret(organizationId, secretId, createSecretRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSecretWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param createSecretRequest Secret updates
     */
    public updateSecret(organizationId: string, secretId: string, createSecretRequest: CreateSecretRequest, _options?: ConfigurationOptions): Observable<RoutesV2SecretResponse> {
        return this.updateSecretWithHttpInfo(organizationId, secretId, createSecretRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2SecretResponse>) => apiResponse.data));
    }

}

import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";
export class ObservableSessionsApi {
    private requestFactory: SessionsApiRequestFactory;
    private responseProcessor: SessionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionsApiRequestFactory,
        responseProcessor?: SessionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SessionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SessionsApiResponseProcessor();
    }

    /**
     * Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.
     * Mint a short-lived API token, optionally scoped to a single org
     * @param [createSessionRequest] Session options
     */
    public createSessionWithHttpInfo(createSessionRequest?: CreateSessionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3CreateSessionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSession(createSessionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSessionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.
     * Mint a short-lived API token, optionally scoped to a single org
     * @param [createSessionRequest] Session options
     */
    public createSession(createSessionRequest?: CreateSessionRequest, _options?: ConfigurationOptions): Observable<RoutesV3CreateSessionResponse> {
        return this.createSessionWithHttpInfo(createSessionRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV3CreateSessionResponse>) => apiResponse.data));
    }

}

import { TransformSandboxApiRequestFactory, TransformSandboxApiResponseProcessor} from "../apis/TransformSandboxApi";
export class ObservableTransformSandboxApi {
    private requestFactory: TransformSandboxApiRequestFactory;
    private responseProcessor: TransformSandboxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformSandboxApiRequestFactory,
        responseProcessor?: TransformSandboxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransformSandboxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransformSandboxApiResponseProcessor();
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param organizationId Organization ID
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformationWithHttpInfo(organizationId: string, applyTransformationV2Request: ApplyTransformationV2Request, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyTransformation(organizationId, applyTransformationV2Request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyTransformationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param organizationId Organization ID
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformation(organizationId: string, applyTransformationV2Request: ApplyTransformationV2Request, _options?: ConfigurationOptions): Observable<RoutesV2ApplyTransformationResponse> {
        return this.applyTransformationWithHttpInfo(organizationId, applyTransformationV2Request, _options).pipe(map((apiResponse: HttpInfo<RoutesV2ApplyTransformationResponse>) => apiResponse.data));
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformationV2WithHttpInfo(applyTransformationV2Request: ApplyTransformationV2Request, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyTransformationV2(applyTransformationV2Request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyTransformationV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param applyTransformationV2Request Transform configuration and record
     */
    public applyTransformationV2(applyTransformationV2Request: ApplyTransformationV2Request, _options?: ConfigurationOptions): Observable<RoutesV2ApplyTransformationResponse> {
        return this.applyTransformationV2WithHttpInfo(applyTransformationV2Request, _options).pipe(map((apiResponse: HttpInfo<RoutesV2ApplyTransformationResponse>) => apiResponse.data));
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param generateRecordRequest Record generation parameters
     */
    public generateRecordWithHttpInfo(generateRecordRequest: GenerateRecordRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2GenerateRecordResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateRecord(generateRecordRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param generateRecordRequest Record generation parameters
     */
    public generateRecord(generateRecordRequest: GenerateRecordRequest, _options?: ConfigurationOptions): Observable<RoutesV2GenerateRecordResponse> {
        return this.generateRecordWithHttpInfo(generateRecordRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV2GenerateRecordResponse>) => apiResponse.data));
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public listTemplatesWithHttpInfo(body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV2ListTemplatesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTemplates(body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all valid record type templates
     * List available templates
     * @param [body]
     */
    public listTemplates(body?: any, _options?: ConfigurationOptions): Observable<RoutesV2ListTemplatesResponse> {
        return this.listTemplatesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RoutesV2ListTemplatesResponse>) => apiResponse.data));
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
     * Get transform metadata
     * Get transform metadata
     * @param operationTypeId Transform type ID
     * @param [body]
     */
    public getTransformTypeMetaWithHttpInfo(operationTypeId: string, body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTransformTypeMeta(operationTypeId, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformTypeMetaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param operationTypeId Transform type ID
     * @param [body]
     */
    public getTransformTypeMeta(operationTypeId: string, body?: any, _options?: ConfigurationOptions): Observable<any> {
        return this.getTransformTypeMetaWithHttpInfo(operationTypeId, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public listTransformTypesWithHttpInfo(body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<Array<OperationInformation>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTransformTypes(body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTransformTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public listTransformTypes(body?: any, _options?: ConfigurationOptions): Observable<Array<OperationInformation>> {
        return this.listTransformTypesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<Array<OperationInformation>>) => apiResponse.data));
    }

}

import { TransformsRecommendationsApiRequestFactory, TransformsRecommendationsApiResponseProcessor} from "../apis/TransformsRecommendationsApi";
export class ObservableTransformsRecommendationsApi {
    private requestFactory: TransformsRecommendationsApiRequestFactory;
    private responseProcessor: TransformsRecommendationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformsRecommendationsApiRequestFactory,
        responseProcessor?: TransformsRecommendationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransformsRecommendationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransformsRecommendationsApiResponseProcessor();
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param createTransformRecommendationRequest Security data to analyze
     */
    public createTransformRecommendationWithHttpInfo(organizationId: string, createTransformRecommendationRequest: CreateTransformRecommendationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3SecurityDataAnalysis>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTransformRecommendation(organizationId, createTransformRecommendationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransformRecommendationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param createTransformRecommendationRequest Security data to analyze
     */
    public createTransformRecommendation(organizationId: string, createTransformRecommendationRequest: CreateTransformRecommendationRequest, _options?: ConfigurationOptions): Observable<RoutesV3SecurityDataAnalysis> {
        return this.createTransformRecommendationWithHttpInfo(organizationId, createTransformRecommendationRequest, _options).pipe(map((apiResponse: HttpInfo<RoutesV3SecurityDataAnalysis>) => apiResponse.data));
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param organizationId Organization ID
     */
    public listAvailableOptimizersWithHttpInfo(organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<RoutesV3OptimizerType>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAvailableOptimizers(organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAvailableOptimizersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param organizationId Organization ID
     */
    public listAvailableOptimizers(organizationId: string, _options?: ConfigurationOptions): Observable<Array<RoutesV3OptimizerType>> {
        return this.listAvailableOptimizersWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<Array<RoutesV3OptimizerType>>) => apiResponse.data));
    }

}

import { TransformsRepositoryApiRequestFactory, TransformsRepositoryApiResponseProcessor} from "../apis/TransformsRepositoryApi";
export class ObservableTransformsRepositoryApi {
    private requestFactory: TransformsRepositoryApiRequestFactory;
    private responseProcessor: TransformsRepositoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransformsRepositoryApiRequestFactory,
        responseProcessor?: TransformsRepositoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransformsRepositoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransformsRepositoryApiResponseProcessor();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param exportTransformRequest Transform to export and optional metadata
     */
    public exportTransformWithHttpInfo(exportTransformRequest: ExportTransformRequest, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.exportTransform(exportTransformRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportTransformWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param exportTransformRequest Transform to export and optional metadata
     */
    public exportTransform(exportTransformRequest: ExportTransformRequest, _options?: ConfigurationOptions): Observable<string> {
        return this.exportTransformWithHttpInfo(exportTransformRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformDetailsFromRepositoryWithHttpInfo(transformId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CommunityTransformsInternalTransformConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTransformDetailsFromRepository(transformId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformDetailsFromRepositoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformDetailsFromRepository(transformId: string, _options?: ConfigurationOptions): Observable<CommunityTransformsInternalTransformConfig> {
        return this.getTransformDetailsFromRepositoryWithHttpInfo(transformId, _options).pipe(map((apiResponse: HttpInfo<CommunityTransformsInternalTransformConfig>) => apiResponse.data));
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformRepositoryDetailsWithHttpInfo(transformId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsTransformsRepositoryTransform>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTransformRepositoryDetails(transformId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransformRepositoryDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get detailed information about a specific transform from repository
     * Get transform details
     * @param transformId Transform ID
     */
    public getTransformRepositoryDetails(transformId: string, _options?: ConfigurationOptions): Observable<ModelsTransformsRepositoryTransform> {
        return this.getTransformRepositoryDetailsWithHttpInfo(transformId, _options).pipe(map((apiResponse: HttpInfo<ModelsTransformsRepositoryTransform>) => apiResponse.data));
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public importTransformWithHttpInfo(body: any, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3ImportTransformResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.importTransform(body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importTransformWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public importTransform(body: any, _options?: ConfigurationOptions): Observable<RoutesV3ImportTransformResponse> {
        return this.importTransformWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RoutesV3ImportTransformResponse>) => apiResponse.data));
    }

    /**
     * List transforms from repository index
     * List community transforms
     */
    public listCommunityTransformsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<CommunityTransformsInternalTransformsIndex>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCommunityTransforms(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCommunityTransformsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transforms from repository index
     * List community transforms
     */
    public listCommunityTransforms(_options?: ConfigurationOptions): Observable<CommunityTransformsInternalTransformsIndex> {
        return this.listCommunityTransformsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CommunityTransformsInternalTransformsIndex>) => apiResponse.data));
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param [limit] Number of items to return (default: 10)
     * @param [offset] Number of items to skip (default: 0)
     */
    public listTransformRepositoryWithHttpInfo(limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ModelsTransformsRepositoryList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTransformRepository(limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTransformRepositoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transforms from repository with pagination
     * List transforms
     * @param [limit] Number of items to return (default: 10)
     * @param [offset] Number of items to skip (default: 0)
     */
    public listTransformRepository(limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ModelsTransformsRepositoryList> {
        return this.listTransformRepositoryWithHttpInfo(limit, offset, _options).pipe(map((apiResponse: HttpInfo<ModelsTransformsRepositoryList>) => apiResponse.data));
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
     * Create user
     * Create user
     * @param [body]
     */
    public createUserWithHttpInfo(body?: any, _options?: ConfigurationOptions): Observable<HttpInfo<GithubComMonadIncCorePkgTypesModelsUser>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createUser(body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public createUser(body?: any, _options?: ConfigurationOptions): Observable<GithubComMonadIncCorePkgTypesModelsUser> {
        return this.createUserWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<GithubComMonadIncCorePkgTypesModelsUser>) => apiResponse.data));
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     */
    public enableMFAWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<AuthenticationtypesMFAEnrollmentTicket>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enableMFA(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableMFAWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     */
    public enableMFA(_options?: ConfigurationOptions): Observable<AuthenticationtypesMFAEnrollmentTicket> {
        return this.enableMFAWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AuthenticationtypesMFAEnrollmentTicket>) => apiResponse.data));
    }

    /**
     * Get your current user
     * Get your current user
     * @param organizationId Organization ID
     */
    public getActiveUserWithHttpInfo(organizationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RoutesUserWithRoles>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getActiveUser(organizationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActiveUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get your current user
     * Get your current user
     * @param organizationId Organization ID
     */
    public getActiveUser(organizationId: string, _options?: ConfigurationOptions): Observable<RoutesUserWithRoles> {
        return this.getActiveUserWithHttpInfo(organizationId, _options).pipe(map((apiResponse: HttpInfo<RoutesUserWithRoles>) => apiResponse.data));
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     */
    public getMFAStatusWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<RoutesV3MFAStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMFAStatus(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMFAStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     */
    public getMFAStatus(_options?: ConfigurationOptions): Observable<RoutesV3MFAStatusResponse> {
        return this.getMFAStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RoutesV3MFAStatusResponse>) => apiResponse.data));
    }

}
