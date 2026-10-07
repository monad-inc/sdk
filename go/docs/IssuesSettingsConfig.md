# IssuesSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, A Wiz report is generated on the first sync. All syncs thereafter will be of incremental data. | [optional] 
**ControlIds** | Pointer to **[]string** | @Description Filter Issues created by specific control IDs | [optional] 
**HasNote** | Pointer to [**WizNoteFilter**](WizNoteFilter.md) |  | [optional] 
**HasRemediation** | Pointer to [**WizRemediationFilter**](WizRemediationFilter.md) |  | [optional] 
**HasServiceTicket** | Pointer to [**WizServiceTicketFilter**](WizServiceTicketFilter.md) |  | [optional] 
**IssueIds** | Pointer to **[]string** | @Description Filter only Issues that match these specific IDs | [optional] 
**IssueTypes** | Pointer to [**[]WizIssueType**](WizIssueType.md) | @Description Filter by Issue type | [optional] 
**ProjectIds** | Pointer to **[]string** | @Description Filter Issues associated with specific project IDs | [optional] 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**RelatedEntityId** | Pointer to **string** | @Description Filter by related entity ids | [optional] 
**ResolutionReasons** | Pointer to [**[]WizResolutionReason**](WizResolutionReason.md) | @Description Filter Issues by resolution reason | [optional] 
**RiskEqualsAll** | Pointer to [**[]WizRiskType**](WizRiskType.md) | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present | [optional] 
**RiskEqualsAny** | Pointer to [**[]WizRiskType**](WizRiskType.md) | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name | [optional] 
**SearchQuery** | Pointer to **string** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found | [optional] 
**SecurityScan** | Pointer to **string** | @Description Filter by security scan source | [optional] 
**Severities** | Pointer to [**[]WizIssueSeverity**](WizIssueSeverity.md) | @Description Filter Issues according to Control severity | [optional] 
**StackLayers** | Pointer to [**[]WizStackLayer**](WizStackLayer.md) | @Description Filter Issues from specific stack layers | [optional] 
**Status** | Pointer to [**[]WizIssueStatus**](WizIssueStatus.md) | @Description Filter by Issue handling status @Description Default: OPEN | [optional] 
**TenantDataCenter** | **string** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact | 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewIssuesSettingsConfig

`func NewIssuesSettingsConfig(tenantDataCenter string, ) *IssuesSettingsConfig`

NewIssuesSettingsConfig instantiates a new IssuesSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssuesSettingsConfigWithDefaults

`func NewIssuesSettingsConfigWithDefaults() *IssuesSettingsConfig`

NewIssuesSettingsConfigWithDefaults instantiates a new IssuesSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *IssuesSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *IssuesSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *IssuesSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *IssuesSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetControlIds

`func (o *IssuesSettingsConfig) GetControlIds() []string`

GetControlIds returns the ControlIds field if non-nil, zero value otherwise.

### GetControlIdsOk

`func (o *IssuesSettingsConfig) GetControlIdsOk() (*[]string, bool)`

GetControlIdsOk returns a tuple with the ControlIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlIds

`func (o *IssuesSettingsConfig) SetControlIds(v []string)`

SetControlIds sets ControlIds field to given value.

### HasControlIds

`func (o *IssuesSettingsConfig) HasControlIds() bool`

HasControlIds returns a boolean if a field has been set.

### GetHasNote

`func (o *IssuesSettingsConfig) GetHasNote() WizNoteFilter`

GetHasNote returns the HasNote field if non-nil, zero value otherwise.

### GetHasNoteOk

`func (o *IssuesSettingsConfig) GetHasNoteOk() (*WizNoteFilter, bool)`

GetHasNoteOk returns a tuple with the HasNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNote

`func (o *IssuesSettingsConfig) SetHasNote(v WizNoteFilter)`

SetHasNote sets HasNote field to given value.

### HasHasNote

`func (o *IssuesSettingsConfig) HasHasNote() bool`

HasHasNote returns a boolean if a field has been set.

### GetHasRemediation

`func (o *IssuesSettingsConfig) GetHasRemediation() WizRemediationFilter`

GetHasRemediation returns the HasRemediation field if non-nil, zero value otherwise.

### GetHasRemediationOk

`func (o *IssuesSettingsConfig) GetHasRemediationOk() (*WizRemediationFilter, bool)`

GetHasRemediationOk returns a tuple with the HasRemediation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasRemediation

`func (o *IssuesSettingsConfig) SetHasRemediation(v WizRemediationFilter)`

SetHasRemediation sets HasRemediation field to given value.

### HasHasRemediation

`func (o *IssuesSettingsConfig) HasHasRemediation() bool`

HasHasRemediation returns a boolean if a field has been set.

### GetHasServiceTicket

`func (o *IssuesSettingsConfig) GetHasServiceTicket() WizServiceTicketFilter`

GetHasServiceTicket returns the HasServiceTicket field if non-nil, zero value otherwise.

### GetHasServiceTicketOk

`func (o *IssuesSettingsConfig) GetHasServiceTicketOk() (*WizServiceTicketFilter, bool)`

GetHasServiceTicketOk returns a tuple with the HasServiceTicket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasServiceTicket

`func (o *IssuesSettingsConfig) SetHasServiceTicket(v WizServiceTicketFilter)`

SetHasServiceTicket sets HasServiceTicket field to given value.

### HasHasServiceTicket

`func (o *IssuesSettingsConfig) HasHasServiceTicket() bool`

HasHasServiceTicket returns a boolean if a field has been set.

### GetIssueIds

`func (o *IssuesSettingsConfig) GetIssueIds() []string`

GetIssueIds returns the IssueIds field if non-nil, zero value otherwise.

### GetIssueIdsOk

`func (o *IssuesSettingsConfig) GetIssueIdsOk() (*[]string, bool)`

GetIssueIdsOk returns a tuple with the IssueIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueIds

`func (o *IssuesSettingsConfig) SetIssueIds(v []string)`

SetIssueIds sets IssueIds field to given value.

### HasIssueIds

`func (o *IssuesSettingsConfig) HasIssueIds() bool`

HasIssueIds returns a boolean if a field has been set.

### GetIssueTypes

`func (o *IssuesSettingsConfig) GetIssueTypes() []WizIssueType`

GetIssueTypes returns the IssueTypes field if non-nil, zero value otherwise.

### GetIssueTypesOk

`func (o *IssuesSettingsConfig) GetIssueTypesOk() (*[]WizIssueType, bool)`

GetIssueTypesOk returns a tuple with the IssueTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueTypes

`func (o *IssuesSettingsConfig) SetIssueTypes(v []WizIssueType)`

SetIssueTypes sets IssueTypes field to given value.

### HasIssueTypes

`func (o *IssuesSettingsConfig) HasIssueTypes() bool`

HasIssueTypes returns a boolean if a field has been set.

### GetProjectIds

`func (o *IssuesSettingsConfig) GetProjectIds() []string`

GetProjectIds returns the ProjectIds field if non-nil, zero value otherwise.

### GetProjectIdsOk

`func (o *IssuesSettingsConfig) GetProjectIdsOk() (*[]string, bool)`

GetProjectIdsOk returns a tuple with the ProjectIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectIds

`func (o *IssuesSettingsConfig) SetProjectIds(v []string)`

SetProjectIds sets ProjectIds field to given value.

### HasProjectIds

`func (o *IssuesSettingsConfig) HasProjectIds() bool`

HasProjectIds returns a boolean if a field has been set.

### GetRateLimit

`func (o *IssuesSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *IssuesSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *IssuesSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *IssuesSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetRelatedEntityId

`func (o *IssuesSettingsConfig) GetRelatedEntityId() string`

GetRelatedEntityId returns the RelatedEntityId field if non-nil, zero value otherwise.

### GetRelatedEntityIdOk

`func (o *IssuesSettingsConfig) GetRelatedEntityIdOk() (*string, bool)`

GetRelatedEntityIdOk returns a tuple with the RelatedEntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedEntityId

`func (o *IssuesSettingsConfig) SetRelatedEntityId(v string)`

SetRelatedEntityId sets RelatedEntityId field to given value.

### HasRelatedEntityId

`func (o *IssuesSettingsConfig) HasRelatedEntityId() bool`

HasRelatedEntityId returns a boolean if a field has been set.

### GetResolutionReasons

`func (o *IssuesSettingsConfig) GetResolutionReasons() []WizResolutionReason`

GetResolutionReasons returns the ResolutionReasons field if non-nil, zero value otherwise.

### GetResolutionReasonsOk

`func (o *IssuesSettingsConfig) GetResolutionReasonsOk() (*[]WizResolutionReason, bool)`

GetResolutionReasonsOk returns a tuple with the ResolutionReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionReasons

`func (o *IssuesSettingsConfig) SetResolutionReasons(v []WizResolutionReason)`

SetResolutionReasons sets ResolutionReasons field to given value.

### HasResolutionReasons

`func (o *IssuesSettingsConfig) HasResolutionReasons() bool`

HasResolutionReasons returns a boolean if a field has been set.

### GetRiskEqualsAll

`func (o *IssuesSettingsConfig) GetRiskEqualsAll() []WizRiskType`

GetRiskEqualsAll returns the RiskEqualsAll field if non-nil, zero value otherwise.

### GetRiskEqualsAllOk

`func (o *IssuesSettingsConfig) GetRiskEqualsAllOk() (*[]WizRiskType, bool)`

GetRiskEqualsAllOk returns a tuple with the RiskEqualsAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAll

`func (o *IssuesSettingsConfig) SetRiskEqualsAll(v []WizRiskType)`

SetRiskEqualsAll sets RiskEqualsAll field to given value.

### HasRiskEqualsAll

`func (o *IssuesSettingsConfig) HasRiskEqualsAll() bool`

HasRiskEqualsAll returns a boolean if a field has been set.

### GetRiskEqualsAny

`func (o *IssuesSettingsConfig) GetRiskEqualsAny() []WizRiskType`

GetRiskEqualsAny returns the RiskEqualsAny field if non-nil, zero value otherwise.

### GetRiskEqualsAnyOk

`func (o *IssuesSettingsConfig) GetRiskEqualsAnyOk() (*[]WizRiskType, bool)`

GetRiskEqualsAnyOk returns a tuple with the RiskEqualsAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAny

`func (o *IssuesSettingsConfig) SetRiskEqualsAny(v []WizRiskType)`

SetRiskEqualsAny sets RiskEqualsAny field to given value.

### HasRiskEqualsAny

`func (o *IssuesSettingsConfig) HasRiskEqualsAny() bool`

HasRiskEqualsAny returns a boolean if a field has been set.

### GetSearchQuery

`func (o *IssuesSettingsConfig) GetSearchQuery() string`

GetSearchQuery returns the SearchQuery field if non-nil, zero value otherwise.

### GetSearchQueryOk

`func (o *IssuesSettingsConfig) GetSearchQueryOk() (*string, bool)`

GetSearchQueryOk returns a tuple with the SearchQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchQuery

`func (o *IssuesSettingsConfig) SetSearchQuery(v string)`

SetSearchQuery sets SearchQuery field to given value.

### HasSearchQuery

`func (o *IssuesSettingsConfig) HasSearchQuery() bool`

HasSearchQuery returns a boolean if a field has been set.

### GetSecurityScan

`func (o *IssuesSettingsConfig) GetSecurityScan() string`

GetSecurityScan returns the SecurityScan field if non-nil, zero value otherwise.

### GetSecurityScanOk

`func (o *IssuesSettingsConfig) GetSecurityScanOk() (*string, bool)`

GetSecurityScanOk returns a tuple with the SecurityScan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityScan

`func (o *IssuesSettingsConfig) SetSecurityScan(v string)`

SetSecurityScan sets SecurityScan field to given value.

### HasSecurityScan

`func (o *IssuesSettingsConfig) HasSecurityScan() bool`

HasSecurityScan returns a boolean if a field has been set.

### GetSeverities

`func (o *IssuesSettingsConfig) GetSeverities() []WizIssueSeverity`

GetSeverities returns the Severities field if non-nil, zero value otherwise.

### GetSeveritiesOk

`func (o *IssuesSettingsConfig) GetSeveritiesOk() (*[]WizIssueSeverity, bool)`

GetSeveritiesOk returns a tuple with the Severities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverities

`func (o *IssuesSettingsConfig) SetSeverities(v []WizIssueSeverity)`

SetSeverities sets Severities field to given value.

### HasSeverities

`func (o *IssuesSettingsConfig) HasSeverities() bool`

HasSeverities returns a boolean if a field has been set.

### GetStackLayers

`func (o *IssuesSettingsConfig) GetStackLayers() []WizStackLayer`

GetStackLayers returns the StackLayers field if non-nil, zero value otherwise.

### GetStackLayersOk

`func (o *IssuesSettingsConfig) GetStackLayersOk() (*[]WizStackLayer, bool)`

GetStackLayersOk returns a tuple with the StackLayers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackLayers

`func (o *IssuesSettingsConfig) SetStackLayers(v []WizStackLayer)`

SetStackLayers sets StackLayers field to given value.

### HasStackLayers

`func (o *IssuesSettingsConfig) HasStackLayers() bool`

HasStackLayers returns a boolean if a field has been set.

### GetStatus

`func (o *IssuesSettingsConfig) GetStatus() []WizIssueStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IssuesSettingsConfig) GetStatusOk() (*[]WizIssueStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IssuesSettingsConfig) SetStatus(v []WizIssueStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IssuesSettingsConfig) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTenantDataCenter

`func (o *IssuesSettingsConfig) GetTenantDataCenter() string`

GetTenantDataCenter returns the TenantDataCenter field if non-nil, zero value otherwise.

### GetTenantDataCenterOk

`func (o *IssuesSettingsConfig) GetTenantDataCenterOk() (*string, bool)`

GetTenantDataCenterOk returns a tuple with the TenantDataCenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantDataCenter

`func (o *IssuesSettingsConfig) SetTenantDataCenter(v string)`

SetTenantDataCenter sets TenantDataCenter field to given value.


### GetUseSyntheticData

`func (o *IssuesSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *IssuesSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *IssuesSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *IssuesSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


