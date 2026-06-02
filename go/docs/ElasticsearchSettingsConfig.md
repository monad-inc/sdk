# ElasticsearchSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthConfig** | Pointer to [**ElasticsearchAuthConfig**](ElasticsearchAuthConfig.md) |  | [optional] 
**AuthType** | Pointer to **string** | DEPRECATED: use AuthConfig &amp; ConnectionConfig instead | [optional] 
**CloudId** | Pointer to **string** |  | [optional] 
**ConnectionConfig** | Pointer to [**ElasticsearchConnectionConfig**](ElasticsearchConnectionConfig.md) |  | [optional] 
**ConnectionType** | Pointer to **string** |  | [optional] 
**Index** | **string** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. | 
**InsecureSkipVerify** | Pointer to **bool** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**Username** | **string** | Username for authenticating with the Elasticsearch cluster. | 

## Methods

### NewElasticsearchSettingsConfig

`func NewElasticsearchSettingsConfig(index string, username string, ) *ElasticsearchSettingsConfig`

NewElasticsearchSettingsConfig instantiates a new ElasticsearchSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewElasticsearchSettingsConfigWithDefaults

`func NewElasticsearchSettingsConfigWithDefaults() *ElasticsearchSettingsConfig`

NewElasticsearchSettingsConfigWithDefaults instantiates a new ElasticsearchSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthConfig

`func (o *ElasticsearchSettingsConfig) GetAuthConfig() ElasticsearchAuthConfig`

GetAuthConfig returns the AuthConfig field if non-nil, zero value otherwise.

### GetAuthConfigOk

`func (o *ElasticsearchSettingsConfig) GetAuthConfigOk() (*ElasticsearchAuthConfig, bool)`

GetAuthConfigOk returns a tuple with the AuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthConfig

`func (o *ElasticsearchSettingsConfig) SetAuthConfig(v ElasticsearchAuthConfig)`

SetAuthConfig sets AuthConfig field to given value.

### HasAuthConfig

`func (o *ElasticsearchSettingsConfig) HasAuthConfig() bool`

HasAuthConfig returns a boolean if a field has been set.

### GetAuthType

`func (o *ElasticsearchSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *ElasticsearchSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *ElasticsearchSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *ElasticsearchSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetCloudId

`func (o *ElasticsearchSettingsConfig) GetCloudId() string`

GetCloudId returns the CloudId field if non-nil, zero value otherwise.

### GetCloudIdOk

`func (o *ElasticsearchSettingsConfig) GetCloudIdOk() (*string, bool)`

GetCloudIdOk returns a tuple with the CloudId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudId

`func (o *ElasticsearchSettingsConfig) SetCloudId(v string)`

SetCloudId sets CloudId field to given value.

### HasCloudId

`func (o *ElasticsearchSettingsConfig) HasCloudId() bool`

HasCloudId returns a boolean if a field has been set.

### GetConnectionConfig

`func (o *ElasticsearchSettingsConfig) GetConnectionConfig() ElasticsearchConnectionConfig`

GetConnectionConfig returns the ConnectionConfig field if non-nil, zero value otherwise.

### GetConnectionConfigOk

`func (o *ElasticsearchSettingsConfig) GetConnectionConfigOk() (*ElasticsearchConnectionConfig, bool)`

GetConnectionConfigOk returns a tuple with the ConnectionConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionConfig

`func (o *ElasticsearchSettingsConfig) SetConnectionConfig(v ElasticsearchConnectionConfig)`

SetConnectionConfig sets ConnectionConfig field to given value.

### HasConnectionConfig

`func (o *ElasticsearchSettingsConfig) HasConnectionConfig() bool`

HasConnectionConfig returns a boolean if a field has been set.

### GetConnectionType

`func (o *ElasticsearchSettingsConfig) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *ElasticsearchSettingsConfig) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *ElasticsearchSettingsConfig) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *ElasticsearchSettingsConfig) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetIndex

`func (o *ElasticsearchSettingsConfig) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *ElasticsearchSettingsConfig) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *ElasticsearchSettingsConfig) SetIndex(v string)`

SetIndex sets Index field to given value.


### GetInsecureSkipVerify

`func (o *ElasticsearchSettingsConfig) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *ElasticsearchSettingsConfig) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *ElasticsearchSettingsConfig) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *ElasticsearchSettingsConfig) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetUrl

`func (o *ElasticsearchSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ElasticsearchSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ElasticsearchSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ElasticsearchSettingsConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetUsername

`func (o *ElasticsearchSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *ElasticsearchSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *ElasticsearchSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


