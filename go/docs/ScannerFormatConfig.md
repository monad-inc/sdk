# ScannerFormatConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delimited** | Pointer to [**ScannerDelimitedVariant**](ScannerDelimitedVariant.md) |  | [optional] 
**Json** | Pointer to [**ScannerJSONVariant**](ScannerJSONVariant.md) |  | [optional] 
**Parquet** | Pointer to [**ScannerParquetVariant**](ScannerParquetVariant.md) |  | [optional] 
**Type** | **string** | Output format: json, parquet, or delimited. | 

## Methods

### NewScannerFormatConfig

`func NewScannerFormatConfig(type_ string, ) *ScannerFormatConfig`

NewScannerFormatConfig instantiates a new ScannerFormatConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScannerFormatConfigWithDefaults

`func NewScannerFormatConfigWithDefaults() *ScannerFormatConfig`

NewScannerFormatConfigWithDefaults instantiates a new ScannerFormatConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelimited

`func (o *ScannerFormatConfig) GetDelimited() ScannerDelimitedVariant`

GetDelimited returns the Delimited field if non-nil, zero value otherwise.

### GetDelimitedOk

`func (o *ScannerFormatConfig) GetDelimitedOk() (*ScannerDelimitedVariant, bool)`

GetDelimitedOk returns a tuple with the Delimited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimited

`func (o *ScannerFormatConfig) SetDelimited(v ScannerDelimitedVariant)`

SetDelimited sets Delimited field to given value.

### HasDelimited

`func (o *ScannerFormatConfig) HasDelimited() bool`

HasDelimited returns a boolean if a field has been set.

### GetJson

`func (o *ScannerFormatConfig) GetJson() ScannerJSONVariant`

GetJson returns the Json field if non-nil, zero value otherwise.

### GetJsonOk

`func (o *ScannerFormatConfig) GetJsonOk() (*ScannerJSONVariant, bool)`

GetJsonOk returns a tuple with the Json field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJson

`func (o *ScannerFormatConfig) SetJson(v ScannerJSONVariant)`

SetJson sets Json field to given value.

### HasJson

`func (o *ScannerFormatConfig) HasJson() bool`

HasJson returns a boolean if a field has been set.

### GetParquet

`func (o *ScannerFormatConfig) GetParquet() ScannerParquetVariant`

GetParquet returns the Parquet field if non-nil, zero value otherwise.

### GetParquetOk

`func (o *ScannerFormatConfig) GetParquetOk() (*ScannerParquetVariant, bool)`

GetParquetOk returns a tuple with the Parquet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParquet

`func (o *ScannerFormatConfig) SetParquet(v ScannerParquetVariant)`

SetParquet sets Parquet field to given value.

### HasParquet

`func (o *ScannerFormatConfig) HasParquet() bool`

HasParquet returns a boolean if a field has been set.

### GetType

`func (o *ScannerFormatConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScannerFormatConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScannerFormatConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


