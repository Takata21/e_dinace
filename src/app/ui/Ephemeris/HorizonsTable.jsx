"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Headers } from "@/app/libs/constant";
import { csvToObjectArray } from "@/app/libs/ephemerisUtils";
import Link from "next/link";

export function HorizonsTable({ info }) {
  console.log("------------>", info);
  const data = csvToObjectArray(info);
  return (
    <div>
      <Table>
        <TableCaption>
          Computations by: Solar System Dynamics Group, Horizons On-Line
          Ephemeris System Jet Propulsion Laboratory.
          <a
            href="https://ssd.jpl.nasa.gov/horizons/app.html#/"
            target="_blank"
            rel="noreferrer"
          >
            Mas
          </a>
        </TableCaption>
        <TableHeader>
          <TableRow>
            {Headers.map((item) => (
              <TableHead key={item.abbreviation}>{item.abbreviation}</TableHead>
            ))}
            {/* <TableHead>Status</TableHead>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((text) => {
            return (
              <TableRow key={text.date}>
                <TableCell className="py-2 text-xs text-left">
                  {text.date}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.raIcrf}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.decIcrf}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.ApMag}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.sBrt}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.delta}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.delDot}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.sotr}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.sto}
                </TableCell>
                <TableCell className="py-2 text-xs text-left">
                  {text.cnst}
                </TableCell>
              </TableRow>
            );
          })}
          {/* {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="bg-transparent ">
              <Link href="/column-meaning">Más información</Link>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
