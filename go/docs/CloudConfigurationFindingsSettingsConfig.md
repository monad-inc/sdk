# CloudConfigurationFindingsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndpointUrl** | Pointer to **string** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-configuration-findings&#39;. | [optional] 
**Result** | Pointer to **[]string** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. | [optional] 
**Severity** | Pointer to **[]string** | Severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. | [optional] 
**Status** | Pointer to **[]string** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewCloudConfigurationFindingsSettingsConfig

`func NewCloudConfigurationFindingsSettingsConfig() *CloudConfigurationFindingsSettingsConfig`

NewCloudConfigurationFindingsSettingsConfig instantiates a new CloudConfigurationFindingsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudConfigurationFindingsSettingsConfigWithDefaults

`func NewCloudConfigurationFindingsSettingsConfigWithDefaults() *CloudConfigurationFindingsSettingsConfig`

NewCloudConfigurationFindingsSettingsConfigWithDefaults instantiates a new CloudConfigurationFindingsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpointUrl

`func (o *CloudConfigurationFindingsSettingsConfig) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *CloudConfigurationFindingsSettingsConfig) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *CloudConfigurationFindingsSettingsConfig) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *CloudConfigurationFindingsSettingsConfig) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.

### GetResult

`func (o *CloudConfigurationFindingsSettingsConfig) GetResult() []string`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *CloudConfigurationFindingsSettingsConfig) GetResultOk() (*[]string, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *CloudConfigurationFindingsSettingsConfig) SetResult(v []string)`

SetResult sets Result field to given value.

### HasResult

`func (o *CloudConfigurationFindingsSettingsConfig) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetSeverity

`func (o *CloudConfigurationFindingsSettingsConfig) GetSeverity() []string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *CloudConfigurationFindingsSettingsConfig) GetSeverityOk() (*[]string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *CloudConfigurationFindingsSettingsConfig) SetSeverity(v []string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *CloudConfigurationFindingsSettingsConfig) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetStatus

`func (o *CloudConfigurationFindingsSettingsConfig) GetStatus() []string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CloudConfigurationFindingsSettingsConfig) GetStatusOk() (*[]string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CloudConfigurationFindingsSettingsConfig) SetStatus(v []string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CloudConfigurationFindingsSettingsConfig) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudConfigurationFindingsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudConfigurationFindingsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudConfigurationFindingsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudConfigurationFindingsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


