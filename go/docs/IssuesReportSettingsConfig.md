# IssuesReportSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, A Wiz report is generated on the first sync. All syncs thereafter will be of incremental data. | [optional] 
**ControlIds** | Pointer to **[]string** | @Description Filter Issues created by specific control IDs | [optional] 
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**HasNote** | Pointer to **string** | @Description Filter Issues with or without a note | [optional] 
**HasRemediation** | Pointer to **string** | @Description Filter Issues with or without remediation | [optional] 
**HasServiceTicket** | Pointer to **string** | @Description Filter Issues with or without related service ticket | [optional] 
**IssueIds** | Pointer to **[]string** | @Description Filter only Issues that match these specific IDs | [optional] 
**IssueTypes** | Pointer to **[]string** | @Description Filter by Issue type | [optional] 
**ProjectIds** | Pointer to **[]string** | @Description Filter Issues associated with specific project IDs | [optional] 
**RelatedEntityId** | Pointer to **string** | @Description Filter by related entity ids | [optional] 
**ResolutionReasons** | Pointer to **[]string** | @Description Filter Issues by resolution reason | [optional] 
**RiskEqualsAll** | Pointer to **[]string** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present | [optional] 
**RiskEqualsAny** | Pointer to **[]string** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name | [optional] 
**SearchQuery** | Pointer to **string** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found | [optional] 
**SecurityScan** | Pointer to **string** | @Description Filter by security scan source | [optional] 
**Severities** | Pointer to **[]string** | @Description Filter Issues according to Control severity | [optional] 
**StackLayers** | Pointer to **[]string** | @Description Filter Issues from specific stack layers | [optional] 
**Status** | Pointer to **[]string** | @Description Filter by Issue handling status @Description Default: OPEN | [optional] 
**TenantDataCenter** | Pointer to **string** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewIssuesReportSettingsConfig

`func NewIssuesReportSettingsConfig() *IssuesReportSettingsConfig`

NewIssuesReportSettingsConfig instantiates a new IssuesReportSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssuesReportSettingsConfigWithDefaults

`func NewIssuesReportSettingsConfigWithDefaults() *IssuesReportSettingsConfig`

NewIssuesReportSettingsConfigWithDefaults instantiates a new IssuesReportSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *IssuesReportSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *IssuesReportSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *IssuesReportSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *IssuesReportSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetControlIds

`func (o *IssuesReportSettingsConfig) GetControlIds() []string`

GetControlIds returns the ControlIds field if non-nil, zero value otherwise.

### GetControlIdsOk

`func (o *IssuesReportSettingsConfig) GetControlIdsOk() (*[]string, bool)`

GetControlIdsOk returns a tuple with the ControlIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlIds

`func (o *IssuesReportSettingsConfig) SetControlIds(v []string)`

SetControlIds sets ControlIds field to given value.

### HasControlIds

`func (o *IssuesReportSettingsConfig) HasControlIds() bool`

HasControlIds returns a boolean if a field has been set.

### GetCron

`func (o *IssuesReportSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *IssuesReportSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *IssuesReportSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *IssuesReportSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetHasNote

`func (o *IssuesReportSettingsConfig) GetHasNote() string`

GetHasNote returns the HasNote field if non-nil, zero value otherwise.

### GetHasNoteOk

`func (o *IssuesReportSettingsConfig) GetHasNoteOk() (*string, bool)`

GetHasNoteOk returns a tuple with the HasNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNote

`func (o *IssuesReportSettingsConfig) SetHasNote(v string)`

SetHasNote sets HasNote field to given value.

### HasHasNote

`func (o *IssuesReportSettingsConfig) HasHasNote() bool`

HasHasNote returns a boolean if a field has been set.

### GetHasRemediation

`func (o *IssuesReportSettingsConfig) GetHasRemediation() string`

GetHasRemediation returns the HasRemediation field if non-nil, zero value otherwise.

### GetHasRemediationOk

`func (o *IssuesReportSettingsConfig) GetHasRemediationOk() (*string, bool)`

GetHasRemediationOk returns a tuple with the HasRemediation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasRemediation

`func (o *IssuesReportSettingsConfig) SetHasRemediation(v string)`

SetHasRemediation sets HasRemediation field to given value.

### HasHasRemediation

`func (o *IssuesReportSettingsConfig) HasHasRemediation() bool`

HasHasRemediation returns a boolean if a field has been set.

### GetHasServiceTicket

`func (o *IssuesReportSettingsConfig) GetHasServiceTicket() string`

GetHasServiceTicket returns the HasServiceTicket field if non-nil, zero value otherwise.

### GetHasServiceTicketOk

`func (o *IssuesReportSettingsConfig) GetHasServiceTicketOk() (*string, bool)`

GetHasServiceTicketOk returns a tuple with the HasServiceTicket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasServiceTicket

`func (o *IssuesReportSettingsConfig) SetHasServiceTicket(v string)`

SetHasServiceTicket sets HasServiceTicket field to given value.

### HasHasServiceTicket

`func (o *IssuesReportSettingsConfig) HasHasServiceTicket() bool`

HasHasServiceTicket returns a boolean if a field has been set.

### GetIssueIds

`func (o *IssuesReportSettingsConfig) GetIssueIds() []string`

GetIssueIds returns the IssueIds field if non-nil, zero value otherwise.

### GetIssueIdsOk

`func (o *IssuesReportSettingsConfig) GetIssueIdsOk() (*[]string, bool)`

GetIssueIdsOk returns a tuple with the IssueIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueIds

`func (o *IssuesReportSettingsConfig) SetIssueIds(v []string)`

SetIssueIds sets IssueIds field to given value.

### HasIssueIds

`func (o *IssuesReportSettingsConfig) HasIssueIds() bool`

HasIssueIds returns a boolean if a field has been set.

### GetIssueTypes

`func (o *IssuesReportSettingsConfig) GetIssueTypes() []string`

GetIssueTypes returns the IssueTypes field if non-nil, zero value otherwise.

### GetIssueTypesOk

`func (o *IssuesReportSettingsConfig) GetIssueTypesOk() (*[]string, bool)`

GetIssueTypesOk returns a tuple with the IssueTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueTypes

`func (o *IssuesReportSettingsConfig) SetIssueTypes(v []string)`

SetIssueTypes sets IssueTypes field to given value.

### HasIssueTypes

`func (o *IssuesReportSettingsConfig) HasIssueTypes() bool`

HasIssueTypes returns a boolean if a field has been set.

### GetProjectIds

`func (o *IssuesReportSettingsConfig) GetProjectIds() []string`

GetProjectIds returns the ProjectIds field if non-nil, zero value otherwise.

### GetProjectIdsOk

`func (o *IssuesReportSettingsConfig) GetProjectIdsOk() (*[]string, bool)`

GetProjectIdsOk returns a tuple with the ProjectIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectIds

`func (o *IssuesReportSettingsConfig) SetProjectIds(v []string)`

SetProjectIds sets ProjectIds field to given value.

### HasProjectIds

`func (o *IssuesReportSettingsConfig) HasProjectIds() bool`

HasProjectIds returns a boolean if a field has been set.

### GetRelatedEntityId

`func (o *IssuesReportSettingsConfig) GetRelatedEntityId() string`

GetRelatedEntityId returns the RelatedEntityId field if non-nil, zero value otherwise.

### GetRelatedEntityIdOk

`func (o *IssuesReportSettingsConfig) GetRelatedEntityIdOk() (*string, bool)`

GetRelatedEntityIdOk returns a tuple with the RelatedEntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedEntityId

`func (o *IssuesReportSettingsConfig) SetRelatedEntityId(v string)`

SetRelatedEntityId sets RelatedEntityId field to given value.

### HasRelatedEntityId

`func (o *IssuesReportSettingsConfig) HasRelatedEntityId() bool`

HasRelatedEntityId returns a boolean if a field has been set.

### GetResolutionReasons

`func (o *IssuesReportSettingsConfig) GetResolutionReasons() []string`

GetResolutionReasons returns the ResolutionReasons field if non-nil, zero value otherwise.

### GetResolutionReasonsOk

`func (o *IssuesReportSettingsConfig) GetResolutionReasonsOk() (*[]string, bool)`

GetResolutionReasonsOk returns a tuple with the ResolutionReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionReasons

`func (o *IssuesReportSettingsConfig) SetResolutionReasons(v []string)`

SetResolutionReasons sets ResolutionReasons field to given value.

### HasResolutionReasons

`func (o *IssuesReportSettingsConfig) HasResolutionReasons() bool`

HasResolutionReasons returns a boolean if a field has been set.

### GetRiskEqualsAll

`func (o *IssuesReportSettingsConfig) GetRiskEqualsAll() []string`

GetRiskEqualsAll returns the RiskEqualsAll field if non-nil, zero value otherwise.

### GetRiskEqualsAllOk

`func (o *IssuesReportSettingsConfig) GetRiskEqualsAllOk() (*[]string, bool)`

GetRiskEqualsAllOk returns a tuple with the RiskEqualsAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAll

`func (o *IssuesReportSettingsConfig) SetRiskEqualsAll(v []string)`

SetRiskEqualsAll sets RiskEqualsAll field to given value.

### HasRiskEqualsAll

`func (o *IssuesReportSettingsConfig) HasRiskEqualsAll() bool`

HasRiskEqualsAll returns a boolean if a field has been set.

### GetRiskEqualsAny

`func (o *IssuesReportSettingsConfig) GetRiskEqualsAny() []string`

GetRiskEqualsAny returns the RiskEqualsAny field if non-nil, zero value otherwise.

### GetRiskEqualsAnyOk

`func (o *IssuesReportSettingsConfig) GetRiskEqualsAnyOk() (*[]string, bool)`

GetRiskEqualsAnyOk returns a tuple with the RiskEqualsAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskEqualsAny

`func (o *IssuesReportSettingsConfig) SetRiskEqualsAny(v []string)`

SetRiskEqualsAny sets RiskEqualsAny field to given value.

### HasRiskEqualsAny

`func (o *IssuesReportSettingsConfig) HasRiskEqualsAny() bool`

HasRiskEqualsAny returns a boolean if a field has been set.

### GetSearchQuery

`func (o *IssuesReportSettingsConfig) GetSearchQuery() string`

GetSearchQuery returns the SearchQuery field if non-nil, zero value otherwise.

### GetSearchQueryOk

`func (o *IssuesReportSettingsConfig) GetSearchQueryOk() (*string, bool)`

GetSearchQueryOk returns a tuple with the SearchQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchQuery

`func (o *IssuesReportSettingsConfig) SetSearchQuery(v string)`

SetSearchQuery sets SearchQuery field to given value.

### HasSearchQuery

`func (o *IssuesReportSettingsConfig) HasSearchQuery() bool`

HasSearchQuery returns a boolean if a field has been set.

### GetSecurityScan

`func (o *IssuesReportSettingsConfig) GetSecurityScan() string`

GetSecurityScan returns the SecurityScan field if non-nil, zero value otherwise.

### GetSecurityScanOk

`func (o *IssuesReportSettingsConfig) GetSecurityScanOk() (*string, bool)`

GetSecurityScanOk returns a tuple with the SecurityScan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityScan

`func (o *IssuesReportSettingsConfig) SetSecurityScan(v string)`

SetSecurityScan sets SecurityScan field to given value.

### HasSecurityScan

`func (o *IssuesReportSettingsConfig) HasSecurityScan() bool`

HasSecurityScan returns a boolean if a field has been set.

### GetSeverities

`func (o *IssuesReportSettingsConfig) GetSeverities() []string`

GetSeverities returns the Severities field if non-nil, zero value otherwise.

### GetSeveritiesOk

`func (o *IssuesReportSettingsConfig) GetSeveritiesOk() (*[]string, bool)`

GetSeveritiesOk returns a tuple with the Severities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverities

`func (o *IssuesReportSettingsConfig) SetSeverities(v []string)`

SetSeverities sets Severities field to given value.

### HasSeverities

`func (o *IssuesReportSettingsConfig) HasSeverities() bool`

HasSeverities returns a boolean if a field has been set.

### GetStackLayers

`func (o *IssuesReportSettingsConfig) GetStackLayers() []string`

GetStackLayers returns the StackLayers field if non-nil, zero value otherwise.

### GetStackLayersOk

`func (o *IssuesReportSettingsConfig) GetStackLayersOk() (*[]string, bool)`

GetStackLayersOk returns a tuple with the StackLayers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackLayers

`func (o *IssuesReportSettingsConfig) SetStackLayers(v []string)`

SetStackLayers sets StackLayers field to given value.

### HasStackLayers

`func (o *IssuesReportSettingsConfig) HasStackLayers() bool`

HasStackLayers returns a boolean if a field has been set.

### GetStatus

`func (o *IssuesReportSettingsConfig) GetStatus() []string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IssuesReportSettingsConfig) GetStatusOk() (*[]string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IssuesReportSettingsConfig) SetStatus(v []string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IssuesReportSettingsConfig) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTenantDataCenter

`func (o *IssuesReportSettingsConfig) GetTenantDataCenter() string`

GetTenantDataCenter returns the TenantDataCenter field if non-nil, zero value otherwise.

### GetTenantDataCenterOk

`func (o *IssuesReportSettingsConfig) GetTenantDataCenterOk() (*string, bool)`

GetTenantDataCenterOk returns a tuple with the TenantDataCenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantDataCenter

`func (o *IssuesReportSettingsConfig) SetTenantDataCenter(v string)`

SetTenantDataCenter sets TenantDataCenter field to given value.

### HasTenantDataCenter

`func (o *IssuesReportSettingsConfig) HasTenantDataCenter() bool`

HasTenantDataCenter returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *IssuesReportSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *IssuesReportSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *IssuesReportSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *IssuesReportSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


