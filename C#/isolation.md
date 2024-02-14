## Dirty Reads (mostly rollback scenario)

A dirty read occurs when a transaction reads data that has been written by another transaction that has not yet been committed. Since the second transaction can still be rolled back, the data read by the first transaction might never actually be persisted (if the second transaction is aborted). This means the first transaction may end up using data that is considered "dirty" or not guaranteed to be part of the database's permanent state.

Example: Transaction A starts and updates a record, changing a column value from 10 to 20 but does not immediately commit the transaction. Transaction B reads the same record before Transaction A commits its changes and sees the value as 20. If Transaction A is subsequently rolled back for any reason, the changes it made are undone, reverting the column value back to 10. However, Transaction B read and possibly made decisions based on the value being 20, which is problematic because, from the database's final perspective (after the rollback), that value was never truly committed and, in a sense, never "existed" as a confirmed state.

My Example: I modified quantity to 1 from 100. John read it as 100 from modified data, but in the end, I rolled back thus the data commited is actually lost.

## Non-Repeatable Reads

A non-repeatable read occurs when a transaction reads the same row twice and gets different data each time. This happens because another transaction modifies the data between the two reads and commits the changes, making the initial read by the first transaction out of date.

Example: Transaction A reads a record. Transaction B updates or deletes that record and commits the change. If Transaction A reads the same record again, it gets different data (or finds the record missing if it was deleted), leading to a non-repeatable read.

My Example: it means if I repeat the read again the value is different because somebody modified (deleted or update) the value.

## 3. Phantom Reads

A phantom read is a phenomenon where a transaction re-executes a query returning a set of rows that satisfy a search condition and finds that the set of rows satisfying the condition has changed due to another recently-committed transaction. This can occur because of new rows added by another transaction, which were not present in the original read.

Example: Transaction A executes a query to select rows where column_value < 10. Transaction B then inserts a new row that meets this condition and commits. If Transaction A re-executes the same query, it finds this new "phantom" row, which wasn't there during the first execution.

My Example: It's more of a inserting issue rather then modified in non-repeatable. If John insierted a row between two read, then latest read is having a new row that didn't exist

## Isolation level

How Isolation Levels Address These Phenomena Different isolation levels are designed to prevent these issues, with varying degrees of strictness:

**Read Uncommitted**: Allows dirty reads, non-repeatable reads, and phantom reads. It offers the highest level of concurrency but the least data integrity.

**Read Committed**: Prevents dirty reads but allows non-repeatable reads and phantom reads. It's a commonly used balance between concurrency and data integrity.

**Repeatable Read**: Prevents dirty reads and non-repeatable reads but allows phantom reads. It uses locks on all rows that a transaction reads, preventing other transactions from modifying them.

**Serializable**: Prevents dirty reads, non-repeatable reads, and phantom reads, offering the highest level of isolation. It serializes transactions, effectively making them operate as if they were executed one after the other, which can significantly impact performance.

**Snapshot**: This level, offered by some databases, provides a view of the database as it was at the start of the transaction, thus preventing dirty reads, non-repeatable reads, and phantom reads. It does so without acquiring locks, using versioning techniques instead.
