# DatadogSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ddsource** | Pointer to **string** | The integration name associated with your log: the technology from which the log originated. When it matches an integration name, Datadog automatically installs the corresponding parsers and facets. | [optional] 
**Ddtags** | Pointer to **[]string** | Tags associated with your logs. | [optional] 
**DomainUrl** | Pointer to **string** | The base domain of the Datadog API (e.g., us5.datadoghq.com). Logs are sent to https://http-intake.logs.&lt;DOMAIN_URL&gt;/api/v2/logs | [optional] 
**Hostname** | Pointer to **string** | The name of the originating host of the log. | [optional] 
**Service** | Pointer to **string** | The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products. | [optional] 

## Methods

### NewDatadogSettingsConfig

`func NewDatadogSettingsConfig() *DatadogSettingsConfig`

NewDatadogSettingsConfig instantiates a new DatadogSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatadogSettingsConfigWithDefaults

`func NewDatadogSettingsConfigWithDefaults() *DatadogSettingsConfig`

NewDatadogSettingsConfigWithDefaults instantiates a new DatadogSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDdsource

`func (o *DatadogSettingsConfig) GetDdsource() string`

GetDdsource returns the Ddsource field if non-nil, zero value otherwise.

### GetDdsourceOk

`func (o *DatadogSettingsConfig) GetDdsourceOk() (*string, bool)`

GetDdsourceOk returns a tuple with the Ddsource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDdsource

`func (o *DatadogSettingsConfig) SetDdsource(v string)`

SetDdsource sets Ddsource field to given value.

### HasDdsource

`func (o *DatadogSettingsConfig) HasDdsource() bool`

HasDdsource returns a boolean if a field has been set.

### GetDdtags

`func (o *DatadogSettingsConfig) GetDdtags() []string`

GetDdtags returns the Ddtags field if non-nil, zero value otherwise.

### GetDdtagsOk

`func (o *DatadogSettingsConfig) GetDdtagsOk() (*[]string, bool)`

GetDdtagsOk returns a tuple with the Ddtags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDdtags

`func (o *DatadogSettingsConfig) SetDdtags(v []string)`

SetDdtags sets Ddtags field to given value.

### HasDdtags

`func (o *DatadogSettingsConfig) HasDdtags() bool`

HasDdtags returns a boolean if a field has been set.

### GetDomainUrl

`func (o *DatadogSettingsConfig) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *DatadogSettingsConfig) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *DatadogSettingsConfig) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.

### HasDomainUrl

`func (o *DatadogSettingsConfig) HasDomainUrl() bool`

HasDomainUrl returns a boolean if a field has been set.

### GetHostname

`func (o *DatadogSettingsConfig) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *DatadogSettingsConfig) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *DatadogSettingsConfig) SetHostname(v string)`

SetHostname sets Hostname field to given value.

### HasHostname

`func (o *DatadogSettingsConfig) HasHostname() bool`

HasHostname returns a boolean if a field has been set.

### GetService

`func (o *DatadogSettingsConfig) GetService() string`

GetService returns the Service field if non-nil, zero value otherwise.

### GetServiceOk

`func (o *DatadogSettingsConfig) GetServiceOk() (*string, bool)`

GetServiceOk returns a tuple with the Service field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetService

`func (o *DatadogSettingsConfig) SetService(v string)`

SetService sets Service field to given value.

### HasService

`func (o *DatadogSettingsConfig) HasService() bool`

HasService returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


