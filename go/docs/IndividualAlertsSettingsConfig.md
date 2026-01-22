# IndividualAlertsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertType** | Pointer to **string** | Filter by alert type (e.g., policy_violated, tag_conflict) | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Embed** | Pointer to **string** | Embed related resources in the data returned (e.g., read-consolidated-alert) | [optional] 
**PrimaryEntityType** | Pointer to **string** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) | [optional] 
**PrimaryEntityValue** | Pointer to **string** | Filter by primary entity value (contains search) | [optional] 
**Region** | Pointer to **string** | The region associated with your Clumio account | [optional] 
**Severity** | Pointer to **string** | Filter by alert severity (error, warning) | [optional] 
**Status** | Pointer to **string** | Filter by alert status (active, cleared) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewIndividualAlertsSettingsConfig

`func NewIndividualAlertsSettingsConfig() *IndividualAlertsSettingsConfig`

NewIndividualAlertsSettingsConfig instantiates a new IndividualAlertsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIndividualAlertsSettingsConfigWithDefaults

`func NewIndividualAlertsSettingsConfigWithDefaults() *IndividualAlertsSettingsConfig`

NewIndividualAlertsSettingsConfigWithDefaults instantiates a new IndividualAlertsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertType

`func (o *IndividualAlertsSettingsConfig) GetAlertType() string`

GetAlertType returns the AlertType field if non-nil, zero value otherwise.

### GetAlertTypeOk

`func (o *IndividualAlertsSettingsConfig) GetAlertTypeOk() (*string, bool)`

GetAlertTypeOk returns a tuple with the AlertType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertType

`func (o *IndividualAlertsSettingsConfig) SetAlertType(v string)`

SetAlertType sets AlertType field to given value.

### HasAlertType

`func (o *IndividualAlertsSettingsConfig) HasAlertType() bool`

HasAlertType returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *IndividualAlertsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *IndividualAlertsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *IndividualAlertsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *IndividualAlertsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetEmbed

`func (o *IndividualAlertsSettingsConfig) GetEmbed() string`

GetEmbed returns the Embed field if non-nil, zero value otherwise.

### GetEmbedOk

`func (o *IndividualAlertsSettingsConfig) GetEmbedOk() (*string, bool)`

GetEmbedOk returns a tuple with the Embed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbed

`func (o *IndividualAlertsSettingsConfig) SetEmbed(v string)`

SetEmbed sets Embed field to given value.

### HasEmbed

`func (o *IndividualAlertsSettingsConfig) HasEmbed() bool`

HasEmbed returns a boolean if a field has been set.

### GetPrimaryEntityType

`func (o *IndividualAlertsSettingsConfig) GetPrimaryEntityType() string`

GetPrimaryEntityType returns the PrimaryEntityType field if non-nil, zero value otherwise.

### GetPrimaryEntityTypeOk

`func (o *IndividualAlertsSettingsConfig) GetPrimaryEntityTypeOk() (*string, bool)`

GetPrimaryEntityTypeOk returns a tuple with the PrimaryEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEntityType

`func (o *IndividualAlertsSettingsConfig) SetPrimaryEntityType(v string)`

SetPrimaryEntityType sets PrimaryEntityType field to given value.

### HasPrimaryEntityType

`func (o *IndividualAlertsSettingsConfig) HasPrimaryEntityType() bool`

HasPrimaryEntityType returns a boolean if a field has been set.

### GetPrimaryEntityValue

`func (o *IndividualAlertsSettingsConfig) GetPrimaryEntityValue() string`

GetPrimaryEntityValue returns the PrimaryEntityValue field if non-nil, zero value otherwise.

### GetPrimaryEntityValueOk

`func (o *IndividualAlertsSettingsConfig) GetPrimaryEntityValueOk() (*string, bool)`

GetPrimaryEntityValueOk returns a tuple with the PrimaryEntityValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEntityValue

`func (o *IndividualAlertsSettingsConfig) SetPrimaryEntityValue(v string)`

SetPrimaryEntityValue sets PrimaryEntityValue field to given value.

### HasPrimaryEntityValue

`func (o *IndividualAlertsSettingsConfig) HasPrimaryEntityValue() bool`

HasPrimaryEntityValue returns a boolean if a field has been set.

### GetRegion

`func (o *IndividualAlertsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *IndividualAlertsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *IndividualAlertsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *IndividualAlertsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetSeverity

`func (o *IndividualAlertsSettingsConfig) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *IndividualAlertsSettingsConfig) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *IndividualAlertsSettingsConfig) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *IndividualAlertsSettingsConfig) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetStatus

`func (o *IndividualAlertsSettingsConfig) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IndividualAlertsSettingsConfig) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IndividualAlertsSettingsConfig) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IndividualAlertsSettingsConfig) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *IndividualAlertsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *IndividualAlertsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *IndividualAlertsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *IndividualAlertsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


