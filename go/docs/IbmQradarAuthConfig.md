# IbmQradarAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Basic** | Pointer to [**IbmQradarBasicAuthVariant**](IbmQradarBasicAuthVariant.md) |  | [optional] 
**Header** | Pointer to [**IbmQradarHeaderAuthVariant**](IbmQradarHeaderAuthVariant.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewIbmQradarAuthConfig

`func NewIbmQradarAuthConfig(type_ string, ) *IbmQradarAuthConfig`

NewIbmQradarAuthConfig instantiates a new IbmQradarAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIbmQradarAuthConfigWithDefaults

`func NewIbmQradarAuthConfigWithDefaults() *IbmQradarAuthConfig`

NewIbmQradarAuthConfigWithDefaults instantiates a new IbmQradarAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBasic

`func (o *IbmQradarAuthConfig) GetBasic() IbmQradarBasicAuthVariant`

GetBasic returns the Basic field if non-nil, zero value otherwise.

### GetBasicOk

`func (o *IbmQradarAuthConfig) GetBasicOk() (*IbmQradarBasicAuthVariant, bool)`

GetBasicOk returns a tuple with the Basic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasic

`func (o *IbmQradarAuthConfig) SetBasic(v IbmQradarBasicAuthVariant)`

SetBasic sets Basic field to given value.

### HasBasic

`func (o *IbmQradarAuthConfig) HasBasic() bool`

HasBasic returns a boolean if a field has been set.

### GetHeader

`func (o *IbmQradarAuthConfig) GetHeader() IbmQradarHeaderAuthVariant`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *IbmQradarAuthConfig) GetHeaderOk() (*IbmQradarHeaderAuthVariant, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *IbmQradarAuthConfig) SetHeader(v IbmQradarHeaderAuthVariant)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *IbmQradarAuthConfig) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### GetType

`func (o *IbmQradarAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IbmQradarAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IbmQradarAuthConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


