# TsugaSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | **string** | Base URL of the Tsuga cluster&#39;s intake, e.g. https://intake.&lt;cluster&gt;.tsuga.com | 

## Methods

### NewTsugaSettingsConfig

`func NewTsugaSettingsConfig(endpoint string, ) *TsugaSettingsConfig`

NewTsugaSettingsConfig instantiates a new TsugaSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTsugaSettingsConfigWithDefaults

`func NewTsugaSettingsConfigWithDefaults() *TsugaSettingsConfig`

NewTsugaSettingsConfigWithDefaults instantiates a new TsugaSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpoint

`func (o *TsugaSettingsConfig) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *TsugaSettingsConfig) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *TsugaSettingsConfig) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


