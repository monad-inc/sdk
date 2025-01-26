# FormatterFormatConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Format** | Pointer to **string** |  | [optional] 
**DelimitedFormat** | Pointer to [**DelimitedDelimiterFormatter**](DelimitedDelimiterFormatter.md) |  | [optional] 
**JsonFormat** | Pointer to [**JsonJsonFormatter**](JsonJsonFormatter.md) |  | [optional] 
**ParquetFormat** | Pointer to [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 

## Methods

### NewFormatterFormatConfig

`func NewFormatterFormatConfig() *FormatterFormatConfig`

NewFormatterFormatConfig instantiates a new FormatterFormatConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormatterFormatConfigWithDefaults

`func NewFormatterFormatConfigWithDefaults() *FormatterFormatConfig`

NewFormatterFormatConfigWithDefaults instantiates a new FormatterFormatConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormat

`func (o *FormatterFormatConfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *FormatterFormatConfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *FormatterFormatConfig) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *FormatterFormatConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetDelimitedFormat

`func (o *FormatterFormatConfig) GetDelimitedFormat() DelimitedDelimiterFormatter`

GetDelimitedFormat returns the DelimitedFormat field if non-nil, zero value otherwise.

### GetDelimitedFormatOk

`func (o *FormatterFormatConfig) GetDelimitedFormatOk() (*DelimitedDelimiterFormatter, bool)`

GetDelimitedFormatOk returns a tuple with the DelimitedFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimitedFormat

`func (o *FormatterFormatConfig) SetDelimitedFormat(v DelimitedDelimiterFormatter)`

SetDelimitedFormat sets DelimitedFormat field to given value.

### HasDelimitedFormat

`func (o *FormatterFormatConfig) HasDelimitedFormat() bool`

HasDelimitedFormat returns a boolean if a field has been set.

### GetJsonFormat

`func (o *FormatterFormatConfig) GetJsonFormat() JsonJsonFormatter`

GetJsonFormat returns the JsonFormat field if non-nil, zero value otherwise.

### GetJsonFormatOk

`func (o *FormatterFormatConfig) GetJsonFormatOk() (*JsonJsonFormatter, bool)`

GetJsonFormatOk returns a tuple with the JsonFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonFormat

`func (o *FormatterFormatConfig) SetJsonFormat(v JsonJsonFormatter)`

SetJsonFormat sets JsonFormat field to given value.

### HasJsonFormat

`func (o *FormatterFormatConfig) HasJsonFormat() bool`

HasJsonFormat returns a boolean if a field has been set.

### GetParquetFormat

`func (o *FormatterFormatConfig) GetParquetFormat() ParquetParquetFormatter`

GetParquetFormat returns the ParquetFormat field if non-nil, zero value otherwise.

### GetParquetFormatOk

`func (o *FormatterFormatConfig) GetParquetFormatOk() (*ParquetParquetFormatter, bool)`

GetParquetFormatOk returns a tuple with the ParquetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParquetFormat

`func (o *FormatterFormatConfig) SetParquetFormat(v ParquetParquetFormatter)`

SetParquetFormat sets ParquetFormat field to given value.

### HasParquetFormat

`func (o *FormatterFormatConfig) HasParquetFormat() bool`

HasParquetFormat returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


