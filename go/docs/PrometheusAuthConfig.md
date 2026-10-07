# PrometheusAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Basic** | Pointer to [**PrometheusBasicVariant**](PrometheusBasicVariant.md) |  | [optional] 
**Bearer** | Pointer to [**PrometheusBearerVariant**](PrometheusBearerVariant.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusAuthConfig

`func NewPrometheusAuthConfig() *PrometheusAuthConfig`

NewPrometheusAuthConfig instantiates a new PrometheusAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusAuthConfigWithDefaults

`func NewPrometheusAuthConfigWithDefaults() *PrometheusAuthConfig`

NewPrometheusAuthConfigWithDefaults instantiates a new PrometheusAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBasic

`func (o *PrometheusAuthConfig) GetBasic() PrometheusBasicVariant`

GetBasic returns the Basic field if non-nil, zero value otherwise.

### GetBasicOk

`func (o *PrometheusAuthConfig) GetBasicOk() (*PrometheusBasicVariant, bool)`

GetBasicOk returns a tuple with the Basic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasic

`func (o *PrometheusAuthConfig) SetBasic(v PrometheusBasicVariant)`

SetBasic sets Basic field to given value.

### HasBasic

`func (o *PrometheusAuthConfig) HasBasic() bool`

HasBasic returns a boolean if a field has been set.

### GetBearer

`func (o *PrometheusAuthConfig) GetBearer() PrometheusBearerVariant`

GetBearer returns the Bearer field if non-nil, zero value otherwise.

### GetBearerOk

`func (o *PrometheusAuthConfig) GetBearerOk() (*PrometheusBearerVariant, bool)`

GetBearerOk returns a tuple with the Bearer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearer

`func (o *PrometheusAuthConfig) SetBearer(v PrometheusBearerVariant)`

SetBearer sets Bearer field to given value.

### HasBearer

`func (o *PrometheusAuthConfig) HasBearer() bool`

HasBearer returns a boolean if a field has been set.

### GetType

`func (o *PrometheusAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PrometheusAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PrometheusAuthConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PrometheusAuthConfig) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


