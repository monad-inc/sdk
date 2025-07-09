# IamAccessAnalyzerSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AnalyzerArn** | Pointer to **string** | The [ARN of the analyzer] to retrieve findings from. | [optional] 
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*_/15 * * * *&#x60; - Every 15 minutes | [optional] 
**Filters** | Pointer to [**[]IamAccessAnalyzerFilter**](IamAccessAnalyzerFilter.md) | A filter to match for the findings to return. | [optional] 
**Region** | Pointer to **string** | The Region that you would receieve findings for | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the role to assume to access the bucket | [optional] 

## Methods

### NewIamAccessAnalyzerSettingsConfig

`func NewIamAccessAnalyzerSettingsConfig() *IamAccessAnalyzerSettingsConfig`

NewIamAccessAnalyzerSettingsConfig instantiates a new IamAccessAnalyzerSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIamAccessAnalyzerSettingsConfigWithDefaults

`func NewIamAccessAnalyzerSettingsConfigWithDefaults() *IamAccessAnalyzerSettingsConfig`

NewIamAccessAnalyzerSettingsConfigWithDefaults instantiates a new IamAccessAnalyzerSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnalyzerArn

`func (o *IamAccessAnalyzerSettingsConfig) GetAnalyzerArn() string`

GetAnalyzerArn returns the AnalyzerArn field if non-nil, zero value otherwise.

### GetAnalyzerArnOk

`func (o *IamAccessAnalyzerSettingsConfig) GetAnalyzerArnOk() (*string, bool)`

GetAnalyzerArnOk returns a tuple with the AnalyzerArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalyzerArn

`func (o *IamAccessAnalyzerSettingsConfig) SetAnalyzerArn(v string)`

SetAnalyzerArn sets AnalyzerArn field to given value.

### HasAnalyzerArn

`func (o *IamAccessAnalyzerSettingsConfig) HasAnalyzerArn() bool`

HasAnalyzerArn returns a boolean if a field has been set.

### GetCron

`func (o *IamAccessAnalyzerSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *IamAccessAnalyzerSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *IamAccessAnalyzerSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *IamAccessAnalyzerSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFilters

`func (o *IamAccessAnalyzerSettingsConfig) GetFilters() []IamAccessAnalyzerFilter`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *IamAccessAnalyzerSettingsConfig) GetFiltersOk() (*[]IamAccessAnalyzerFilter, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *IamAccessAnalyzerSettingsConfig) SetFilters(v []IamAccessAnalyzerFilter)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *IamAccessAnalyzerSettingsConfig) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetRegion

`func (o *IamAccessAnalyzerSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *IamAccessAnalyzerSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *IamAccessAnalyzerSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *IamAccessAnalyzerSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *IamAccessAnalyzerSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *IamAccessAnalyzerSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *IamAccessAnalyzerSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *IamAccessAnalyzerSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


