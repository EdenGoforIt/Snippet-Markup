# index

- `lock` statement is a syntactic sugar for a `try/finally` statement with `Monitor.Enter` and `Monitor.Exit`
- `lock` can only lock a `reference type`
- There are two locks `optimistic` and `pessimistic` locks

## pessimistic lock

- You can lock Middle Tier (Transaction scope, EF or LINQ)
- Data Access Layer
- SQL Server

Middle Tier

```

TransactionOptions TransOpt = New TransactionOptions();
TransOpt.IsolationLevel = System.Transactions.IsolationLevel.ReadCommitted;
using(TransactionScope scope = new TransactionScope(TransactionScopeOption.Required, TransOptions)) {}
```

ADO.NET (DAta Access Layer)

> ADO.NET stands for ActiveX Data Object is a database access technology created by Microsoft as part of its .NET framework that can access any kind of data source.

```
SqlTransaction objtransaction = objConnection.BeginTransaction(System.Data.IsolationLevel.Serializable);

```

SQL

```
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

```
