# PrometheusSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Auth** | Pointer to [**PrometheusAuthConfig**](PrometheusAuthConfig.md) |  | [optional] 
**Endpoint** | Pointer to **string** |  | [optional] 
**LabelFields** | Pointer to **[]string** |  | [optional] 
**MetricName** | Pointer to [**PrometheusMetricNameConfig**](PrometheusMetricNameConfig.md) |  | [optional] 
**TimestampField** | Pointer to **string** |  | [optional] 
**TlsSkipVerify** | Pointer to **bool** |  | [optional] 
**ValueField** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusSettingsConfig

`func NewPrometheusSettingsConfig() *PrometheusSettingsConfig`

NewPrometheusSettingsConfig instantiates a new PrometheusSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusSettingsConfigWithDefaults

`func NewPrometheusSettingsConfigWithDefaults() *PrometheusSettingsConfig`

NewPrometheusSettingsConfigWithDefaults instantiates a new PrometheusSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuth

`func (o *PrometheusSettingsConfig) GetAuth() PrometheusAuthConfig`

GetAuth returns the Auth field if non-nil, zero value otherwise.

### GetAuthOk

`func (o *PrometheusSettingsConfig) GetAuthOk() (*PrometheusAuthConfig, bool)`

GetAuthOk returns a tuple with the Auth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuth

`func (o *PrometheusSettingsConfig) SetAuth(v PrometheusAuthConfig)`

SetAuth sets Auth field to given value.

### HasAuth

`func (o *PrometheusSettingsConfig) HasAuth() bool`

HasAuth returns a boolean if a field has been set.

### GetEndpoint

`func (o *PrometheusSettingsConfig) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *PrometheusSettingsConfig) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *PrometheusSettingsConfig) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *PrometheusSettingsConfig) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetLabelFields

`func (o *PrometheusSettingsConfig) GetLabelFields() []string`

GetLabelFields returns the LabelFields field if non-nil, zero value otherwise.

### GetLabelFieldsOk

`func (o *PrometheusSettingsConfig) GetLabelFieldsOk() (*[]string, bool)`

GetLabelFieldsOk returns a tuple with the LabelFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelFields

`func (o *PrometheusSettingsConfig) SetLabelFields(v []string)`

SetLabelFields sets LabelFields field to given value.

### HasLabelFields

`func (o *PrometheusSettingsConfig) HasLabelFields() bool`

HasLabelFields returns a boolean if a field has been set.

### GetMetricName

`func (o *PrometheusSettingsConfig) GetMetricName() PrometheusMetricNameConfig`

GetMetricName returns the MetricName field if non-nil, zero value otherwise.

### GetMetricNameOk

`func (o *PrometheusSettingsConfig) GetMetricNameOk() (*PrometheusMetricNameConfig, bool)`

GetMetricNameOk returns a tuple with the MetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricName

`func (o *PrometheusSettingsConfig) SetMetricName(v PrometheusMetricNameConfig)`

SetMetricName sets MetricName field to given value.

### HasMetricName

`func (o *PrometheusSettingsConfig) HasMetricName() bool`

HasMetricName returns a boolean if a field has been set.

### GetTimestampField

`func (o *PrometheusSettingsConfig) GetTimestampField() string`

GetTimestampField returns the TimestampField field if non-nil, zero value otherwise.

### GetTimestampFieldOk

`func (o *PrometheusSettingsConfig) GetTimestampFieldOk() (*string, bool)`

GetTimestampFieldOk returns a tuple with the TimestampField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampField

`func (o *PrometheusSettingsConfig) SetTimestampField(v string)`

SetTimestampField sets TimestampField field to given value.

### HasTimestampField

`func (o *PrometheusSettingsConfig) HasTimestampField() bool`

HasTimestampField returns a boolean if a field has been set.

### GetTlsSkipVerify

`func (o *PrometheusSettingsConfig) GetTlsSkipVerify() bool`

GetTlsSkipVerify returns the TlsSkipVerify field if non-nil, zero value otherwise.

### GetTlsSkipVerifyOk

`func (o *PrometheusSettingsConfig) GetTlsSkipVerifyOk() (*bool, bool)`

GetTlsSkipVerifyOk returns a tuple with the TlsSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsSkipVerify

`func (o *PrometheusSettingsConfig) SetTlsSkipVerify(v bool)`

SetTlsSkipVerify sets TlsSkipVerify field to given value.

### HasTlsSkipVerify

`func (o *PrometheusSettingsConfig) HasTlsSkipVerify() bool`

HasTlsSkipVerify returns a boolean if a field has been set.

### GetValueField

`func (o *PrometheusSettingsConfig) GetValueField() string`

GetValueField returns the ValueField field if non-nil, zero value otherwise.

### GetValueFieldOk

`func (o *PrometheusSettingsConfig) GetValueFieldOk() (*string, bool)`

GetValueFieldOk returns a tuple with the ValueField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueField

`func (o *PrometheusSettingsConfig) SetValueField(v string)`

SetValueField sets ValueField field to given value.

### HasValueField

`func (o *PrometheusSettingsConfig) HasValueField() bool`

HasValueField returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


