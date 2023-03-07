# index

## select row

```
 data.iloc[4:6]
```

## select by column

```
data['population']
data[['population']] // with column name

```

## select by row and column

```
 data.loc[4:6, ['year']]

data.loc[4:6, 'nation': 'year']
data.loc[4:6, [0,2]]
```

## add a new column

```
data['newColunm'] = np.sqrt(data['population']).astype(int)

```

## delete a column

```
data = data.drop(column=['sqrtPopulation'])
```

## change the value

```
data.iloc[3,4] = True
```

# File Input/Oupput

## read specific rows and columns

```
pd.read_csv("../datasets/wine_data.csv", nrows=5, usecols=[6,7,8,9,10,11,12])
```

## Cheatsheet
```
wine_df.dropna()
wine_df.dropna(how='all') // when all values are empty
wine_df.dropna(thresh=4)  // 4 values in a row should be present
wine_df[wine_df['3'].notnull()] // show rows having values in column 3 




```