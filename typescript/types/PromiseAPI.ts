import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AbsSecretsConfig } from '../models/AbsSecretsConfig';
import { AbsSettingsConfig } from '../models/AbsSettingsConfig';
import { ActivityLogsSecretsConfig } from '../models/ActivityLogsSecretsConfig';
import { ActivityLogsSettingsConfig } from '../models/ActivityLogsSettingsConfig';
import { ActivitylogsSecretsConfig } from '../models/ActivitylogsSecretsConfig';
import { ActivitylogsSettingsConfig } from '../models/ActivitylogsSettingsConfig';
import { ActorsInfoSecretsConfig } from '../models/ActorsInfoSecretsConfig';
import { ActorsInfoSettingsConfig } from '../models/ActorsInfoSettingsConfig';
import { AddAdd } from '../models/AddAdd';
import { AddIdAddIdentifier } from '../models/AddIdAddIdentifier';
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
import { AwssecurityhubSecretsConfig } from '../models/AwssecurityhubSecretsConfig';
import { AwssecurityhubSettingsConfig } from '../models/AwssecurityhubSettingsConfig';
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
import { AzureVirtualMachineSettingsConfig } from '../models/AzureVirtualMachineSettingsConfig';
import { AzureVnetFlowLogsSecretsConfig } from '../models/AzureVnetFlowLogsSecretsConfig';
import { AzureVnetFlowLogsSettingsConfig } from '../models/AzureVnetFlowLogsSettingsConfig';
import { BackblazeB2SecretsConfig } from '../models/BackblazeB2SecretsConfig';
import { BackblazeB2SettingsConfig } from '../models/BackblazeB2SettingsConfig';
import { BackblazeSecretsConfig } from '../models/BackblazeSecretsConfig';
import { BackblazeSettingsConfig } from '../models/BackblazeSettingsConfig';
import { BatchConfigBatchConfig } from '../models/BatchConfigBatchConfig';
import { BigqueryCronSecretsConfig } from '../models/BigqueryCronSecretsConfig';
import { BigqueryCronSettingsConfig } from '../models/BigqueryCronSettingsConfig';
import { BigqueryInputSecretsConfig } from '../models/BigqueryInputSecretsConfig';
import { BigqueryInputSettingsConfig } from '../models/BigqueryInputSettingsConfig';
import { BigquerySecretsConfig } from '../models/BigquerySecretsConfig';
import { BigquerySettingsConfig } from '../models/BigquerySettingsConfig';
import { BoxEventsSecretsConfig } from '../models/BoxEventsSecretsConfig';
import { BoxEventsSettingsConfig } from '../models/BoxEventsSettingsConfig';
import { BoxUsersSecretsConfig } from '../models/BoxUsersSecretsConfig';
import { BoxUsersSettingsConfig } from '../models/BoxUsersSettingsConfig';
import { BugsnagOrgEventsSecretsConfig } from '../models/BugsnagOrgEventsSecretsConfig';
import { BugsnagOrgEventsSettingsConfig } from '../models/BugsnagOrgEventsSettingsConfig';
import { BuildkiteAuditLogsSecretsConfig } from '../models/BuildkiteAuditLogsSecretsConfig';
import { BuildkiteAuditLogsSettingsConfig } from '../models/BuildkiteAuditLogsSettingsConfig';
import { BuildkiteGraphqlInputSecretsConfig } from '../models/BuildkiteGraphqlInputSecretsConfig';
import { BuildkiteGraphqlInputSettingsConfig } from '../models/BuildkiteGraphqlInputSettingsConfig';
import { CisaUserSettingsConfig } from '../models/CisaUserSettingsConfig';
import { CloudAssetInventorySecretsConfig } from '../models/CloudAssetInventorySecretsConfig';
import { CloudAssetInventorySettingsConfig } from '../models/CloudAssetInventorySettingsConfig';
import { CloudConfigurationFindingsSecretsConfig } from '../models/CloudConfigurationFindingsSecretsConfig';
import { CloudConfigurationFindingsSettingsConfig } from '../models/CloudConfigurationFindingsSettingsConfig';
import { CloudLogsSecretsConfig } from '../models/CloudLogsSecretsConfig';
import { CloudLogsSettingsConfig } from '../models/CloudLogsSettingsConfig';
import { CloudResourceInventoryReportsSecretsConfig } from '../models/CloudResourceInventoryReportsSecretsConfig';
import { CloudResourceInventoryReportsSettingsConfig } from '../models/CloudResourceInventoryReportsSettingsConfig';
import { CloudResourceInventorySecretsConfig } from '../models/CloudResourceInventorySecretsConfig';
import { CloudResourceInventorySettingsConfig } from '../models/CloudResourceInventorySettingsConfig';
import { CloudflareAuditLogsSecretsConfig } from '../models/CloudflareAuditLogsSecretsConfig';
import { CloudflareAuditLogsSettingsConfig } from '../models/CloudflareAuditLogsSettingsConfig';
import { CloudflareDnsRecordsSecretsConfig } from '../models/CloudflareDnsRecordsSecretsConfig';
import { CloudflareDnsRecordsSettingsConfig } from '../models/CloudflareDnsRecordsSettingsConfig';
import { CloudflareFirewallEventsSecretsConfig } from '../models/CloudflareFirewallEventsSecretsConfig';
import { CloudflareFirewallEventsSettingsConfig } from '../models/CloudflareFirewallEventsSettingsConfig';
import { CloudflareHttpRequestsSecretsConfig } from '../models/CloudflareHttpRequestsSecretsConfig';
import { CloudflareHttpRequestsSettingsConfig } from '../models/CloudflareHttpRequestsSettingsConfig';
import { CloudflarePageShieldConnectionsSecretsConfig } from '../models/CloudflarePageShieldConnectionsSecretsConfig';
import { CloudflarePageShieldConnectionsSettingsConfig } from '../models/CloudflarePageShieldConnectionsSettingsConfig';
import { CloudflareRulesetsSecretsConfig } from '../models/CloudflareRulesetsSecretsConfig';
import { CloudflareRulesetsSettingsConfig } from '../models/CloudflareRulesetsSettingsConfig';
import { CloudflareSecurityInsightsSecretsConfig } from '../models/CloudflareSecurityInsightsSecretsConfig';
import { CloudflareSecurityInsightsSettingsConfig } from '../models/CloudflareSecurityInsightsSettingsConfig';
import { CloudflareUrlScannerSecretsConfig } from '../models/CloudflareUrlScannerSecretsConfig';
import { CloudflareUrlScannerSettingsConfig } from '../models/CloudflareUrlScannerSettingsConfig';
import { CloudflareUsersSecretsConfig } from '../models/CloudflareUsersSecretsConfig';
import { CloudflareUsersSettingsConfig } from '../models/CloudflareUsersSettingsConfig';
import { CloudflareZeroTrustAccessRequestsSecretsConfig } from '../models/CloudflareZeroTrustAccessRequestsSecretsConfig';
import { CloudflareZeroTrustAccessRequestsSettingsConfig } from '../models/CloudflareZeroTrustAccessRequestsSettingsConfig';
import { CloudflareZonesSecretsConfig } from '../models/CloudflareZonesSecretsConfig';
import { CloudflareZonesSettingsConfig } from '../models/CloudflareZonesSettingsConfig';
import { CloudtrailSettingsConfig } from '../models/CloudtrailSettingsConfig';
import { ClumioAuditLogsSecretsConfig } from '../models/ClumioAuditLogsSecretsConfig';
import { ClumioAuditLogsSettingsConfig } from '../models/ClumioAuditLogsSettingsConfig';
import { ClumioConsolidatedAlertsSecretsConfig } from '../models/ClumioConsolidatedAlertsSecretsConfig';
import { ClumioConsolidatedAlertsSettingsConfig } from '../models/ClumioConsolidatedAlertsSettingsConfig';
import { CodaAuditEventsSecretsConfig } from '../models/CodaAuditEventsSecretsConfig';
import { CodaAuditEventsSettingsConfig } from '../models/CodaAuditEventsSettingsConfig';
import { CognitoUsersFilter } from '../models/CognitoUsersFilter';
import { CognitoUsersSettingsConfig } from '../models/CognitoUsersSettingsConfig';
import { CommunityEditionSecretsConfig } from '../models/CommunityEditionSecretsConfig';
import { CommunityEditionSettingsConfig } from '../models/CommunityEditionSettingsConfig';
import { CommunityTransformsInternalTransformConfig } from '../models/CommunityTransformsInternalTransformConfig';
import { CommunityTransformsInternalTransformMetadata } from '../models/CommunityTransformsInternalTransformMetadata';
import { CommunityTransformsInternalTransformsIndex } from '../models/CommunityTransformsInternalTransformsIndex';
import { CortexXsoarManagementLogsSecretsConfig } from '../models/CortexXsoarManagementLogsSecretsConfig';
import { CortexXsoarManagementLogsSettingsConfig } from '../models/CortexXsoarManagementLogsSettingsConfig';
import { CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue } from '../models/CreateKeyValueIfKeyValueCreateKeyValueIfKeyValue';
import { CriblHttpSecretsConfig } from '../models/CriblHttpSecretsConfig';
import { CriblHttpSettingsConfig } from '../models/CriblHttpSettingsConfig';
import { CrowdstrikeFdrSecretsConfig } from '../models/CrowdstrikeFdrSecretsConfig';
import { CrowdstrikeFdrSettingsConfig } from '../models/CrowdstrikeFdrSettingsConfig';
import { CustomerEventDataSecretsConfig } from '../models/CustomerEventDataSecretsConfig';
import { CustomerEventDataSettingsConfig } from '../models/CustomerEventDataSettingsConfig';
import { DatadogSecretsConfig } from '../models/DatadogSecretsConfig';
import { DatadogSettingsConfig } from '../models/DatadogSettingsConfig';
import { DefenderForEndpointAlertsSecretsConfig } from '../models/DefenderForEndpointAlertsSecretsConfig';
import { DefenderForEndpointAlertsSettingsConfig } from '../models/DefenderForEndpointAlertsSettingsConfig';
import { DelimitedDelimiterFormatter } from '../models/DelimitedDelimiterFormatter';
import { DeviceDetailsSecretsConfig } from '../models/DeviceDetailsSecretsConfig';
import { DeviceDetailsSettingsConfig } from '../models/DeviceDetailsSettingsConfig';
import { DevicesSecretsConfig } from '../models/DevicesSecretsConfig';
import { DevicesSettingsConfig } from '../models/DevicesSettingsConfig';
import { DropKeyDropKey } from '../models/DropKeyDropKey';
import { DropKeyWhereValueEqDropKeyWhereValueEq } from '../models/DropKeyWhereValueEqDropKeyWhereValueEq';
import { DropRecordWhereValueEqDropRecordWhereValueEq } from '../models/DropRecordWhereValueEqDropRecordWhereValueEq';
import { DuplicateKeyValueToKeyDuplicateKeyValueToKey } from '../models/DuplicateKeyValueToKeyDuplicateKeyValueToKey';
import { ElasticsearchSecretsConfig } from '../models/ElasticsearchSecretsConfig';
import { ElasticsearchSettingsConfig } from '../models/ElasticsearchSettingsConfig';
import { EndorLabsAuditLogsSecretsConfig } from '../models/EndorLabsAuditLogsSecretsConfig';
import { EndorLabsAuditLogsSettingsConfig } from '../models/EndorLabsAuditLogsSettingsConfig';
import { EnrichmentConnectorMeta } from '../models/EnrichmentConnectorMeta';
import { EntraIdSecretsConfig } from '../models/EntraIdSecretsConfig';
import { EntraIdSettingsConfig } from '../models/EntraIdSettingsConfig';
import { EventSecretsConfig } from '../models/EventSecretsConfig';
import { EventSettingsConfig } from '../models/EventSettingsConfig';
import { FlagsmithFlag } from '../models/FlagsmithFlag';
import { FlattenFlatten } from '../models/FlattenFlatten';
import { FlattenallFlattenAll } from '../models/FlattenallFlattenAll';
import { FormatterFormatConfig } from '../models/FormatterFormatConfig';
import { FullScansSecretsConfig } from '../models/FullScansSecretsConfig';
import { FullScansSettingsConfig } from '../models/FullScansSettingsConfig';
import { GeolocusSettingsConfig } from '../models/GeolocusSettingsConfig';
import { GithubAdvisoryUserSettingsConfig } from '../models/GithubAdvisoryUserSettingsConfig';
import { GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter } from '../models/GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter';
import { GithubComMonadIncAlertsModelsAlert } from '../models/GithubComMonadIncAlertsModelsAlert';
import { GithubComMonadIncAlertsModelsAlertStatus } from '../models/GithubComMonadIncAlertsModelsAlertStatus';
import { GithubComMonadIncAlertsModelsResourceReference } from '../models/GithubComMonadIncAlertsModelsResourceReference';
import { GithubComMonadIncCorePkgTypesModelsOrganization } from '../models/GithubComMonadIncCorePkgTypesModelsOrganization';
import { GithubComMonadIncCorePkgTypesModelsPermission } from '../models/GithubComMonadIncCorePkgTypesModelsPermission';
import { GithubComMonadIncCorePkgTypesModelsQuota } from '../models/GithubComMonadIncCorePkgTypesModelsQuota';
import { GithubComMonadIncCorePkgTypesModelsUser } from '../models/GithubComMonadIncCorePkgTypesModelsUser';
import { GitlabIssuesSecretsConfig } from '../models/GitlabIssuesSecretsConfig';
import { GitlabIssuesSettingsConfig } from '../models/GitlabIssuesSettingsConfig';
import { GoogleCloudStorageOutputSecretsConfig } from '../models/GoogleCloudStorageOutputSecretsConfig';
import { GoogleCloudStorageOutputSettingsConfig } from '../models/GoogleCloudStorageOutputSettingsConfig';
import { GoogleCloudStorageSecretsConfig } from '../models/GoogleCloudStorageSecretsConfig';
import { GoogleCloudStorageSettingsConfig } from '../models/GoogleCloudStorageSettingsConfig';
import { GreenhouseAuditLogsSecretsConfig } from '../models/GreenhouseAuditLogsSecretsConfig';
import { GreenhouseAuditLogsSettingsConfig } from '../models/GreenhouseAuditLogsSettingsConfig';
import { HttpHeaders } from '../models/HttpHeaders';
import { HttpSecretsConfig } from '../models/HttpSecretsConfig';
import { HttpSettingsConfig } from '../models/HttpSettingsConfig';
import { IamAccessAnalyzerCriterion } from '../models/IamAccessAnalyzerCriterion';
import { IamAccessAnalyzerFilter } from '../models/IamAccessAnalyzerFilter';
import { IamAccessAnalyzerSettingsConfig } from '../models/IamAccessAnalyzerSettingsConfig';
import { IndividualAlertsSecretsConfig } from '../models/IndividualAlertsSecretsConfig';
import { IndividualAlertsSettingsConfig } from '../models/IndividualAlertsSettingsConfig';
import { InputsConnectorMeta } from '../models/InputsConnectorMeta';
import { InspectorSecretsConfig } from '../models/InspectorSecretsConfig';
import { InspectorSettingsConfig } from '../models/InspectorSettingsConfig';
import { IssuesReportSecretsConfig } from '../models/IssuesReportSecretsConfig';
import { IssuesReportSettingsConfig } from '../models/IssuesReportSettingsConfig';
import { IssuesSecretsConfig } from '../models/IssuesSecretsConfig';
import { IssuesSettingsConfig } from '../models/IssuesSettingsConfig';
import { JqJQ } from '../models/JqJQ';
import { JsonJsonFormatter } from '../models/JsonJsonFormatter';
import { KmsSettingsConfig } from '../models/KmsSettingsConfig';
import { KoiAuditLogsSecretsConfig } from '../models/KoiAuditLogsSecretsConfig';
import { KoiAuditLogsSettingsConfig } from '../models/KoiAuditLogsSettingsConfig';
import { KvLookupOutputSettingsConfig } from '../models/KvLookupOutputSettingsConfig';
import { KvLookupSettingsConfig } from '../models/KvLookupSettingsConfig';
import { LeafconditionsInfo } from '../models/LeafconditionsInfo';
import { LogAnalyticsQuerySecretsConfig } from '../models/LogAnalyticsQuerySecretsConfig';
import { LogAnalyticsQuerySettingsConfig } from '../models/LogAnalyticsQuerySettingsConfig';
import { LoginSessionsSecretsConfig } from '../models/LoginSessionsSecretsConfig';
import { LoginSessionsSettingsConfig } from '../models/LoginSessionsSettingsConfig';
import { MathMultiplyWithValueMathMultiplyWithValue } from '../models/MathMultiplyWithValueMathMultiplyWithValue';
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
import { ModelsUserRoleWithPermissions } from '../models/ModelsUserRoleWithPermissions';
import { MonadGraphqlInputVariable } from '../models/MonadGraphqlInputVariable';
import { MonadLogSettingsConfig } from '../models/MonadLogSettingsConfig';
import { MutateTypeMutateType } from '../models/MutateTypeMutateType';
import { MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq } from '../models/MutateValueWhereKeyEqAndValueEqMutateValueWhereKeyEqAndValueEq';
import { MutateValueWhereKeyEqMutateValueWhereKeyEq } from '../models/MutateValueWhereKeyEqMutateValueWhereKeyEq';
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
import { OpenaiSettingsConfig } from '../models/OpenaiSettingsConfig';
import { OpensearchSecretsConfig } from '../models/OpensearchSecretsConfig';
import { OpensearchSettingsConfig } from '../models/OpensearchSettingsConfig';
import { OperationInformation } from '../models/OperationInformation';
import { OperationLogsSecretsConfig } from '../models/OperationLogsSecretsConfig';
import { OperationLogsSettingsConfig } from '../models/OperationLogsSettingsConfig';
import { OracleSettingsConfig } from '../models/OracleSettingsConfig';
import { OrgAuditLogsSecretsConfig } from '../models/OrgAuditLogsSecretsConfig';
import { OrgAuditLogsSettingsConfig } from '../models/OrgAuditLogsSettingsConfig';
import { OrganizationsSettingsConfig } from '../models/OrganizationsSettingsConfig';
import { OutputsConnectorMeta } from '../models/OutputsConnectorMeta';
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
import { PipelineNodeStatusProgressTimestamp } from '../models/PipelineNodeStatusProgressTimestamp';
import { PipelineNodeStatusProgressTimestamps } from '../models/PipelineNodeStatusProgressTimestamps';
import { PolymerSecretsConfig } from '../models/PolymerSecretsConfig';
import { PolymerSettingsConfig } from '../models/PolymerSettingsConfig';
import { PostgresqlSecretsConfig } from '../models/PostgresqlSecretsConfig';
import { PostgresqlSettingsConfig } from '../models/PostgresqlSettingsConfig';
import { PostmanAuditLogsSecretsConfig } from '../models/PostmanAuditLogsSecretsConfig';
import { PostmanAuditLogsSettingsConfig } from '../models/PostmanAuditLogsSettingsConfig';
import { PubsubSecretsConfig } from '../models/PubsubSecretsConfig';
import { PubsubSettingsConfig } from '../models/PubsubSettingsConfig';
import { RenameKeyRenameKey } from '../models/RenameKeyRenameKey';
import { RenameKeyWhereValueEqRenameKeyWhereValueEq } from '../models/RenameKeyWhereValueEqRenameKeyWhereValueEq';
import { ResourceEvaluationsSettingsConfig } from '../models/ResourceEvaluationsSettingsConfig';
import { ResponderErrorResponse } from '../models/ResponderErrorResponse';
import { RolesInfoSecretsConfig } from '../models/RolesInfoSecretsConfig';
import { RolesInfoSettingsConfig } from '../models/RolesInfoSettingsConfig';
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
import { RoutesV3UpdateConnectionRequest } from '../models/RoutesV3UpdateConnectionRequest';
import { RoutesV3UpdateEnrichmentRequest } from '../models/RoutesV3UpdateEnrichmentRequest';
import { S3SecretsConfig } from '../models/S3SecretsConfig';
import { S3SettingsConfig } from '../models/S3SettingsConfig';
import { SalesforceUsersSecretsConfig } from '../models/SalesforceUsersSecretsConfig';
import { SalesforceUsersSettingsConfig } from '../models/SalesforceUsersSettingsConfig';
import { SecretProcessesorEnrichmentConfig } from '../models/SecretProcessesorEnrichmentConfig';
import { SecretProcessesorEnrichmentConfigSecrets } from '../models/SecretProcessesorEnrichmentConfigSecrets';
import { SecretProcessesorEnrichmentConfigSettings } from '../models/SecretProcessesorEnrichmentConfigSettings';
import { SecretProcessesorInputConfig } from '../models/SecretProcessesorInputConfig';
import { SecretProcessesorInputConfigSecrets } from '../models/SecretProcessesorInputConfigSecrets';
import { SecretProcessesorInputConfigSettings } from '../models/SecretProcessesorInputConfigSettings';
import { SecretProcessesorOutputConfig } from '../models/SecretProcessesorOutputConfig';
import { SecretProcessesorOutputConfigSecrets } from '../models/SecretProcessesorOutputConfigSecrets';
import { SecretProcessesorOutputConfigSettings } from '../models/SecretProcessesorOutputConfigSettings';
import { SecretsmanagerSecretsConfig } from '../models/SecretsmanagerSecretsConfig';
import { SecretsmanagerSettingsConfig } from '../models/SecretsmanagerSettingsConfig';
import { SecurityGroupsFilter } from '../models/SecurityGroupsFilter';
import { SecurityGroupsSettingsConfig } from '../models/SecurityGroupsSettingsConfig';
import { SecurityLakeSettingsConfig } from '../models/SecurityLakeSettingsConfig';
import { SecurityLakeSourceAccountDetails } from '../models/SecurityLakeSourceAccountDetails';
import { SemgrepCodeFindingsSecretsConfig } from '../models/SemgrepCodeFindingsSecretsConfig';
import { SemgrepCodeFindingsSettingsConfig } from '../models/SemgrepCodeFindingsSettingsConfig';
import { SemgrepDeploymentsSecretsConfig } from '../models/SemgrepDeploymentsSecretsConfig';
import { SemgrepDeploymentsSettingsConfig } from '../models/SemgrepDeploymentsSettingsConfig';
import { SemgrepProjectDetailsSecretsConfig } from '../models/SemgrepProjectDetailsSecretsConfig';
import { SemgrepProjectDetailsSettingsConfig } from '../models/SemgrepProjectDetailsSettingsConfig';
import { SemgrepProjectsSecretsConfig } from '../models/SemgrepProjectsSecretsConfig';
import { SemgrepProjectsSettingsConfig } from '../models/SemgrepProjectsSettingsConfig';
import { SemgrepSupplyChainFindingsSecretsConfig } from '../models/SemgrepSupplyChainFindingsSecretsConfig';
import { SemgrepSupplyChainFindingsSettingsConfig } from '../models/SemgrepSupplyChainFindingsSettingsConfig';
import { SentinelSecretsConfig } from '../models/SentinelSecretsConfig';
import { SentinelSettingsConfig } from '../models/SentinelSettingsConfig';
import { SentryOrgAuditLogsSecretsConfig } from '../models/SentryOrgAuditLogsSecretsConfig';
import { SentryOrgAuditLogsSettingsConfig } from '../models/SentryOrgAuditLogsSettingsConfig';
import { SlackEnterpriseAuditLogsSecretsConfig } from '../models/SlackEnterpriseAuditLogsSecretsConfig';
import { SlackEnterpriseAuditLogsSettingsConfig } from '../models/SlackEnterpriseAuditLogsSettingsConfig';
import { SlackUsersSecretsConfig } from '../models/SlackUsersSecretsConfig';
import { SlackUsersSettingsConfig } from '../models/SlackUsersSettingsConfig';
import { SlackgroupsSecretsConfig } from '../models/SlackgroupsSecretsConfig';
import { SlackgroupsSettingsConfig } from '../models/SlackgroupsSettingsConfig';
import { SnowflakeInputSecretsConfig } from '../models/SnowflakeInputSecretsConfig';
import { SnowflakeInputSettingsConfig } from '../models/SnowflakeInputSettingsConfig';
import { SnowflakeOutputSecretsConfig } from '../models/SnowflakeOutputSecretsConfig';
import { SnowflakeOutputSettingsConfig } from '../models/SnowflakeOutputSettingsConfig';
import { SnykIssuesSecretsConfig } from '../models/SnykIssuesSecretsConfig';
import { SnykIssuesSettingsConfig } from '../models/SnykIssuesSettingsConfig';
import { SnykOrganizationsSecretsConfig } from '../models/SnykOrganizationsSecretsConfig';
import { SnykOrganizationsSettingsConfig } from '../models/SnykOrganizationsSettingsConfig';
import { SnykProjectsSecretsConfig } from '../models/SnykProjectsSecretsConfig';
import { SnykProjectsSettingsConfig } from '../models/SnykProjectsSettingsConfig';
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
import { SystemlogSecretsConfig } from '../models/SystemlogSecretsConfig';
import { SystemlogSettingsConfig } from '../models/SystemlogSettingsConfig';
import { TailscaleUsersSecretsConfig } from '../models/TailscaleUsersSecretsConfig';
import { TailscaleUsersSettingsConfig } from '../models/TailscaleUsersSettingsConfig';
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
import { TypesFilterNameStringType } from '../models/TypesFilterNameStringType';
import { TypesStringComparison } from '../models/TypesStringComparison';
import { TypesStringFilter } from '../models/TypesStringFilter';
import { UniversalSecretsConfig } from '../models/UniversalSecretsConfig';
import { UniversalSettingsConfig } from '../models/UniversalSettingsConfig';
import { UsersInfoSecretsConfig } from '../models/UsersInfoSecretsConfig';
import { UsersInfoSettingsConfig } from '../models/UsersInfoSettingsConfig';
import { UsersSecretsConfig } from '../models/UsersSecretsConfig';
import { UsersSettingsConfig } from '../models/UsersSettingsConfig';
import { UtcTimestampTimestamp } from '../models/UtcTimestampTimestamp';
import { VercelUserEventsSecretsConfig } from '../models/VercelUserEventsSecretsConfig';
import { VercelUserEventsSettingsConfig } from '../models/VercelUserEventsSettingsConfig';
import { VulnerabilitiesCronSecretsConfig } from '../models/VulnerabilitiesCronSecretsConfig';
import { VulnerabilitiesCronSettingsConfig } from '../models/VulnerabilitiesCronSettingsConfig';
import { VulnerabilitiesSecretsConfig } from '../models/VulnerabilitiesSecretsConfig';
import { VulnerabilitiesSettingsConfig } from '../models/VulnerabilitiesSettingsConfig';
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
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param alertRuleTypeId Alert Rule Type ID
     */
    public v3AlertRulesAlertRuleTypeIdGetWithHttpInfo(alertRuleTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlertsAlertMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AlertRulesAlertRuleTypeIdGetWithHttpInfo(alertRuleTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get configuration metadata for a specific alert rule type by its type ID
     * Get alert rule type config metadata
     * @param alertRuleTypeId Alert Rule Type ID
     */
    public v3AlertRulesAlertRuleTypeIdGet(alertRuleTypeId: string, _options?: PromiseConfigurationOptions): Promise<AlertsAlertMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AlertRulesAlertRuleTypeIdGet(alertRuleTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     */
    public v3AlertRulesGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlertsAlertMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AlertRulesGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List all available alert rule types with their configuration metadata
     * List alert rule types
     */
    public v3AlertRulesGet(_options?: PromiseConfigurationOptions): Promise<Array<AlertsAlertMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3AlertRulesGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to delete
     */
    public v3OrganizationIdAlertRulesAlertRuleIdDeleteWithHttpInfo(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesAlertRuleIdDeleteWithHttpInfo(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing alert rule
     * Delete alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to delete
     */
    public v3OrganizationIdAlertRulesAlertRuleIdDelete(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesAlertRuleIdDelete(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to retrieve
     */
    public v3OrganizationIdAlertRulesAlertRuleIdGetWithHttpInfo(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesAlertRuleIdGetWithHttpInfo(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an alert rule by its ID
     * Get alert rule by ID
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to retrieve
     */
    public v3OrganizationIdAlertRulesAlertRuleIdGet(organizationId: string, alertRuleId: string, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesAlertRuleIdGet(organizationId, alertRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param routesV3UpdateAlertRuleRequest Request body for updating an alert rule
     */
    public v3OrganizationIdAlertRulesAlertRuleIdPutWithHttpInfo(organizationId: string, alertRuleId: string, routesV3UpdateAlertRuleRequest: RoutesV3UpdateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesAlertRuleIdPutWithHttpInfo(organizationId, alertRuleId, routesV3UpdateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing alert rule
     * Update alert rule
     * @param organizationId Organization ID
     * @param alertRuleId Alert Rule ID to update
     * @param routesV3UpdateAlertRuleRequest Request body for updating an alert rule
     */
    public v3OrganizationIdAlertRulesAlertRuleIdPut(organizationId: string, alertRuleId: string, routesV3UpdateAlertRuleRequest: RoutesV3UpdateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesAlertRuleIdPut(organizationId, alertRuleId, routesV3UpdateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v3OrganizationIdAlertRulesGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all alert rules for an organization
     * Get all alert rules
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v3OrganizationIdAlertRulesGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param routesV3CreateAlertRuleRequest Request body for creating an alert rule
     */
    public v3OrganizationIdAlertRulesPostWithHttpInfo(organizationId: string, routesV3CreateAlertRuleRequest: RoutesV3CreateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsAlertRule>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesPostWithHttpInfo(organizationId, routesV3CreateAlertRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new alert rule with the provided details
     * Create a new alert rule
     * @param organizationId Organization ID
     * @param routesV3CreateAlertRuleRequest Request body for creating an alert rule
     */
    public v3OrganizationIdAlertRulesPost(organizationId: string, routesV3CreateAlertRuleRequest: RoutesV3CreateAlertRuleRequest, _options?: PromiseConfigurationOptions): Promise<ModelsAlertRule> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertRulesPost(organizationId, routesV3CreateAlertRuleRequest, observableOptions);
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
    public v3OrganizationIdAlertsGetWithHttpInfo(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3AlertList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertsGetWithHttpInfo(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until, observableOptions);
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
    public v3OrganizationIdAlertsGet(organizationId: string, ruleIds?: string, severities?: string, pipelineIds?: string, resourceType?: string, resourceId?: string, since?: string, until?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3AlertList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertsGet(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until, observableOptions);
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
    public v3OrganizationIdAlertsStreamGetWithHttpInfo(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertsStreamGetWithHttpInfo(organizationId, since, last, ruleIds, severities, resourceIds, resourceType, observableOptions);
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
    public v3OrganizationIdAlertsStreamGet(organizationId: string, since?: string, last?: string, ruleIds?: string, severities?: string, resourceIds?: string, resourceType?: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdAlertsStreamGet(organizationId, since, last, ruleIds, severities, resourceIds, resourceType, observableOptions);
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
     */
    public v2ConditionsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LeafconditionsInfo>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2ConditionsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List conditions
     * List conditions
     */
    public v2ConditionsGet(_options?: PromiseConfigurationOptions): Promise<Array<LeafconditionsInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2ConditionsGet(observableOptions);
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
     * Delete an existing connection
     * Delete connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to delete
     */
    public v3OrganizationIdConnectionsConnectionIdDeleteWithHttpInfo(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsConnectionIdDeleteWithHttpInfo(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing connection
     * Delete connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to delete
     */
    public v3OrganizationIdConnectionsConnectionIdDelete(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsConnectionIdDelete(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param organizationId Organization ID
     * @param connectionId Connection ID to retrieve
     */
    public v3OrganizationIdConnectionsConnectionIdGetWithHttpInfo(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsConnectionIdGetWithHttpInfo(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a connection by its ID
     * Get connection by ID
     * @param organizationId Organization ID
     * @param connectionId Connection ID to retrieve
     */
    public v3OrganizationIdConnectionsConnectionIdGet(organizationId: string, connectionId: string, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsConnectionIdGet(organizationId, connectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param routesV3UpdateConnectionRequest Request body for updating a connection
     */
    public v3OrganizationIdConnectionsConnectionIdPatchWithHttpInfo(organizationId: string, connectionId: string, routesV3UpdateConnectionRequest: RoutesV3UpdateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsConnectionIdPatchWithHttpInfo(organizationId, connectionId, routesV3UpdateConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing connection
     * Update connection
     * @param organizationId Organization ID
     * @param connectionId Connection ID to update
     * @param routesV3UpdateConnectionRequest Request body for updating a connection
     */
    public v3OrganizationIdConnectionsConnectionIdPatch(organizationId: string, connectionId: string, routesV3UpdateConnectionRequest: RoutesV3UpdateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsConnectionIdPatch(organizationId, connectionId, routesV3UpdateConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v3OrganizationIdConnectionsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnectionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all connections
     * Get all connections
     * @param organizationId Organization ID
     * @param [limit] Limit
     * @param [offset] Offset
     */
    public v3OrganizationIdConnectionsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsConnectionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param routesV3CreateConnectionRequest Request body for creating a connection
     */
    public v3OrganizationIdConnectionsPostWithHttpInfo(organizationId: string, routesV3CreateConnectionRequest: RoutesV3CreateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsConnection>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsPostWithHttpInfo(organizationId, routesV3CreateConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new connection with the provided details
     * Create a new connection
     * @param organizationId Organization ID
     * @param routesV3CreateConnectionRequest Request body for creating a connection
     */
    public v3OrganizationIdConnectionsPost(organizationId: string, routesV3CreateConnectionRequest: RoutesV3CreateConnectionRequest, _options?: PromiseConfigurationOptions): Promise<ModelsConnection> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdConnectionsPost(organizationId, routesV3CreateConnectionRequest, observableOptions);
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
    public v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(organizationId: string, enrichmentTypeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EnrichmentConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(organizationId, enrichmentTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID
     * @param enrichmentTypeId Enrichment type ID
     */
    public v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(organizationId: string, enrichmentTypeId: string, _options?: PromiseConfigurationOptions): Promise<EnrichmentConnectorMeta> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(organizationId, enrichmentTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<EnrichmentConnectorMeta>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public v3OrganizationIdEnrichmentsMetaGet(organizationId: string, _options?: PromiseConfigurationOptions): Promise<Array<EnrichmentConnectorMeta>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsMetaGet(organizationId, observableOptions);
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
    public v3FeatureFlagsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3GetFeatureFlagResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3FeatureFlagsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get feature flags for the authenticated user
     * Get feature flags
     */
    public v3FeatureFlagsGet(_options?: PromiseConfigurationOptions): Promise<RoutesV3GetFeatureFlagResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3FeatureFlagsGet(observableOptions);
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
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdDeleteWithHttpInfo(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdDeleteWithHttpInfo(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an enrichment by ID
     * Delete enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdDelete(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdDelete(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdGetWithHttpInfo(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3GetEnrichmentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdGetWithHttpInfo(organizationId, enrichmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get an enrichment by ID
     * Get enrichment
     * @param organizationId Organization ID
     * @param enrichmentId Enrichment ID
     */
    public v3OrganizationIdEnrichmentsEnrichmentIdGet(organizationId: string, enrichmentId: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3GetEnrichmentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdGet(organizationId, enrichmentId, observableOptions);
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
    public v3OrganizationIdEnrichmentsEnrichmentIdPatchWithHttpInfo(organizationId: string, enrichmentId: string, routesV3UpdateEnrichmentRequest: RoutesV3UpdateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdPatchWithHttpInfo(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection, observableOptions);
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
    public v3OrganizationIdEnrichmentsEnrichmentIdPatch(organizationId: string, enrichmentId: string, routesV3UpdateEnrichmentRequest: RoutesV3UpdateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdPatch(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection, observableOptions);
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
    public v3OrganizationIdEnrichmentsEnrichmentIdPutWithHttpInfo(organizationId: string, enrichmentId: string, routesV3PutEnrichmentRequest: RoutesV3PutEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdPutWithHttpInfo(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection, observableOptions);
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
    public v3OrganizationIdEnrichmentsEnrichmentIdPut(organizationId: string, enrichmentId: string, routesV3PutEnrichmentRequest: RoutesV3PutEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsEnrichmentIdPut(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param [limit] Number of results to return (default 100)
     * @param [offset] Number of results to skip (default 0)
     */
    public v3OrganizationIdEnrichmentsGetWithHttpInfo(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichmentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsGetWithHttpInfo(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * List all enrichments for an organization
     * List enrichments
     * @param organizationId Organization ID
     * @param [limit] Number of results to return (default 100)
     * @param [offset] Number of results to skip (default 0)
     */
    public v3OrganizationIdEnrichmentsGet(organizationId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichmentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsGet(organizationId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param routesV3CreateEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public v3OrganizationIdEnrichmentsPostWithHttpInfo(organizationId: string, routesV3CreateEnrichmentRequest: RoutesV3CreateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsEnrichment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsPostWithHttpInfo(organizationId, routesV3CreateEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new enrichment with configuration including secrets handling
     * Create enrichment
     * @param organizationId Organization ID
     * @param routesV3CreateEnrichmentRequest Enrichment configuration
     * @param [testConnection] Test connection before creating the enrichment
     */
    public v3OrganizationIdEnrichmentsPost(organizationId: string, routesV3CreateEnrichmentRequest: RoutesV3CreateEnrichmentRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsEnrichment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsPost(organizationId, routesV3CreateEnrichmentRequest, testConnection, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param routesV3TestEnrichmentConnectionRequest Enrichment configuration to test
     */
    public v3OrganizationIdEnrichmentsTestConnectionPostWithHttpInfo(organizationId: string, routesV3TestEnrichmentConnectionRequest: RoutesV3TestEnrichmentConnectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsTestConnectionPostWithHttpInfo(organizationId, routesV3TestEnrichmentConnectionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Tests the connection for a given enrichment type and configuration
     * Test enrichment connection
     * @param organizationId Organization ID
     * @param routesV3TestEnrichmentConnectionRequest Enrichment configuration to test
     */
    public v3OrganizationIdEnrichmentsTestConnectionPost(organizationId: string, routesV3TestEnrichmentConnectionRequest: RoutesV3TestEnrichmentConnectionRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsTestConnectionPost(organizationId, routesV3TestEnrichmentConnectionRequest, observableOptions);
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
     * Replace an existing input with new configuration including secrets handling
     * Replace input
     * @param organizationId Organization ID
     * @param inputId Input ID
     * @param routesV2PutInputRequest Input configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdInputsInputIdPutWithHttpInfo(organizationId: string, inputId: string, routesV2PutInputRequest: RoutesV2PutInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsInput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsInputIdPutWithHttpInfo(organizationId, inputId, routesV2PutInputRequest, testConnection, observableOptions);
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
    public v2OrganizationIdInputsInputIdPut(organizationId: string, inputId: string, routesV2PutInputRequest: RoutesV2PutInputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsInput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdInputsInputIdPut(organizationId, inputId, routesV2PutInputRequest, testConnection, observableOptions);
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
     * Replace an existing output with new configuration including secrets handling
     * Replace output
     * @param organizationId Organization ID
     * @param outputId Output ID
     * @param routesV2PutOutputRequest Output configuration update
     * @param [testConnection] Test connection before creating the input
     */
    public v2OrganizationIdOutputsOutputIdPutWithHttpInfo(organizationId: string, outputId: string, routesV2PutOutputRequest: RoutesV2PutOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsOutput>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsOutputIdPutWithHttpInfo(organizationId, outputId, routesV2PutOutputRequest, testConnection, observableOptions);
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
    public v2OrganizationIdOutputsOutputIdPut(organizationId: string, outputId: string, routesV2PutOutputRequest: RoutesV2PutOutputRequest, testConnection?: boolean, _options?: PromiseConfigurationOptions): Promise<ModelsOutput> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdOutputsOutputIdPut(organizationId, outputId, routesV2PutOutputRequest, testConnection, observableOptions);
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
     * @param userAuthProviderId User Auth Provider ID
     */
    public v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId: string, userId: string, userAuthProviderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersUserIdDeleteWithHttpInfo(organizationId, userId, userAuthProviderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove user from organization
     * Remove user from organization
     * @param organizationId Organization ID
     * @param userId User ID
     * @param userAuthProviderId User Auth Provider ID
     */
    public v1OrganizationIdUsersUserIdDelete(organizationId: string, userId: string, userAuthProviderId: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationIdUsersUserIdDelete(organizationId, userId, userAuthProviderId, observableOptions);
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
    public v1OrganizationsOrganizationIdPatchWithHttpInfo(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
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
    public v1OrganizationsOrganizationIdPatch(organizationId: string, routesUpdateOrganizationRequest: RoutesUpdateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsOrganizationIdPatch(organizationId, routesUpdateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsOrganization>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsPostWithHttpInfo(routesCreateOrganizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create organization
     * Create organization
     * @param routesCreateOrganizationRequest Request body for creating an organization
     */
    public v1OrganizationsPost(routesCreateOrganizationRequest: RoutesCreateOrganizationRequest, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsOrganization> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1OrganizationsPost(routesCreateOrganizationRequest, observableOptions);
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
    public v2OrganizationIdMetricsGetWithHttpInfo(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsGetWithHttpInfo(organizationId, metric, start, end, resolution, observableOptions);
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
    public v2OrganizationIdMetricsGet(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsGet(organizationId, metric, start, end, resolution, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesDetailsGetWithHttpInfo(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV2StorageTypeDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesDetailsGetWithHttpInfo(organizationId, start, end, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesDetailsGet(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<RoutesV2StorageTypeDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesDetailsGet(organizationId, start, end, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesGetWithHttpInfo(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeTimeSeriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesGetWithHttpInfo(organizationId, metric, start, end, resolution, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesGet(organizationId: string, metric: string, start?: string, end?: string, resolution?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeTimeSeriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesGet(organizationId, metric, start, end, resolution, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGetWithHttpInfo(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGetWithHttpInfo(organizationId, storageType, start, end, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet(organizationId: string, storageType: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet(organizationId, storageType, start, end, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesSummaryGetWithHttpInfo(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesSummaryGetWithHttpInfo(organizationId, start, end, billingType, pipelineId, observableOptions);
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
    public v2OrganizationIdMetricsStorageTypesSummaryGet(organizationId: string, start?: string, end?: string, billingType?: string, pipelineId?: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsStorageTypesSummaryGet(organizationId, start, end, billingType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param organizationId Organization ID
     */
    public v2OrganizationIdStorageTypeCostGetWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdStorageTypeCostGetWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get per-organization cost configuration for storage types
     * Get storage type cost
     * @param organizationId Organization ID
     */
    public v2OrganizationIdStorageTypeCostGet(organizationId: string, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdStorageTypeCostGet(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param routesV2SetStorageTypeCostRequest Cost configuration
     */
    public v2OrganizationIdStorageTypeCostPutWithHttpInfo(organizationId: string, routesV2SetStorageTypeCostRequest: RoutesV2SetStorageTypeCostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsStorageTypeCostConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdStorageTypeCostPutWithHttpInfo(organizationId, routesV2SetStorageTypeCostRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update per-organization cost configuration for storage types
     * Set storage type cost
     * @param organizationId Organization ID
     * @param routesV2SetStorageTypeCostRequest Cost configuration
     */
    public v2OrganizationIdStorageTypeCostPut(organizationId: string, routesV2SetStorageTypeCostRequest: RoutesV2SetStorageTypeCostRequest, _options?: PromiseConfigurationOptions): Promise<ModelsStorageTypeCostConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdStorageTypeCostPut(organizationId, routesV2SetStorageTypeCostRequest, observableOptions);
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
     * Get time series metrics for a pipeline
     * Get pipeline metrics
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public v2OrganizationIdMetricsPipelinesPipelineIdGetWithHttpInfo(organizationId: string, pipelineId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsPipelinesPipelineIdGetWithHttpInfo(organizationId, pipelineId, metric, start, end, resolution, observableOptions);
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
    public v2OrganizationIdMetricsPipelinesPipelineIdGet(organizationId: string, pipelineId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsPipelinesPipelineIdGet(organizationId, pipelineId, metric, start, end, resolution, observableOptions);
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
    public v2OrganizationIdMetricsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsPipelinesPipelineIdNodeIdGetWithHttpInfo(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
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
    public v2OrganizationIdMetricsPipelinesPipelineIdNodeIdGet(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdMetricsPipelinesPipelineIdNodeIdGet(organizationId, pipelineId, nodeId, metric, start, end, resolution, observableOptions);
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
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetWithHttpInfo(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ModelsPipelineMetrics>> {
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
     * @param metric Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
     * @param [start] ISO3339 start time, default 6 hours ago
     * @param [end] ISO3339 end time, default now
     * @param [resolution] Resolution of the data, default determined by time window
     */
    public v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId: string, pipelineId: string, nodeId: string, metric: string, start?: string, end?: string, resolution?: string, _options?: PromiseConfigurationOptions): Promise<ModelsPipelineMetrics> {
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
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdTriggerPostWithHttpInfo(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdTriggerPostWithHttpInfo(organizationId, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Manually trigger a cron-scheduled pipeline to run
     * Trigger pipeline manually
     * @param organizationId Organization ID
     * @param pipelineId Pipeline ID
     */
    public v2OrganizationIdPipelinesPipelineIdTriggerPost(organizationId: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v2OrganizationIdPipelinesPipelineIdTriggerPost(organizationId, pipelineId, observableOptions);
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

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     */
    public v3PipelineEdgesEdgeConditionOperatorTypesGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PipelineEdgesEdgeConditionOperatorTypesGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the conditional types for edge conditions
     * Conditional types for edge conditions
     */
    public v3PipelineEdgesEdgeConditionOperatorTypesGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PipelineEdgesEdgeConditionOperatorTypesGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     */
    public v3PipelineEdgesEdgeConditionRulesGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PipelineEdgesEdgeConditionRulesGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the rules for edge conditions
     * Rules for edge conditions
     */
    public v3PipelineEdgesEdgeConditionRulesGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3PipelineEdgesEdgeConditionRulesGet(observableOptions);
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

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param routesV3EnrichmentSandboxRequest Enrichment configuration and record
     */
    public v3OrganizationIdEnrichmentsSandboxPostWithHttpInfo(organizationId: string, routesV3EnrichmentSandboxRequest: RoutesV3EnrichmentSandboxRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3EnrichmentSandboxResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsSandboxPostWithHttpInfo(organizationId, routesV3EnrichmentSandboxRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Apply a enrichment configuration to a JSON record
     * Apply enrichment to record
     * @param organizationId Organization ID
     * @param routesV3EnrichmentSandboxRequest Enrichment configuration and record
     */
    public v3OrganizationIdEnrichmentsSandboxPost(organizationId: string, routesV3EnrichmentSandboxRequest: RoutesV3EnrichmentSandboxRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3EnrichmentSandboxResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdEnrichmentsSandboxPost(organizationId, routesV3EnrichmentSandboxRequest, observableOptions);
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
    public v1TransformsGetWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<OperationInformation>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1TransformsGetWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * List transforms
     * List transforms
     * @param [body]
     */
    public v1TransformsGet(body?: any, _options?: PromiseConfigurationOptions): Promise<Array<OperationInformation>> {
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
     * List available transform optimizers
     * List available transform optimizers
     * @param organizationId Organization ID
     */
    public v3OrganizationIdTransformRecommendationsOptimizersGetWithHttpInfo(organizationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoutesV3OptimizerType>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdTransformRecommendationsOptimizersGetWithHttpInfo(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List available transform optimizers
     * List available transform optimizers
     * @param organizationId Organization ID
     */
    public v3OrganizationIdTransformRecommendationsOptimizersGet(organizationId: string, _options?: PromiseConfigurationOptions): Promise<Array<RoutesV3OptimizerType>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdTransformRecommendationsOptimizersGet(organizationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param routesV3TransformRecommendationRequest Security data to analyze
     */
    public v3OrganizationIdTransformRecommendationsPostWithHttpInfo(organizationId: string, routesV3TransformRecommendationRequest: RoutesV3TransformRecommendationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3SecurityDataAnalysis>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdTransformRecommendationsPostWithHttpInfo(organizationId, routesV3TransformRecommendationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Analyze security data and provide transformation recommendations
     * Create transform recommendation
     * @param organizationId Organization ID
     * @param routesV3TransformRecommendationRequest Security data to analyze
     */
    public v3OrganizationIdTransformRecommendationsPost(organizationId: string, routesV3TransformRecommendationRequest: RoutesV3TransformRecommendationRequest, _options?: PromiseConfigurationOptions): Promise<RoutesV3SecurityDataAnalysis> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3OrganizationIdTransformRecommendationsPost(organizationId, routesV3TransformRecommendationRequest, observableOptions);
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
     * Export transform to YAML format
     * Export transform to YAML
     * @param communityTransformsInternalTransformConfig Transform to export and optional metadata
     */
    public v3TransformsRepositoryExportPostWithHttpInfo(communityTransformsInternalTransformConfig: CommunityTransformsInternalTransformConfig, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryExportPostWithHttpInfo(communityTransformsInternalTransformConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Export transform to YAML format
     * Export transform to YAML
     * @param communityTransformsInternalTransformConfig Transform to export and optional metadata
     */
    public v3TransformsRepositoryExportPost(communityTransformsInternalTransformConfig: CommunityTransformsInternalTransformConfig, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryExportPost(communityTransformsInternalTransformConfig, observableOptions);
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
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public v3TransformsRepositoryImportPostWithHttpInfo(body: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3ImportTransformResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryImportPostWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Import transform from YAML file
     * Import transform from YAML
     * @param body YAML transform definition
     */
    public v3TransformsRepositoryImportPost(body: string, _options?: PromiseConfigurationOptions): Promise<RoutesV3ImportTransformResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3TransformsRepositoryImportPost(body, observableOptions);
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
    public v1UsersPostWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GithubComMonadIncCorePkgTypesModelsUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1UsersPostWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create user
     * Create user
     * @param [body]
     */
    public v1UsersPost(body?: any, _options?: PromiseConfigurationOptions): Promise<GithubComMonadIncCorePkgTypesModelsUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v1UsersPost(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     */
    public v3UsersMfaGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RoutesV3MFAStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UsersMfaGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get MFA enrollment status and methods for a user
     * Get MFA status
     */
    public v3UsersMfaGet(_options?: PromiseConfigurationOptions): Promise<RoutesV3MFAStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UsersMfaGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     */
    public v3UsersMfaPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthenticationtypesMFAEnrollmentTicket>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UsersMfaPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Enable MFA for a user and create enrollment ticket (OTP only)
     * Enable MFA
     */
    public v3UsersMfaPost(_options?: PromiseConfigurationOptions): Promise<AuthenticationtypesMFAEnrollmentTicket> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.v3UsersMfaPost(observableOptions);
        return result.toPromise();
    }


}



