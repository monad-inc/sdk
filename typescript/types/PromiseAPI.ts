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
import { AlertCenterSecretsConfig } from '../models/AlertCenterSecretsConfig';
import { AlertCenterSettingsConfig } from '../models/AlertCenterSettingsConfig';
import { AlertsAlertMeta } from '../models/AlertsAlertMeta';
import { ArizeAuditLogsSecretsConfig } from '../models/ArizeAuditLogsSecretsConfig';
import { ArizeAuditLogsSettingsConfig } from '../models/ArizeAuditLogsSettingsConfig';
import { AuditLogsSecretsConfig } from '../models/AuditLogsSecretsConfig';
import { AuditLogsSettingsConfig } from '../models/AuditLogsSettingsConfig';
import { AuthLogsSecretsConfig } from '../models/AuthLogsSecretsConfig';
import { AuthLogsSettingsConfig } from '../models/AuthLogsSettingsConfig';
import { AuthenticationtypesAuthenticationMethod } from '../models/AuthenticationtypesAuthenticationMethod';
import { AuthenticationtypesMFAEnrollmentTicket } from '../models/AuthenticationtypesMFAEnrollmentTicket';
import { AuthenticationtypesTokenResponse } from '../models/AuthenticationtypesTokenResponse';
import { AwsGuarddutySecretsConfig } from '../models/AwsGuarddutySecretsConfig';
import { AwsGuarddutySettingsConfig } from '../models/AwsGuarddutySettingsConfig';
import { AwsS3SecretsConfig } from '../models/AwsS3SecretsConfig';
import { AwsS3SettingsConfig } from '../models/AwsS3SettingsConfig';
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
import { CloudResourceInventoryReportsSecretsConfig } from '../models/CloudResourceInventoryReportsSecretsConfig';
import { CloudResourceInventoryReportsSettingsConfig } from '../models/CloudResourceInventoryReportsSettingsConfig';
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
import { CommunityEditionSecretsConfig } from '../models/CommunityEditionSecretsConfig';
import { CommunityEditionSettingsConfig } from '../models/CommunityEditionSettingsConfig';
import { CommunityTransformsInternalTransformConfig } from '../models/CommunityTransformsInternalTransformConfig';
import { CommunityTransformsInternalTransformMetadata } from '../models/CommunityTransformsInternalTransformMetadata';
import { CommunityTransformsInternalTransformsIndex } from '../models/CommunityTransformsInternalTransformsIndex';
import { ConvertTimestampArgumentsConfig } from '../models/ConvertTimestampArgumentsConfig';
import { CortexXsoarManagementLogsSecretsConfig } from '../models/CortexXsoarManagementLogsSecretsConfig';
import { CortexXsoarManagementLogsSettingsConfig } from '../models/CortexXsoarManagementLogsSettingsConfig';
import { CreateKeyValueIfKeyValueArgumentsConfig } from '../models/CreateKeyValueIfKeyValueArgumentsConfig';
import { CriblHttpSecretsConfig } from '../models/CriblHttpSecretsConfig';
import { CriblHttpSettingsConfig } from '../models/CriblHttpSettingsConfig';
import { CustomerEventDataSecretsConfig } from '../models/CustomerEventDataSecretsConfig';
import { CustomerEventDataSettingsConfig } from '../models/CustomerEventDataSettingsConfig';
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
import { ElasticsearchSecretsConfig } from '../models/ElasticsearchSecretsConfig';
import { ElasticsearchSettingsConfig } from '../models/ElasticsearchSettingsConfig';
import { EncryptAESVariant } from '../models/EncryptAESVariant';
import { EncryptAgeVariant } from '../models/EncryptAgeVariant';
import { EncryptAlgorithmConfig } from '../models/EncryptAlgorithmConfig';
import { EncryptArgumentsConfig } from '../models/EncryptArgumentsConfig';
import { EndorLabsAuditLogsSecretsConfig } from '../models/EndorLabsAuditLogsSecretsConfig';
import { EndorLabsAuditLogsSettingsConfig } from '../models/EndorLabsAuditLogsSettingsConfig';
import { EnrichmentConnectorMeta } from '../models/EnrichmentConnectorMeta';
import { EntraIdSecretsConfig } from '../models/EntraIdSecretsConfig';
import { EntraIdSettingsConfig } from '../models/EntraIdSettingsConfig';
import { EventSecretsConfig } from '../models/EventSecretsConfig';
import { EventSettingsConfig } from '../models/EventSettingsConfig';
import { FlagsmithFlag } from '../models/FlagsmithFlag';
import { FlattenArgumentsConfig } from '../models/FlattenArgumentsConfig';
import { FlattenallArgumentsConfig } from '../models/FlattenallArgumentsConfig';
import { FleetdmActivityLogsSecretsConfig } from '../models/FleetdmActivityLogsSecretsConfig';
import { FleetdmActivityLogsSettingsConfig } from '../models/FleetdmActivityLogsSettingsConfig';
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { FullScansSecretsConfig } from '../models/FullScansSecretsConfig';
import { FullScansSettingsConfig } from '../models/FullScansSettingsConfig';
import { GeolocusSettingsConfig } from '../models/GeolocusSettingsConfig';
import { GithubAdvisoryUserSettingsConfig } from '../models/GithubAdvisoryUserSettingsConfig';
import { GithubComMonadIncCorePkgTypesModelsAlert } from '../models/GithubComMonadIncCorePkgTypesModelsAlert';
import { GithubComMonadIncCorePkgTypesModelsAlertStatus } from '../models/GithubComMonadIncCorePkgTypesModelsAlertStatus';
import { GithubComMonadIncCorePkgTypesModelsOrganization } from '../models/GithubComMonadIncCorePkgTypesModelsOrganization';
import { GithubComMonadIncCorePkgTypesModelsPermission } from '../models/GithubComMonadIncCorePkgTypesModelsPermission';
import { GithubComMonadIncCorePkgTypesModelsQuota } from '../models/GithubComMonadIncCorePkgTypesModelsQuota';
import { GithubComMonadIncCorePkgTypesModelsResourceReference } from '../models/GithubComMonadIncCorePkgTypesModelsResourceReference';
import { GithubComMonadIncCorePkgTypesModelsTimeRange } from '../models/GithubComMonadIncCorePkgTypesModelsTimeRange';
import { GithubComMonadIncCorePkgTypesModelsUser } from '../models/GithubComMonadIncCorePkgTypesModelsUser';
import { GitlabIssuesSecretsConfig } from '../models/GitlabIssuesSecretsConfig';
import { GitlabIssuesSettingsConfig } from '../models/GitlabIssuesSettingsConfig';
import { GoogleCloudStorageOutputSecretsConfig } from '../models/GoogleCloudStorageOutputSecretsConfig';
import { GoogleCloudStorageOutputSettingsConfig } from '../models/GoogleCloudStorageOutputSettingsConfig';
import { GoogleCloudStorageSecretsConfig } from '../models/GoogleCloudStorageSecretsConfig';
import { GoogleCloudStorageSettingsConfig } from '../models/GoogleCloudStorageSettingsConfig';
import { GoogleWorkspaceSecretsConfig } from '../models/GoogleWorkspaceSecretsConfig';
import { GoogleWorkspaceSettingsConfig } from '../models/GoogleWorkspaceSettingsConfig';
import { GreenhouseAuditLogsSecretsConfig } from '../models/GreenhouseAuditLogsSecretsConfig';
import { GreenhouseAuditLogsSettingsConfig } from '../models/GreenhouseAuditLogsSettingsConfig';
import { HttpHeaders } from '../models/HttpHeaders';
import { HttpSecretsConfig } from '../models/HttpSecretsConfig';
import { HttpSettingsConfig } from '../models/HttpSettingsConfig';
import { IndividualAlertsSecretsConfig } from '../models/IndividualAlertsSecretsConfig';
import { IndividualAlertsSettingsConfig } from '../models/IndividualAlertsSettingsConfig';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
import { InspectorSecretsConfig } from '../models/InspectorSecretsConfig';
import { InspectorSettingsConfig } from '../models/InspectorSettingsConfig';
import { IssuesReportSecretsConfig } from '../models/IssuesReportSecretsConfig';
import { IssuesReportSettingsConfig } from '../models/IssuesReportSettingsConfig';
import { IssuesSecretsConfig } from '../models/IssuesSecretsConfig';
import { IssuesSettingsConfig } from '../models/IssuesSettingsConfig';
import { JqArgumentsConfig } from '../models/JqArgumentsConfig';
import { JsonJsonFormatter } from '../models/JsonJsonFormatter';
import { KoiAuditLogsSecretsConfig } from '../models/KoiAuditLogsSecretsConfig';
import { KoiAuditLogsSettingsConfig } from '../models/KoiAuditLogsSettingsConfig';
import { KvLookupOutputSettingsConfig } from '../models/KvLookupOutputSettingsConfig';
import { KvLookupSettingsConfig } from '../models/KvLookupSettingsConfig';
import { KvlookupGetMetadataResponse } from '../models/KvlookupGetMetadataResponse';
import { KvlookupKVEntry } from '../models/KvlookupKVEntry';
import { LeafconditionsInfo } from '../models/LeafconditionsInfo';
import { LogAnalyticsQuerySecretsConfig } from '../models/LogAnalyticsQuerySecretsConfig';
import { LogAnalyticsQuerySettingsConfig } from '../models/LogAnalyticsQuerySettingsConfig';
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
import { ModelsAlertRule } from '../models/ModelsAlertRule';
import { ModelsAlertRuleList } from '../models/ModelsAlertRuleList';
import { ModelsBillingAccount } from '../models/ModelsBillingAccount';
import { ModelsBillingAccountList } from '../models/ModelsBillingAccountList';
import { ModelsBillingAccountPermission } from '../models/ModelsBillingAccountPermission';
import { ModelsBillingAccountRole } from '../models/ModelsBillingAccountRole';
import { ModelsBillingAccountRoleUser } from '../models/ModelsBillingAccountRoleUser';
import { ModelsBillingProduct } from '../models/ModelsBillingProduct';
import { ModelsBillingProductList } from '../models/ModelsBillingProductList';
import { ModelsComponentReference } from '../models/ModelsComponentReference';
import { ModelsConditionEvaluatable } from '../models/ModelsConditionEvaluatable';
import { ModelsConnection } from '../models/ModelsConnection';
import { ModelsConnectionList } from '../models/ModelsConnectionList';
import { ModelsConnectorMeta } from '../models/ModelsConnectorMeta';
import { ModelsDataUsage } from '../models/ModelsDataUsage';
import { ModelsEnrichment } from '../models/ModelsEnrichment';
import { ModelsEnrichmentConfig } from '../models/ModelsEnrichmentConfig';
import { ModelsEnrichmentList } from '../models/ModelsEnrichmentList';
import { ModelsInput } from '../models/ModelsInput';
import { ModelsInputConfig } from '../models/ModelsInputConfig';
import { ModelsInputList } from '../models/ModelsInputList';
import { ModelsNodeComponent } from '../models/ModelsNodeComponent';
import { ModelsOrganizationList } from '../models/ModelsOrganizationList';
import { ModelsOrganizationUser } from '../models/ModelsOrganizationUser';
import { ModelsOrganizationUserList } from '../models/ModelsOrganizationUserList';
import { ModelsOutput } from '../models/ModelsOutput';
import { ModelsOutputConfig } from '../models/ModelsOutputConfig';
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
import { ModelsPipelineRetentionPolicy } from '../models/ModelsPipelineRetentionPolicy';
import { ModelsPipelineStatus } from '../models/ModelsPipelineStatus';
import { ModelsProgressEntries } from '../models/ModelsProgressEntries';
import { ModelsProgressEntry } from '../models/ModelsProgressEntry';
import { ModelsQuotaList } from '../models/ModelsQuotaList';
import { ModelsRoleWithPermissions } from '../models/ModelsRoleWithPermissions';
import { ModelsRoleWithPermissionsList } from '../models/ModelsRoleWithPermissionsList';
import { ModelsSecret } from '../models/ModelsSecret';
import { ModelsSecretWithComponents } from '../models/ModelsSecretWithComponents';
import { ModelsSecretWithComponentsList } from '../models/ModelsSecretWithComponentsList';
import { ModelsStorageTypeCostConfig } from '../models/ModelsStorageTypeCostConfig';
import { ModelsStorageTypeCostEntry } from '../models/ModelsStorageTypeCostEntry';
import { ModelsStorageTypeCostSummary } from '../models/ModelsStorageTypeCostSummary';
import { ModelsStorageTypeOutputDetail } from '../models/ModelsStorageTypeOutputDetail';
import { ModelsStorageTypeSummaryResponse } from '../models/ModelsStorageTypeSummaryResponse';
import { ModelsStorageTypeTimeSeries } from '../models/ModelsStorageTypeTimeSeries';
import { ModelsStorageTypeTimeSeriesResponse } from '../models/ModelsStorageTypeTimeSeriesResponse';
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
import { OpenaiSettingsConfig } from '../models/OpenaiSettingsConfig';
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
import { PagerdutySecretsConfig } from '../models/PagerdutySecretsConfig';
import { PagerdutySettingsConfig } from '../models/PagerdutySettingsConfig';
import { PagerdutySummaryConfig } from '../models/PagerdutySummaryConfig';
import { PaloAltoDataSecurityAlertsSecretsConfig } from '../models/PaloAltoDataSecurityAlertsSecretsConfig';
import { PaloAltoDataSecurityAlertsSettingsConfig } from '../models/PaloAltoDataSecurityAlertsSettingsConfig';
import { PantherSecretsConfig } from '../models/PantherSecretsConfig';
import { PantherSettingsConfig } from '../models/PantherSettingsConfig';
import { ParquetParquetFormatter } from '../models/ParquetParquetFormatter';
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
import { RenameKeyArgumentsConfig } from '../models/RenameKeyArgumentsConfig';
import { RenameKeyWhereValueEqArgumentsConfig } from '../models/RenameKeyWhereValueEqArgumentsConfig';
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
import { RoutesV3EnrichmentSandboxRequest } from '../models/RoutesV3EnrichmentSandboxRequest';
import { RoutesV3EnrichmentSandboxResponse } from '../models/RoutesV3EnrichmentSandboxResponse';
import { RoutesV3FieldUpdation } from '../models/RoutesV3FieldUpdation';
import { RoutesV3GetEnrichmentResponse } from '../models/RoutesV3GetEnrichmentResponse';
import { RoutesV3GetFeatureFlagResponse } from '../models/RoutesV3GetFeatureFlagResponse';
import { RoutesV3ImportTransformResponse } from '../models/RoutesV3ImportTransformResponse';
import { RoutesV3MFAStatusResponse } from '../models/RoutesV3MFAStatusResponse';
import { RoutesV3OptimizerType } from '../models/RoutesV3OptimizerType';
import { RoutesV3PutEnrichmentRequest } from '../models/RoutesV3PutEnrichmentRequest';
import { RoutesV3SecurityDataAnalysis } from '../models/RoutesV3SecurityDataAnalysis';
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
import { SlackAuthConfig } from '../models/SlackAuthConfig';
import { SlackBotTokenVariant } from '../models/SlackBotTokenVariant';
import { SlackEnterpriseAuditLogsSecretsConfig } from '../models/SlackEnterpriseAuditLogsSecretsConfig';
import { SlackEnterpriseAuditLogsSettingsConfig } from '../models/SlackEnterpriseAuditLogsSettingsConfig';
import { SlackSettingsConfig } from '../models/SlackSettingsConfig';
import { SlackWebhookVariant } from '../models/SlackWebhookVariant';
import { SnowflakeInputSecretsConfig } from '../models/SnowflakeInputSecretsConfig';
import { SnowflakeInputSettingsConfig } from '../models/SnowflakeInputSettingsConfig';
import { SnowflakeOutputSecretsConfig } from '../models/SnowflakeOutputSecretsConfig';
import { SnowflakeOutputSettingsConfig } from '../models/SnowflakeOutputSettingsConfig';
import { SnykIssuesSecretsConfig } from '../models/SnykIssuesSecretsConfig';
import { SnykIssuesSettingsConfig } from '../models/SnykIssuesSettingsConfig';
import { SnykTargetsSecretsConfig } from '../models/SnykTargetsSecretsConfig';
import { SnykTargetsSettingsConfig } from '../models/SnykTargetsSettingsConfig';
import { SplunkSecretsConfig } from '../models/SplunkSecretsConfig';
import { SplunkSettingsConfig } from '../models/SplunkSettingsConfig';
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
import { UtcTimestampArgumentsConfig } from '../models/UtcTimestampArgumentsConfig';
import { VercelUserEventsSecretsConfig } from '../models/VercelUserEventsSecretsConfig';
import { VercelUserEventsSettingsConfig } from '../models/VercelUserEventsSettingsConfig';
import { VoltioAuditLogsSecretsConfig } from '../models/VoltioAuditLogsSecretsConfig';
import { VoltioAuditLogsSettingsConfig } from '../models/VoltioAuditLogsSettingsConfig';
import { VulnerabilityFindingsReportSecretsConfig } from '../models/VulnerabilityFindingsReportSecretsConfig';
import { VulnerabilityFindingsReportSettingsConfig } from '../models/VulnerabilityFindingsReportSettingsConfig';
import { VulnerabilityFindingsSecretsConfig } from '../models/VulnerabilityFindingsSecretsConfig';
import { VulnerabilityFindingsSettingsConfig } from '../models/VulnerabilityFindingsSettingsConfig';
import { WizAuditLogsSecretsConfig } from '../models/WizAuditLogsSecretsConfig';
import { WizAuditLogsSettingsConfig } from '../models/WizAuditLogsSettingsConfig';
import { ZendeskAuditLogsSecretsConfig } from '../models/ZendeskAuditLogsSecretsConfig';
import { ZendeskAuditLogsSettingsConfig } from '../models/ZendeskAuditLogsSettingsConfig';
import { ZoomActivityLogsSecretsConfig } from '../models/ZoomActivityLogsSecretsConfig';
import { ZoomActivityLogsSettingsConfig } from '../models/ZoomActivityLogsSettingsConfig';
import { ZoomMeetingActivityLogsSecretsConfig } from '../models/ZoomMeetingActivityLogsSecretsConfig';
import { ZoomMeetingActivityLogsSettingsConfig } from '../models/ZoomMeetingActivityLogsSettingsConfig';
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
     * @param routesV3CreateAlertRuleRequest Request body for creating an alert rule
     */
    public createAlertRuleWithHttpInfo(organizationId: string, routesV3CreateAlertRuleRequest: RoutesV3CreateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlertRuleWithHttpInfo(organizationId, routesV3CreateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param routesV3CreateAlertRuleRequest Request body for creating an alert rule
     */
    public createAlertRule(organizationId: string, routesV3CreateAlertRuleRequest: RoutesV3CreateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlertRule(organizationId, routesV3CreateAlertRuleRequest, observableOptions);
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
     * @param routesV3UpdateAlertRuleRequest Request body for updating an alert rule
     */
    public updateAlertRuleWithHttpInfo(organizationId: string, alertRuleId: string, routesV3UpdateAlertRuleRequest: RoutesV3UpdateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlertRuleWithHttpInfo(organizationId, alertRuleId, routesV3UpdateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param routesV3UpdateAlertRuleRequest Request body for updating an alert rule
     */
    public updateAlertRule(organizationId: string, alertRuleId: string, routesV3UpdateAlertRuleRequest: RoutesV3UpdateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlertRule(organizationId, alertRuleId, routesV3UpdateAlertRuleRequest, observableOptions);
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
     * @param routesLoginRequest Login request
     */
    public getTokenWithHttpInfo(routesLoginRequest: RoutesLoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthenticationtypesTokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTokenWithHttpInfo(routesLoginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an authentication token from the authentication service using username and password.
     * Get Authentication token
     * @param routesLoginRequest Login request
     */
    public getToken(routesLoginRequest: RoutesLoginRequest, _options?: PromiseConfigurationOptions): Promise<AuthenticationtypesTokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getToken(routesLoginRequest, observableOptions);
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
     * @param routesV2CreateBillingAccountRequest Request body for creating a billing account
     */
    public createBillingAccountWithHttpInfo(routesV2CreateBillingAccountRequest: RoutesV2CreateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountWithHttpInfo(routesV2CreateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account
     * Create Billing Account
     * @param routesV2CreateBillingAccountRequest Request body for creating a billing account
     */
    public createBillingAccount(routesV2CreateBillingAccountRequest: RoutesV2CreateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccount(routesV2CreateBillingAccountRequest, observableOptions);
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
     * @param routesV2UpdateBillingAccountRequest Request body for updating a billing account
     */
    public updateBillingAccountWithHttpInfo(billingAccountId: string, routesV2UpdateBillingAccountRequest: RoutesV2UpdateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccountWithHttpInfo(billingAccountId, routesV2UpdateBillingAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account
     * Update Billing Account
     * @param billingAccountId Billing Account ID
     * @param routesV2UpdateBillingAccountRequest Request body for updating a billing account
     */
    public updateBillingAccount(billingAccountId: string, routesV2UpdateBillingAccountRequest: RoutesV2UpdateBillingAccountRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccount(billingAccountId, routesV2UpdateBillingAccountRequest, observableOptions);
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
     * @param routesV2CreateBillingAccountRoleRequest Create Billing Account Role Request
     */
    public createBillingAccountRoleWithHttpInfo(billingAccountId: string, routesV2CreateBillingAccountRoleRequest: RoutesV2CreateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountRoleWithHttpInfo(billingAccountId, routesV2CreateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Role
     * Create Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountRoleRequest Create Billing Account Role Request
     */
    public createBillingAccountRole(billingAccountId: string, routesV2CreateBillingAccountRoleRequest: RoutesV2CreateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountRole(billingAccountId, routesV2CreateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2CreatebillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public createBillingAccountUserRoleWithHttpInfo(billingAccountId: string, roleId: string, routesV2CreatebillingAccountUserRoleRequest: RoutesV2CreatebillingAccountUserRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountUserRoleWithHttpInfo(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a user to a billing account role
     * Create Billing Account User Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2CreatebillingAccountUserRoleRequest Create Billing Account User Role Request
     */
    public createBillingAccountUserRole(billingAccountId: string, roleId: string, routesV2CreatebillingAccountUserRoleRequest: RoutesV2CreatebillingAccountUserRoleRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountUserRole(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest, observableOptions);
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
     * @param routesV2UpdateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public updateBillingAccountRoleWithHttpInfo(billingAccountId: string, roleId: string, routesV2UpdateBillingAccountRoleRequest: RoutesV2UpdateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsBillingAccountRole>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccountRoleWithHttpInfo(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Billing Account Role
     * Update Billing Account Role
     * @param billingAccountId Billing Account ID
     * @param roleId Role ID
     * @param routesV2UpdateBillingAccountRoleRequest Update Billing Account Role Request
     */
    public updateBillingAccountRole(billingAccountId: string, roleId: string, routesV2UpdateBillingAccountRoleRequest: RoutesV2UpdateBillingAccountRoleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsBillingAccountRole> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBillingAccountRole(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest, observableOptions);
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
     * @param routesV2CreateBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public createBillingAccountSubscriptionWithHttpInfo(billingAccountId: string, routesV2CreateBillingAccountSubscriptionRequest: RoutesV2CreateBillingAccountSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2CreateBillingAccountSubscriptionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountSubscriptionWithHttpInfo(billingAccountId, routesV2CreateBillingAccountSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Billing Account Subscription
     * Create Billing Account Subscription
     * @param billingAccountId Billing Account ID
     * @param routesV2CreateBillingAccountSubscriptionRequest Request body for creating a billing subscription
     */
    public createBillingAccountSubscription(billingAccountId: string, routesV2CreateBillingAccountSubscriptionRequest: RoutesV2CreateBillingAccountSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2CreateBillingAccountSubscriptionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBillingAccountSubscription(billingAccountId, routesV2CreateBillingAccountSubscriptionRequest, observableOptions);
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
     * @param routesV3CreateConnectionRequest Request body for creating a connection
     */
    public createConnectionWithHttpInfo(organizationId: string, routesV3CreateConnectionRequest: RoutesV3CreateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnectionWithHttpInfo(organizationId, routesV3CreateConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param routesV3CreateConnectionRequest Request body for creating a connection
     */
    public createConnection(organizationId: string, routesV3CreateConnectionRequest: RoutesV3CreateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnection(organizationId, routesV3CreateConnectionRequest, observableOptions);
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
     * @param routesV3UpdateConnectionRequest Request body for updating a connection
     */
    public updateConnectionWithHttpInfo(organizationId: string, connectionId: string, routesV3UpdateConnectionRequest: RoutesV3UpdateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnectionWithHttpInfo(organizationId, connectionId, routesV3UpdateConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param routesV3UpdateConnectionRequest Request body for updating a connection
     */
    public updateConnection(organizationId: string, connectionId: string, routesV3UpdateConnectionRequest: RoutesV3UpdateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnection(organizationId, connectionId, routesV3UpdateConnectionRequest, observableOptions);
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
     * @param routesV3EnrichmentSandboxRequest Enrichment configuration and record
     */
    public enrichmentSandboxWithHttpInfo(organizationId: string, routesV3EnrichmentSandboxRequest: RoutesV3EnrichmentSandboxRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3EnrichmentSandboxResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enrichmentSandboxWithHttpInfo(organizationId, routesV3EnrichmentSandboxRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param routesV3EnrichmentSandboxRequest Enrichment configuration and record
     */
    public enrichmentSandbox(organizationId: string, routesV3EnrichmentSandboxRequest: RoutesV3EnrichmentSandboxRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3EnrichmentSandboxResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enrichmentSandbox(organizationId, routesV3EnrichmentSandboxRequest, observableOptions);
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
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public createAPIKeyWithHttpInfo(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKeyWithToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAPIKeyWithHttpInfo(organizationId, routesV2CreateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create API key
     * Create API key
     * @param organizationId Organization ID
     * @param routesV2CreateAPIKeyRequest Request body for creating an API key
     */
    public createAPIKey(organizationId: string, routesV2CreateAPIKeyRequest: RoutesV2CreateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKeyWithToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAPIKey(organizationId, routesV2CreateAPIKeyRequest, observableOptions);
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
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public updateAPIKeyWithHttpInfo(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAPIKey>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAPIKeyWithHttpInfo(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update API key
     * Update API key
     * @param organizationId Organization ID
     * @param apiKeyId API Key ID
     * @param routesV2UpdateAPIKeyRequest Request body for updating an API key
     */
    public updateAPIKey(organizationId: string, apiKeyId: string, routesV2UpdateAPIKeyRequest: RoutesV2UpdateAPIKeyRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAPIKey> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAPIKey(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest, observableOptions);
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
     * @param routesV3CreateEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public createEnrichmentWithHttpInfo(organizationId: string, routesV3CreateEnrichmentRequest: RoutesV3CreateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEnrichmentWithHttpInfo(organizationId, routesV3CreateEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param routesV3CreateEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public createEnrichment(organizationId: string, routesV3CreateEnrichmentRequest: RoutesV3CreateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEnrichment(organizationId, routesV3CreateEnrichmentRequest, testConnection, observableOptions);
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
     * @param routesV3PutEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public replaceEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, routesV3PutEnrichmentRequest: RoutesV3PutEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceEnrichmentWithHttpInfo(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing enrichment with new configuration including secrets handling
     * Replace enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param routesV3PutEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public replaceEnrichment(organizationId: string, enrichmentId: string, routesV3PutEnrichmentRequest: RoutesV3PutEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceEnrichment(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param routesV3TestEnrichmentConnectionRequest Enrichment configuration to test
     */
    public testEnrichmentConnectionWithHttpInfo(organizationId: string, routesV3TestEnrichmentConnectionRequest: RoutesV3TestEnrichmentConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testEnrichmentConnectionWithHttpInfo(organizationId, routesV3TestEnrichmentConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param routesV3TestEnrichmentConnectionRequest Enrichment configuration to test
     */
    public testEnrichmentConnection(organizationId: string, routesV3TestEnrichmentConnectionRequest: RoutesV3TestEnrichmentConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testEnrichmentConnection(organizationId, routesV3TestEnrichmentConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param routesV3UpdateEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public updateEnrichmentWithHttpInfo(organizationId: string, enrichmentId: string, routesV3UpdateEnrichmentRequest: RoutesV3UpdateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEnrichmentWithHttpInfo(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing enrichment with new configuration including secrets handling
     * Update enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     * @param routesV3UpdateEnrichmentRequest Enrichment configuration update
     * @param [testConnection] Test connection before updating the enrichment
     */
    public updateEnrichment(organizationId: string, enrichmentId: string, routesV3UpdateEnrichmentRequest: RoutesV3UpdateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEnrichment(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection, observableOptions);
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
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createInputWithHttpInfo(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createInputWithHttpInfo(organizationId, routesV2CreateInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new input with configuration including secrets handling
     * Create input
     * @param organizationId Organization ID
     * @param routesV2CreateInputRequest Input configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createInput(organizationId: string, routesV2CreateInputRequest: RoutesV2CreateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createInput(organizationId, routesV2CreateInputRequest, testConnection, observableOptions);
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
     * @param routesV2PutInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceInputWithHttpInfo(organizationId: string, inputId: string, routesV2PutInputRequest: RoutesV2PutInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceInputWithHttpInfo(organizationId, inputId, routesV2PutInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2PutInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceInput(organizationId: string, inputId: string, routesV2PutInputRequest: RoutesV2PutInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceInput(organizationId, inputId, routesV2PutInputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public testInputConnectionWithHttpInfo(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testInputConnectionWithHttpInfo(organizationId, routesV2TestInputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given input type and configuration
     * Test input connection
     * @param organizationId Organization ID
     * @param routesV2TestInputConnectionRequest Input configuration to test
     */
    public testInputConnection(organizationId: string, routesV2TestInputConnectionRequest: RoutesV2TestInputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testInputConnection(organizationId, routesV2TestInputConnectionRequest, observableOptions);
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
    public updateInputWithHttpInfo(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateInputWithHttpInfo(organizationId, inputId, routesV2UpdateInputRequest, testConnection, observableOptions);
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
    public updateInput(organizationId: string, inputId: string, routesV2UpdateInputRequest: RoutesV2UpdateInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateInput(organizationId, inputId, routesV2UpdateInputRequest, testConnection, observableOptions);
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
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createOutputWithHttpInfo(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOutputWithHttpInfo(organizationId, routesV2CreateOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new output with configuration including secrets handling
     * Create output
     * @param organizationId Organization ID
     * @param routesV2CreateOutputRequest Output configuration
     * @param [testConnection] Test connection before creating the input
     */
    public createOutput(organizationId: string, routesV2CreateOutputRequest: RoutesV2CreateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOutput(organizationId, routesV2CreateOutputRequest, testConnection, observableOptions);
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
     * @param routesV2PutOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceOutputWithHttpInfo(organizationId: string, outputId: string, routesV2PutOutputRequest: RoutesV2PutOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceOutputWithHttpInfo(organizationId, outputId, routesV2PutOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2PutOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public replaceOutput(organizationId: string, outputId: string, routesV2PutOutputRequest: RoutesV2PutOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.replaceOutput(organizationId, outputId, routesV2PutOutputRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public testOutputConnectionWithHttpInfo(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testOutputConnectionWithHttpInfo(organizationId, routesV2TestOutputConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given output type and configuration
     * Test output connection
     * @param organizationId Organization ID
     * @param routesV2TestOutputConnectionRequest Output configuration to test
     */
    public testOutputConnection(organizationId: string, routesV2TestOutputConnectionRequest: RoutesV2TestOutputConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testOutputConnection(organizationId, routesV2TestOutputConnectionRequest, observableOptions);
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
    public updateOutputWithHttpInfo(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOutputWithHttpInfo(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, observableOptions);
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
    public updateOutput(organizationId: string, outputId: string, routesV2UpdateOutputRequest: RoutesV2UpdateOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOutput(organizationId, outputId, routesV2UpdateOutputRequest, testConnection, observableOptions);
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
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public createTransformWithHttpInfo(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsTransform>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransformWithHttpInfo(organizationId, routesCreateTransformRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create transform
     * Create transform
     * @param organizationId Organization ID
     * @param routesCreateTransformRequest Request body for creating a transform
     */
    public createTransform(organizationId: string, routesCreateTransformRequest: RoutesCreateTransformRequest, _options?: PromiseConfigurationOptions): Promise<ModelsTransform> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransform(organizationId, routesCreateTransformRequest, observableOptions);
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
     * Create a new child organization under the given parent organization
     * Create child organization
     * @param organizationId Parent Organization ID
     * @param routesV3CreateChildOrganizationRequest Request body
     */
    public createChildOrganizationWithHttpInfo(organizationId: string, routesV3CreateChildOrganizationRequest: RoutesV3CreateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createChildOrganizationWithHttpInfo(organizationId, routesV3CreateChildOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new child organization under the given parent organization
     * Create child organization
     * @param organizationId Parent Organization ID
     * @param routesV3CreateChildOrganizationRequest Request body
     */
    public createChildOrganization(organizationId: string, routesV3CreateChildOrganizationRequest: RoutesV3CreateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createChildOrganization(organizationId, routesV3CreateChildOrganizationRequest, observableOptions);
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
     * Delete a child organization under the given parent organization
     * Delete child organization
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     */
    public deleteChildOrganizationWithHttpInfo(organizationId: string, childOrganizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteChildOrganizationWithHttpInfo(organizationId, childOrganizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a child organization under the given parent organization
     * Delete child organization
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
     * List child organizations for the given parent organization
     * List child organizations
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
     * List child organizations for the given parent organization
     * List child organizations
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
     * Update a child organization under the given parent organization
     * Update child organization
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     * @param routesV3UpdateChildOrganizationRequest Request body
     */
    public updateChildOrganizationWithHttpInfo(organizationId: string, childOrganizationId: string, routesV3UpdateChildOrganizationRequest: RoutesV3UpdateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateChildOrganizationWithHttpInfo(organizationId, childOrganizationId, routesV3UpdateChildOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a child organization under the given parent organization
     * Update child organization
     * @param organizationId Parent Organization ID
     * @param childOrganizationId Child Organization ID
     * @param routesV3UpdateChildOrganizationRequest Request body
     */
    public updateChildOrganization(organizationId: string, childOrganizationId: string, routesV3UpdateChildOrganizationRequest: RoutesV3UpdateChildOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateChildOrganization(organizationId, childOrganizationId, routesV3UpdateChildOrganizationRequest, observableOptions);
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
     * @param routesV2SetStorageTypeCostRequest Cost configuration
     */
    public setStorageTypeCostWithHttpInfo(organizationId: string, routesV2SetStorageTypeCostRequest: RoutesV2SetStorageTypeCostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setStorageTypeCostWithHttpInfo(organizationId, routesV2SetStorageTypeCostRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param routesV2SetStorageTypeCostRequest Cost configuration
     */
    public setStorageTypeCost(organizationId: string, routesV2SetStorageTypeCostRequest: RoutesV2SetStorageTypeCostRequest, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setStorageTypeCost(organizationId, routesV2SetStorageTypeCostRequest, observableOptions);
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
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public createPipelineWithHttpInfo(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPipelineWithHttpInfo(organizationId, routesV2CreatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with specified configuration
     * Create pipeline
     * @param organizationId Organization ID
     * @param routesV2CreatePipelineRequest Request body for creating a pipeline
     */
    public createPipeline(organizationId: string, routesV2CreatePipelineRequest: RoutesV2CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPipeline(organizationId, routesV2CreatePipelineRequest, observableOptions);
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
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
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
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
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
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
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
     * @param [metrics] Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
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
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public updatePipelineWithHttpInfo(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineConfigV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineWithHttpInfo(organizationId, pipelineId, routesV2UpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing pipeline with the specified configuration
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesV2UpdatePipelineRequest Request body for updating a pipeline
     */
    public updatePipeline(organizationId: string, pipelineId: string, routesV2UpdatePipelineRequest: RoutesV2UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineConfigV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipeline(organizationId, pipelineId, routesV2UpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     * @param routesV2PatchPipelineEdgeRequest Request body
     */
    public updatePipelineEdgeWithHttpInfo(organizationId: string, pipelineId: string, edgeId: string, routesV2PatchPipelineEdgeRequest: RoutesV2PatchPipelineEdgeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineEdgeWithHttpInfo(organizationId, pipelineId, edgeId, routesV2PatchPipelineEdgeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Enable or disable a pipeline edge
     * Update pipeline edge
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param edgeId Edge ID
     * @param routesV2PatchPipelineEdgeRequest Request body
     */
    public updatePipelineEdge(organizationId: string, pipelineId: string, edgeId: string, routesV2PatchPipelineEdgeRequest: RoutesV2PatchPipelineEdgeRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineEdge(organizationId, pipelineId, edgeId, routesV2PatchPipelineEdgeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public updatePipelineV1WithHttpInfo(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineV1WithHttpInfo(organizationId, pipelineId, routesUpdatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update pipeline
     * Update pipeline
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param routesUpdatePipelineRequest Request body for updating a pipeline
     */
    public updatePipelineV1(organizationId: string, pipelineId: string, routesUpdatePipelineRequest: RoutesUpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<ModelsPipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePipelineV1(organizationId, pipelineId, routesUpdatePipelineRequest, observableOptions);
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
     * @param routesV2CreateRoleV2Request Request body for creating a role
     */
    public createRoleWithHttpInfo(organizationId: string, routesV2CreateRoleV2Request: RoutesV2CreateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRoleWithHttpInfo(organizationId, routesV2CreateRoleV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new role with permissions
     * Create role
     * @param organizationId Organization ID
     * @param routesV2CreateRoleV2Request Request body for creating a role
     */
    public createRole(organizationId: string, routesV2CreateRoleV2Request: RoutesV2CreateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRole(organizationId, routesV2CreateRoleV2Request, observableOptions);
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
     * @param routesV2UpdateRoleV2Request Request body for updating a role
     */
    public updateRoleWithHttpInfo(organizationId: string, roleId: string, routesV2UpdateRoleV2Request: RoutesV2UpdateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsRoleWithPermissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRoleWithHttpInfo(organizationId, roleId, routesV2UpdateRoleV2Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a role and its permissions
     * Update role
     * @param organizationId Organization ID
     * @param roleId Role ID
     * @param routesV2UpdateRoleV2Request Request body for updating a role
     */
    public updateRole(organizationId: string, roleId: string, routesV2UpdateRoleV2Request: RoutesV2UpdateRoleV2Request, _options?: PromiseConfigurationOptions): Promise<ModelsRoleWithPermissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRole(organizationId, roleId, routesV2UpdateRoleV2Request, observableOptions);
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
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public createSecretWithHttpInfo(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSecretWithHttpInfo(organizationId, routesV2CreateOrUpdateSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new secret for the specified organization
     * Create secret
     * @param organizationId Organization ID
     * @param routesV2CreateOrUpdateSecretRequest Secret to create
     */
    public createSecret(organizationId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SecretResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSecret(organizationId, routesV2CreateOrUpdateSecretRequest, observableOptions);
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
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public updateSecretWithHttpInfo(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2SecretResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSecretWithHttpInfo(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific secret by ID
     * Update secret
     * @param organizationId Organization ID
     * @param secretId Secret ID
     * @param routesV2CreateOrUpdateSecretRequest Secret updates
     */
    public updateSecret(organizationId: string, secretId: string, routesV2CreateOrUpdateSecretRequest: RoutesV2CreateOrUpdateSecretRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2SecretResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSecret(organizationId, secretId, routesV2CreateOrUpdateSecretRequest, observableOptions);
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
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public applyTransformationWithHttpInfo(organizationId: string, routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformationWithHttpInfo(organizationId, routesV2ApplyTransformationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record, resolving secret references from the organization
     * Apply transformation to record
     * @param organizationId Organization ID
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public applyTransformation(organizationId: string, routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformation(organizationId, routesV2ApplyTransformationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public applyTransformationV2WithHttpInfo(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2ApplyTransformationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformationV2WithHttpInfo(routesV2ApplyTransformationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a transformation configuration to a JSON record
     * Apply transformation to record
     * @param routesV2ApplyTransformationRequest Transform configuration and record
     */
    public applyTransformationV2(routesV2ApplyTransformationRequest: RoutesV2ApplyTransformationRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2ApplyTransformationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTransformationV2(routesV2ApplyTransformationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public generateRecordWithHttpInfo(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2GenerateRecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateRecordWithHttpInfo(routesV2GenerateRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a sample record using the specified template type
     * Generate sample record
     * @param routesV2GenerateRecordRequest Record generation parameters
     */
    public generateRecord(routesV2GenerateRecordRequest: RoutesV2GenerateRecordRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV2GenerateRecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateRecord(routesV2GenerateRecordRequest, observableOptions);
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
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public getTransformTypeMetaWithHttpInfo(transformTypeId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformTypeMetaWithHttpInfo(transformTypeId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get transform metadata
     * Get transform metadata
     * @param transformTypeId Transform type ID
     * @param [body]
     */
    public getTransformTypeMeta(transformTypeId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTransformTypeMeta(transformTypeId, body, observableOptions);
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
     * @param routesV3TransformRecommendationRequest Security data to analyze
     */
    public createTransformRecommendationWithHttpInfo(organizationId: string, routesV3TransformRecommendationRequest: RoutesV3TransformRecommendationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SecurityDataAnalysis>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransformRecommendationWithHttpInfo(organizationId, routesV3TransformRecommendationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param routesV3TransformRecommendationRequest Security data to analyze
     */
    public createTransformRecommendation(organizationId: string, routesV3TransformRecommendationRequest: RoutesV3TransformRecommendationRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3SecurityDataAnalysis> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTransformRecommendation(organizationId, routesV3TransformRecommendationRequest, observableOptions);
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
     * @param communityTransformsInternalTransformConfig Transform to export and optional metadata
     */
    public exportTransformWithHttpInfo(communityTransformsInternalTransformConfig: CommunityTransformsInternalTransformConfig, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.exportTransformWithHttpInfo(communityTransformsInternalTransformConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param communityTransformsInternalTransformConfig Transform to export and optional metadata
     */
    public exportTransform(communityTransformsInternalTransformConfig: CommunityTransformsInternalTransformConfig, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.exportTransform(communityTransformsInternalTransformConfig, observableOptions);
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
    public importTransformWithHttpInfo(body: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3ImportTransformResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.importTransformWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public importTransform(body: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3ImportTransformResponse> {
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
     */
    public getActiveUserWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesUserWithRoles>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActiveUserWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get your current user
     * Get your current user
     */
    public getActiveUser(_options?: PromiseConfigurationOptions): Promise<RoutesUserWithRoles> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActiveUser(observableOptions);
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



