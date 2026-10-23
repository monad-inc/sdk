

# DatabricksLakehouseMonadManagedPipeline


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**interval** | **Integer** | How often the pipeline runs, in minutes; defaults to 60 |  [optional] |
|**schemaEvolutionMode** | [**SchemaEvolutionModeEnum**](#SchemaEvolutionModeEnum) | How Auto Loader handles fields that aren&#39;t in the inferred schema; defaults to addNewColumns |  [optional] |
|**tableName** | **String** | The bronze table the pipeline writes into; defaults to bronze_&lt;volume&gt; |  [optional] |



## Enum: SchemaEvolutionModeEnum

| Name | Value |
|---- | -----|
| ADD_NEW_COLUMNS | &quot;addNewColumns&quot; |
| RESCUE | &quot;rescue&quot; |
| FAIL_ON_NEW_COLUMNS | &quot;failOnNewColumns&quot; |
| NONE | &quot;none&quot; |



