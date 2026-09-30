# CriblHttpSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IngressAddress** | Pointer to **string** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. | [optional] 
**Path** | Pointer to **string** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. | [optional] 
**Port** | Pointer to **int32** | The port you&#39;ve set your HTTP Source to listen on. This should be the port number where your Cribl HTTP Source is configured to receive data. | [optional] 

## Methods

### NewCriblHttpSettingsConfig

`func NewCriblHttpSettingsConfig() *CriblHttpSettingsConfig`

NewCriblHttpSettingsConfig instantiates a new CriblHttpSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCriblHttpSettingsConfigWithDefaults

`func NewCriblHttpSettingsConfigWithDefaults() *CriblHttpSettingsConfig`

NewCriblHttpSettingsConfigWithDefaults instantiates a new CriblHttpSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIngressAddress

`func (o *CriblHttpSettingsConfig) GetIngressAddress() string`

GetIngressAddress returns the IngressAddress field if non-nil, zero value otherwise.

### GetIngressAddressOk

`func (o *CriblHttpSettingsConfig) GetIngressAddressOk() (*string, bool)`

GetIngressAddressOk returns a tuple with the IngressAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngressAddress

`func (o *CriblHttpSettingsConfig) SetIngressAddress(v string)`

SetIngressAddress sets IngressAddress field to given value.

### HasIngressAddress

`func (o *CriblHttpSettingsConfig) HasIngressAddress() bool`

HasIngressAddress returns a boolean if a field has been set.

### GetPath

`func (o *CriblHttpSettingsConfig) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *CriblHttpSettingsConfig) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *CriblHttpSettingsConfig) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *CriblHttpSettingsConfig) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetPort

`func (o *CriblHttpSettingsConfig) GetPort() int32`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *CriblHttpSettingsConfig) GetPortOk() (*int32, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *CriblHttpSettingsConfig) SetPort(v int32)`

SetPort sets Port field to given value.

### HasPort

`func (o *CriblHttpSettingsConfig) HasPort() bool`

HasPort returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


